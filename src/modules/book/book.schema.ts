import { Schema, model } from 'mongoose'

// interface ISummaryPublishingHouses {
//   id: string | number
//   name: string
// }

// interface ISummaryAuthor {
//   id: string | number
//   name: string
//   avatar: string
// }

// interface ISummaryCategory {
//   id: string | number
//   name: string
//   parent_id: string | number
// }

// export interface IBook {
//   audio_id: number
//   epub_id: number
//   updated_time: Date | string
//   size: number
//   total_chapter: number
//   id: number
//   title: string
//   content_type: string
//   our_price: number
//   price: number
//   description: string
//   zone: number
//   published_time: Date | string
//   order: null
//   detail_url: string
//   content_detail_url: string
//   publishing_houses: ISummaryPublishingHouses[]
//   authors: ISummaryAuthor[]
//   authors_json: string
//   author: string
//   author_id: string | number
//   category_id: string | number
//   category_name: string
//   categories: ISummaryCategory[]
//   categories_vn: []
//   sub_category: string
//   tags: string
//   in_wistlist: number
//   rate_value: number
//   rate_time: string | Date
//   avg_rate_value: string | number
//   total_rate_count: string | number
//   last_read: unknown
//   read_percentages: unknown
//   short_content: unknown
//   content_status: string
//   show_watermark: unknown
//   scroll_disable: unknown
//   label_type: unknown
//   total_comment: string | number
//   total_wishlist: string | number
//   created_time: Date | number | string
//   thumb: string
//   share_thumb: string
//   is_brief: unknown
//   book_related_id: number | string
//   ranking_top: number | string
//   rate_content: unknown
//   book_type: number | string
//   link_review: string
//   product_id: 0
//   bit_code: 0
//   status_xbol: 1
//   parent_xbol_id: 2167
//   partner_content_id: 0
//   number_view: 1543
//   publishing_house_type: ''
//   is_publishing_house_owner: false
//   is_freelancer: 0
//   amount_compare: 30
//   mini_app: {
//     id: 1
//     code: 'Sách truyện'
//     type: 'waka_ebook'
//     text_color: '#0BAFFF'
//     background_color: '#E0F1FF'
//   }
//   first_chapter_id: 0
//   short_link: 'https://tywd4.app.goo.gl/7Kd2'
//   read_link: 'https://ebook.waka.vn/niem-tich-rnKXYW.html'
//   chapter_newest: {
//     id: '47953'
//     name: 'Phần 1'
//   }
//   collection_status: string
//   meta_rate: {
//     '1': 0
//     '2': 0
//     '3': 0
//     '4': 0
//     '5': 4
//   }
//   flashsale: null
//   permission: {
//     read: 0
//     owner: 2
//     button_buy: 0
//     message: 'Vui lòng đăng nhập tài khoản của bạn để đọc nội dung này.'
//   }
//   file_path: ''
//   file_version: 1
//   auto_update: true
// }

export enum BookInfoStatus {
  SUMMARY = 'summary',
  DETAIL = 'detail',
}

export enum CrawlStatus {
  READY = 'ready',
  RUNNING = 'running',
  FINISHED = 'finished',
}

export enum MountStatus {
  UNREADY = 'unready',
  MOUNTING = 'mounting',
  MOUNTED = 'mounted',
}

export interface IBook {
  bookInfoStatus: BookInfoStatus
  crawlStatus: CrawlStatus
  mountStatus: MountStatus
  isDownloadedThumbnail: boolean
  isDownloadedBookEpub: boolean
}

const bookSchema = new Schema<IBook>(
  {
    crawlStatus: {
      type: String,
      require: true,
      enum: Object.values(CrawlStatus),
      default: CrawlStatus.READY,
    },
    mountStatus: {
      type: String,
      require: true,
      enum: Object.values(MountStatus),
      default: MountStatus.UNREADY,
    },
    isDownloadedThumbnail: {
      type: Boolean,
      require: true,
      default: false,
    },
    isDownloadedBookEpub: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  { id: false, strict: false, timestamps: true },
)

function generateCrawlStatus(value: CrawlStatus, { isDownloadedThumbnail, isDownloadedBookEpub }: any) {
  if (isDownloadedThumbnail && isDownloadedBookEpub) {
    return CrawlStatus.FINISHED
  }

  return value
}

bookSchema.pre(['save'], function (this: any, next) {
  this.crawlStatus = generateCrawlStatus(this.crawlStatus, {
    isDownloadedThumbnail: this.isDownloadedThumbnail,
    isDownloadedBookEpub: this.isDownloadedBookEpub,
  })

  next()
})

bookSchema.pre(['updateOne', 'findOneAndUpdate'], function (this: any, next) {
  const data = this.getUpdate()

  data.crawlStatus = generateCrawlStatus(data.crawlStatus, {
    isDownloadedThumbnail: data.isDownloadedThumbnail,
    isDownloadedBookEpub: data.isDownloadedBookEpub,
  })

  next()
})
export const Book = model('Book', bookSchema)
