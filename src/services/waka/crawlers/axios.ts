import crypto from 'crypto'
import axios, { AxiosInstance, AxiosProxyConfig, type AxiosHeaders, CreateAxiosDefaults, AxiosResponse } from 'axios'
import UserAgent from 'user-agents'

import { getRandomDeviceId } from '#utils'
import { WAKA_API, ApiConstant, ApiParams, ApiPath, type IApiConstantKeys } from '#services/waka/constants'

interface IGetItemInfoParams {
  account: string
  item_id: number | string
  content_type: string
  id: string
  os: string
  secure_code: string
}

interface IBookSummaryProps {
  contentType?: number
  pageNo?: number
  pageSize?: number
}

export class AxiosCrawler {
  private axiosClient: AxiosInstance
  private deviceId: string

  constructor(axiosConfigs?: CreateAxiosDefaults) {
    const { userAgent } = new UserAgent([/Firefox/]).data

    this.deviceId = getRandomDeviceId()
    this.axiosClient = axios.create({
      baseURL: WAKA_API,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
        Connection: 'keep-alive',
        Host: 'beta-api.waka.vn',
        Origin: 'https://waka.vn',
        Referer: 'https://waka.vn/',
        // 'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        // 'Sec-Ch-Ua-Mobile': '?0',
        // 'Sec-Ch-Ua-Platform': '"macOS"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': userAgent,
      },
      proxy: axiosConfigs?.proxy,
      timeout: axiosConfigs?.timeout ?? 1000,
    })

    console.log({ userAgent, deviceId: this.deviceId })
  }

  private generateKey(text: string) {
    return crypto.createHash('md5').update(text).digest('hex')
  }

  private formatResponseData(response: AxiosResponse) {
    return response.data?.data
  }

  private generateSecretCode(type: IApiConstantKeys, params: any) {
    let arrayParams: any[] = []
    ApiParams[type].forEach((key: any) => {
      arrayParams = [...arrayParams, params[key]]
    })

    const text = arrayParams.join(' ')
    const key = this.generateKey('guest')
    const hmac = crypto.createHmac('sha1', key).setEncoding('base64')
    const encryptedText = hmac.end(text).read()

    return encryptedText
  }

  async getSummaryBooks(params: IBookSummaryProps = {}) {
    const { contentType = 1, pageNo = 1, pageSize = 12 } = params

    const generateSecretCodeParams = {
      account: 'guest',
      major_id: 500,
      content_type: contentType,
      page_no: pageNo,
      page_size: pageSize,
      id: this.deviceId,
      os: 'web',
    }
    const secretCode = this.generateSecretCode(ApiConstant.MAJOR_BLOCK, generateSecretCodeParams)

    const getSummaryBooksParams = {
      ...generateSecretCodeParams,
      secure_code: secretCode,
    }

    return this.axiosClient.get(ApiPath.MAJOR_BLOCK, {
      params: getSummaryBooksParams,
    })
  }

  async getItemInfo(itemId: number | string) {
    const params = {
      id: this.deviceId,
      os: 'web',
      account: 'guest',
      item_id: itemId,
      content_type: 'book',
    }
    const secretCode = this.generateSecretCode(ApiConstant.GET_ITEM_INFO, params)

    const getItemInfoParams: IGetItemInfoParams = {
      ...params,
      secure_code: secretCode,
    }

    return this.axiosClient.get(ApiPath.GET_ITEM_INFO, { params: getItemInfoParams })
  }

  async getDownloadItem(itemId: number | string) {
    const params = {
      os: 'web',
      id: this.deviceId,
      account: 'guest',
      item_id: itemId,
      content_type: 'book',
    }
    const secretCode = this.generateSecretCode(ApiConstant.GET_DOWNLOAD_EBOOK, params)
    const getDownloadItemParams = {
      ...params,
      secure_code: secretCode,
    }

    return this.axiosClient.get(ApiPath.GET_DOWNLOAD_EBOOK, { params: getDownloadItemParams })
  }

  async getBookDetail(itemId: number | string) {
    const itemInfoPromise = this.getItemInfo(itemId).then(this.formatResponseData)
    const downloadedItemPromise = this.getDownloadItem(itemId).then(this.formatResponseData)

    const [itemInfo, { epub_url }] = await Promise.all([itemInfoPromise, downloadedItemPromise])

    const bookDetail = {
      ...itemInfo,
      raw_thumb: itemInfo.thumb.split('?')[0],
      epub_url,
    }

    return bookDetail
  }
}
