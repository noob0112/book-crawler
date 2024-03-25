import crypto from 'crypto'
import axios, { AxiosInstance, AxiosProxyConfig, type AxiosHeaders } from 'axios'
import { randomDeviceId } from '#utils'

interface IAxiosConfigs {
  headers?: typeof AxiosHeaders
  proxy?: false | AxiosProxyConfig
  timeout?: number
}

const WAKA_API = 'https://beta-api.waka.vn'

type TGetItemInfo = ['account', 'item_id', 'content_type', 'id', 'os']

type TItemInfo = 'account' | 'item_id' | 'content_type' | 'id' | 'os'

const GET_ITEM_INFO: TGetItemInfo = ['account', 'item_id', 'content_type', 'id', 'os']

interface IGetItemInfoParams {
  account: string
  item_id: number
  content_type: string
  id: string
  os: string
  secure_code: string
}

export class AxiosCrawler {
  private axiosClient: AxiosInstance
  private deviceId: string

  constructor(axiosConfigs?: IAxiosConfigs) {
    this.deviceId = randomDeviceId()
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
        'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"macOS"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      },
      proxy: axiosConfigs?.proxy,
      timeout: axiosConfigs?.timeout ?? 1000
    })
  }

  private generateKey(text: string) {
    return crypto.createHash('md5').update(text).digest('hex')
  }

  private generateSecretCode(params: any) {
    let arrayParams: any[] = []
    const secretText = ''
    GET_ITEM_INFO.forEach((key: any) => {
      arrayParams = [...arrayParams, params[key]]
    })

    const text = arrayParams.join(' ')

    const key = this.generateKey('guest')

    const hmac = crypto.createHmac('sha1', key).setEncoding('base64')
    const encryptedText = hmac.end(text).read()

    return encryptedText
  }

  async getBooks() {
    const deviceId = '1462e3814e3e07fd7f1b01b65dfb5843'
    const text = ''
    const secretCode = this.generateSecretCode(text)

    const params = {
      account: 'guest',
      id: deviceId,
      major_id: 500,
      content_type: 1,
      page_no: 1,
      page_size: 12,
      secretCode
    }

    axios.get('/user', {
      params
    })
  }

  async getBookDetail(itemId: number) {
    const params = {
      id: this.deviceId,
      os: 'web',
      account: 'guest',
      item_id: itemId,
      content_type: 'book'
    }
    const secretCode = this.generateSecretCode(params)

    const getItemInfoParams: IGetItemInfoParams = {
      ...params,
      secure_code: secretCode
    }
    return this.axiosClient.get('super/getItemInfo', { params: getItemInfoParams })
  }
}
