export const WAKA_API = 'https://beta-api.waka.vn'

const route = {
  HOME: 'index',
  PROFILE: 'account-profile',
  BOOK_CASE: 'account-bookcase',
  ACHIEVEMENTS: 'account-achievements',
  TRANSACTION_HISTORIES: 'account-transaction-histories',
  PODCAST: 'podcast',
  PODCAST_DETAIL: 'podcast-slug',
  HIEUSOI: 'hieu-soi',
  HIEUSOI_DETAIL: 'hieu-soi-slug',
  AUDIO_BOOK: 'sach-noi',
  AUDIO_BOOK_DETAIL: 'sach-noi-slug',
  EBOOK: 'ebook',
  EBOOK_DETAIL: 'ebook-slug',
  COMBO: 'combo',
  COMBO_DETAIL: 'combo-slug',
  COLLECTION: 'tuyen-tap',
  COLLECTION_DETAIL: 'tuyen-tap-slug',
  NEWS: 'tin-waka',
  NEWS_DETAIL: 'slug',
  EPISODE: 'episode-slug',
  AUTHOR: 'author',
  AUTHOR_DETAIL: 'author-slug',
  PACKAGE_PLAN: 'package-plan',
  PACKAGE_PLAN_PAYMENT: 'package-plan-payment',
  PACKAGE_PLAN_OAK: 'package-plan-oak',
  PACKAGE_PLAN_OAK_PAYMENT: 'package-plan-oak-payment',
  PACKAGE_PLAN_RETAIL_PAYMENT: 'package-plan-retail-payment',
  ACTIVE_CODE: 'package-plan-activate-code',
  TIN_KHAC: 'tin-khac',
  REVIEW_TRUYEN: 'review-truyen',
  TUYEN_DUNG: 'tuyen-dung',
  RANKING: 'bang-xep-hang',
  LATEST_RELEASED: 'moi-cap-nhat',
  SEARCH: 'search',
  SEARCH_DETAIL: 'search-slug',
  READER_DETAIL: 'reader-slug',
  MUA_LE: 'mua-le-sach',
  BENEFIT_VIP: 'quyen-loi-hoi-vien-waka',
  INTRO: 'gioi-thieu',
  RECRUITMENT: 'tuyen-dung',
  TERM_SERVICE: 'thoa-thuan-su-dung-dich-vu-waka',
  PRIVACY: 'quyen-loi-rieng-tu',
  PAPER: 'bao-chi',
  MARKET_REPORT: 'bao-cao-thi-truong',
  NEWEST: 'moi-nhat',
  WORLD_BOOK: 'diem-sach-the-gioi',
  WAKA_SUGGEST: 'waka-de-xuat',
  MAJOR_DETAIL: 'chuyen-muc-slug',
  EBOOK_ALL: 'ebook-tat-ca',
  AUDIOBOOK_ALL: 'sach-noi-tat-ca',
  RETAIL_BOOK_ALL: 'hieu-soi-tat-ca',
  PODCAST_ALL: 'podcast-tat-ca',
  BRIEF_BOOK: 'sach-tom-tat',
  AUDIO_COLLECTION: 'tuyen-tap-sach-noi',
  AUDIO_COLLECTION_DETAIL: 'tuyen-tap-sach-noi-slug',
  INTRODUCTION: 'thong-tin-slug',
  ACCOUNT_LIBRARY: 'account-library',
  EMBED_READER_SLUG: 'embed-reader-slug',
  EMBED_READER_VIEWER: 'embed-reader-viewer'
}
const o = {
  redirectAfterLogin: 'waka.auth.returnUrl',
  accountInfo: 'accountInfo',
  accessToken: 'fm.auth.accessToken',
  refreshToken: 'fm.auth.refreshToken',
  tidToken: 'fm.auth.tid',
  contentReader: 'contentReader',
  deviceId: 'deviceId',
  os: 'os',
  parentInfo: 'waka.player.parentInfo',
  contentAudioItem: 'waka.player.contentAudioItem',
  contentPlayer: 'waka.player.contentPlayer',
  isSummary: 'waka.player.isSummary',
  relatePlaylist: 'waka.player.relatePlaylist',
  contentAudioInfo: 'waka.player.contentAudioInfo',
  accent: 'waka.player.accent',
  timePosition: 'waka.player.timePosition',
  repeat: 'waka.player.repeat',
  volume: 'waka.player.volume',
  playbackRate: 'waka.player.playbackRate',
  readerConfigs: 'readerConfig',
  typeLogin: 'typeLogin',
  position: 'waka.player.position',
  iconPopupHome: 'iconPopupHome',
  miniApp: 'miniApp',
  logViewPage: 'waka.logViewPage',
  chapterWithCfiReading: 'chapterWithCfiReading',
  infoDevice: 'infoDevice'
}
const c = ['backgroundType', 'fontSize', 'spreadLayout', 'fontFamily', 'isScroll']
const l = {
  LOGIN: 'modal-login',
  REGISTER: 'modal-register',
  FORGOT_PASSWORD: 'modal-forgot-password',
  CREATE_NEW_PASSWORD: 'modal-create-new-password',
  CONFIRM_OTP: 'modal-confirm-otp',
  VERIFY_ACCOUNT: 'modal-verify-account',
  MODAL_VERIFY_EMAIl: 'modal-verify-email',
  MODAL_CONFIRM_OTP_VERIFY: 'modal-confirm-otp-email',
  SELECT_TYPE_FORGOT: 'modal-select-type-forgot',
  SESSION_EXPIRED: 'modal-session-expired'
}
const d = {
  PAY: 'Pay',
  REQUIRED_BUY: 'Required_Buy'
}
const f = {
  PASSWORD: 'password',
  TEXT: 'text ',
  NUMBER: 'number',
  EMAIL: 'email'
}
const h = {
  PHONE: 1,
  EMAIL: 2
}
const m = [
  {
    name: 'Hội viên',
    slug: 0
  },
  {
    name: 'Hiệu sồi',
    slug: 1
  }
]

const slugs = [
  {
    name: 'Mua lẻ sách',
    slug: 0
  },
  {
    name: 'Combo',
    slug: 2
  },
  {
    name: 'Hiệu sồi',
    slug: 1
  }
]
const x = {
  NEWS_BLOCK: 'news_block',
  MAJOR_BLOCK: 'major_block',
  COLLECTION_BLOCK: 'collection_block',
  BOOK_COLLECTION: 'book_collection',
  AUTHOR_BLOCK: 'author_block',
  COMBO_BLOCK: 'combo_block',
  FM_CATEGORY_BLOCK: 'fm_category_block',
  EBOOK_CATEGORY_BLOCK: 'ebook_category_block',
  SUGGEST_CONTENT_BLOCK: 'suggest_content_block',
  BUY_CONTENT_BLOCK: 'buy_content_block',
  NEWEST_PODCAST_BLOCK: 'newest_podcast_block',
  HOT_CONTENT_BLOCK: 'hot_content_block',
  YOUR_CONTENT_BLOCK: 'your_content_block',
  USER_CONTENT_BLOCK: 'user_content_block',
  SLIDE_BANNER_BLOCK: 'slide_banner_block',
  NEWEST_CHAPTER_BLOCK: 'newest_chapter_block',
  RETAIL_CATEGORY_BLOCK: 'retail_category_block',
  PODCAST_CATEGORY_BLOCK: 'podcast_category_block',
  FM_AUDIO_BOOK: 'fm_audio_book',
  FM_PODCAST: 'fm_podcast',
  NEWEST_EPISODE_BLOCK: 'newest_episode_block',
  RETAIL_SHELF_BOOK: 'retail_shelf_block',
  RETAIL_FULL_BOOK: 'retail_full_block',
  FM_COLLECTION_BLOCK: 'fm_collection_block',
  USER_FOLLOW_BLOCK: 'user_follow_block',
  HOT_CONTENT_EBOOK: 'hot_content_ebook',
  EPISODE: 'fm_audio_file',
  HOT_CONTENT_AUDIO: 'hot_content_audio',
  HOT_CONTENT_EBOOK_BRIEF: 'hot_content_ebook_brief',
  HOT_CONTENT_AUDIO_BRIEF: 'hot_content_audio_brief'
}
const v = {
  ACCOUNT_INFO: 'AccountInfo',
  ACCOUNT_SECURITY: 'AccountSecurity',
  ACCOUNT_LINK: 'AccountLink'
}
const k = {
  BOOK: 1,
  AUDIO_BOOK: 52,
  POD_CAST: 53,
  COMICS: 60,
  OAK_BOOKS: 33,
  ACCOUNT: 8091140,
  BRIEF: 1010,
  MOQ: '2111'
}
const w = {
  HOME_PAGE: 'homepage',
  HOME_PAGE_APP: 'homepage_app',
  EBOOK: 'ebook',
  FM_AUDIO_BOOK: 'fm_audio_book',
  PODCAST: 'podcast',
  RETAIL_BOOK: 'retail_book',
  COMICS: 'comics',
  BRIEF: 'brief'
}
const y = {
  PAGE_SIZE: 30,
  PAGE_NO: 1
}
const O = {
  SLIDE_MAJOR_BLOCK: 'slide_major_block'
}
const E = {
  1: 'ebook',
  52: 'fm_audio_book',
  53: 'podcast',
  60: 'comics',
  33: 'retail_book'
}
const C = {
  Other: 0,
  Nam: 1,
  Nữ: 2
}
const P = {
  0: 'Khác',
  1: 'Nam',
  2: 'Nữ'
}
const T = {
  8: {
    name: 'Google',
    icon: 'icon-google'
  },
  4: {
    name: 'Facebook',
    icon: 'icon-facebook'
  }
}
const A = {
  REVIEW: 'review',
  EPISODE: 'episode'
}
const D = {
  type: 'package',
  IS_RETAIL: 0,
  PAGE: 1
}
const I = [
  {
    label: 'Khác',
    value: 0
  },
  {
    label: 'Nam',
    value: 1
  },
  {
    label: 'Nữ',
    value: 2
  }
]
const S = 5
const R = {
  MEMBER: 'member',
  OAK: 'oak'
}
const M = {
  AUDIOBOOK: 'audiobook',
  EBOOK: 'ebook'
}
const L = {
  FOLLOW: 1,
  UN_FOLLOW: 0
}
const N = {
  0: 'Đã hoàn',
  4: 'Tạm dừng',
  1: 'Đang ra',
  3: 'Hết hạn bản quyền',
  2: 'Hết hạn bản quyền'
}
const j = 10
const B = {
  NEW: 0,
  OLD: 1
}
const G = {
  NEW: 'order_desc',
  OLD: 'order_asc'
}
const $ = {
  ACTIVE: 1,
  INACTIVE: 0
}
const H = {
  title: {
    1: 'Hủy mua tự động',
    0: 'Mua tự động'
  },
  description: {
    1: 'Bạn đang yêu cầu hủy tính năng mua tự động.',
    0: 'Bạn đang yêu cầu tính năng mua tự động để đọc truyện nhanh hơn - tiện lợi hơn\n'
  },
  text: {
    1: 'Bạn có muốn tiếp tục không',
    0: 'Mua tự động giúp bạn tự động mua ngay chương mới phát hành bằng tài khoản Sồi'
  }
}
const U = {
  5: 0,
  4: 0,
  3: 0,
  2: 0,
  1: 0
}
const W = {
  REQUIRED_LOGIN: 0,
  HAVE_PERMISSION_READ: 1,
  NEED_BUY_RETAIL: 2,
  NEED_BUY_MEMBERSHIP: 3,
  BOOKS_AWAITING_COPYRIGHT_APPROVAL: 4,
  PACKAGE_PENDING_RENEWAL: 5
}
const F = {
  FREE: 0,
  MEMBERSHIP: -1,
  BOOK_RETAIL: 2,
  MEMBERSHIP_AND_BOOK_RETAIL: -2
}
const K = {
  FREE: 0,
  MEMBERSHIP: 1,
  READ_TRY: 2,
  BUY_RETAIL: 3,
  GIFT_BOOK_OR_NETPLUS: 4,
  READ_BUY_FLAG_VIP: 5,
  READ_BUY_TSDN: 6,
  READ_BUY_TSTN_SCHOOL: 7,
  READ_BUY_VMG_DATA: 8
}
const z = {
  CONFIRM: 'confirm',
  SELECT_LEAF: 'select_leaf',
  BUY_LEAF: 'buy_leaf',
  HIDDEN: 'hidden'
}
const Y = {
  ebook: 1,
  audiobook: 52,
  oak: 33,
  comic: 60
}
const V = {
  CONTENTS: 'contents',
  BOOKMARK: 'bookmark',
  NOTE: 'note'
}
const J = {
  1: {
    fill: '#FEF5B2'
  },
  2: {
    fill: '#ADD8FF'
  },
  3: {
    fill: '#FFB0CA'
  },
  4: {
    fill: '#D9B2FF'
  }
}
const X = {
  FAVORITE: 'Yêu thích sách',
  AUTO_BUY: 'Mua tự động'
}
const Q = {
  EMAIL: 8,
  FACEBOOK: 4
}
const Z = {
  FACEBOOK: 'facebook',
  EMAIL: 'email',
  LOGIN: 'login'
}
const tt = {
  DEFAULT: 'DEFAULT',
  REPEAT: 'REPEAT',
  REPEAT_ONE: 'REPEAT_ONE',
  AUTO: 'AUTO'
}
const et = {
  SUPPORT: 'support'
}
const nt = {
  500: '/moi-nhat',
  502: '/waka-de-xuat',
  503: '/sach-tom-tat',
  504: '',
  509: '/diem-sach-the-gioi'
}
const ot = {
  SUGGEST_APP: 1,
  SUPPORT: 2,
  BUY_TO_LISTEN: 3,
  CONNECTION_ERROR: 4
}
const it = {
  ERROR: 1,
  SUCCESS: 0,
  WAITING: 5,
  CONFIRM: 3
}
const at = {
  HOME: 'https://tywd4.app.goo.gl/j9Xe'
}
const ut = [
  {
    id: 1,
    name: 'Giới thiệu',
    icon: 'icon-introduce',
    link: '/gioi-thieu'
  },
  {
    id: 2,
    name: 'Cơ cấu tổ chức',
    icon: 'icon-organization',
    link: '/co-cau-to-chuc'
  },
  {
    id: 3,
    name: 'Lĩnh vực hoạt động',
    icon: 'icon-activity',
    link: '/linh-vuc-hoat-dong'
  },
  {
    id: 4,
    name: 'Đối tác',
    icon: 'icon-daycare',
    link: '/doi-tac'
  },
  {
    id: 5,
    name: 'Công bố bản quyền',
    icon: 'icon-justice',
    link: '/cong-bo-ban-quyen'
  }
]

export const ApiConstant = {
  LOGIN_VIA_SOCIAL: 'LOGIN_VIA_SOCIAL',
  LOGIN_VIA_TOKEN: 'LOGIN_VIA_TOKEN',
  CREATE_ACCOUNT: 'CREATE_ACCOUNT',
  GET_OTP_VERIFY_PHONE: 'GET_OTP_VERIFY_PHONE',
  CONFIRM_OTP_CREATE_ACCOUNT: 'CONFIRM_OTP_CREATE_ACCOUNT',
  CONFIRM_OTP_VERIFY_PHONE: 'CONFIRM_OTP_VERIFY_PHONE',
  GET_QR_CODE: 'GET_QR_CODE',
  LOGIN_WITH_QR: 'LOGIN_WITH_QR',
  HOME_BLOCK: 'HOME_BLOCK',
  LIST_NEWS: 'LIST_NEWS',
  MAJOR_BLOCK: 'MAJOR_BLOCK',
  LIST_RECOMMENDED: 'LIST_RECOMMENDED',
  LIST_RANKING: 'LIST_RANKING',
  LIST_PODCAST: 'LIST_PODCAST',
  ITEM_BY_CAT: 'ITEM_BY_CAT',
  LIST_AUDIO_BY_CAT: 'LIST_AUDIO_BY_CAT',
  LIST_COMBO: 'LIST_COMBO',
  LIST_AUTHORS: 'LIST_AUTHORS',
  LIST_FEATURE_COLLECTIONS: 'LIST_FEATURE_COLLECTIONS',
  HOME_SLIDE: 'HOME_SLIDE',
  GET_OTP: 'GET_OTP',
  GET_LIST_NEWS: 'GET_LIST_NEWS',
  LIST_NEWEST_CHAPTER: 'LIST_NEWEST_CHAPTER',
  SA_SEARCH: 'SA_SEARCH',
  LIST_PACKAGE: 'LIST_PACKAGE',
  LIST_PAYMENT: 'LIST_PAYMENT',
  RETAIL_BOOK_BY_CAT: 'RETAIL_BOOK_BY_CAT',
  LOGIN: 'LOGIN',
  LIST_PACKAGE_OAK: 'LIST_PACKAGE_OAK',
  CHANGE_ACCOUNT_INFO: 'CHANGE_ACCOUNT_INFO',
  CHANGE_AVATAR: 'CHANGE_AVATAR',
  GET_CONNECT_SOCIAL: 'GET_CONNECT_SOCIAL',
  SA_CHARGE: 'SA_CHARGE',
  GET_USER_TRANSACTION: 'GET_USER_TRANSACTION',
  GET_EVENT_CHART_INFO: 'GET_EVENT_CHART_INFO',
  GET_EVENT_READ_STATISTICS: 'GET_EVENT_READ_STATISTICS',
  HOME_AUDIO_BOOK_SLIDE: 'HOME_AUDIO_BOOK_SLIDE',
  LIST_CATEGORY_BY_PAGE: 'LIST_CATEGORY_BY_PAGE',
  GET_RECOMMEND_CONTENT: 'GET_RECOMMEND_CONTENT',
  LIST_RANKING_BY_OFFSETS: 'LIST_RANKING_BY_OFFSETS',
  LIST_CONTENT_CAMPAIGN_FLASH_SALE: 'LIST_CONTENT_CAMPAIGN_FLASH_SALE',
  LIST_AUDIO_BY_CATE: 'LIST_AUDIO_BY_CATE',
  LIST_PODCAST_CHAP_NEW: 'LIST_PODCAST_CHAP_NEW',
  ADD_WISH_LIST_ITEM: 'ADD_WISH_LIST_ITEM',
  CALL_SOCIAL_BY_ACCOUNT: 'CALL_SOCIAL_BY_ACCOUNT',
  CALL_FORGOT_PASSWORD_BY_ACCOUNT: 'CALL_FORGOT_PASSWORD_BY_ACCOUNT',
  CALL_CONFIRM_OTP_BY_ACCOUNT: 'CALL_CONFIRM_OTP_BY_ACCOUNT',
  LIST_PODCAST_BY_CATEGORY_ID: 'LIST_PODCAST_BY_CATEGORY_ID',
  GET_DETAIL_BOOK_OAK: 'GET_DETAIL_BOOK_OAK',
  SUBSCRIBE_BOOK_OAK: 'SUBSCRIBE_BOOK_OAK',
  LIST_NEWEST_CHAPTER_OAK: 'LIST_NEWEST_CHAPTER_OAK',
  LIST_CHAPTER_BOOK_OAK: 'LIST_CHAPTER_BOOK_OAK',
  LIST_RATE_FM: 'LIST_RATE_FM',
  RATE_FM: 'RATE_FM',
  GET_LIST_COLLECTIONS: 'GET_LIST_COLLECTIONS',
  GET_COLLECTION_DETAIL: 'GET_COLLECTION_DETAIL',
  GET_COLLECTION_ITEMS: 'GET_COLLECTION_ITEMS',
  LIST_HOT_COLLECTION_EBOOK: 'LIST_HOT_COLLECTION_EBOOK',
  LIST_BASE_MENU: 'LIST_BASE_MENU',
  GET_USER_CONTENT: 'GET_USER_CONTENT',
  SUBMIT_CODE: 'SUBMIT_CODE',
  LIST_COMMENT_COMIC: 'LIST_COMMENT_COMIC',
  AUTO_RENEW_BOOK: 'AUTO_RENEW_BOOK',
  CHECK_BOUGHT_CHAP_OAK: 'CHECK_BOUGHT_CHAP_OAK',
  BUY_CHAPTER_BOOK_OAK: 'BUY_CHAPTER_BOOK_OAK',
  MAY_YOU_LIKE_RETAIL_BOOK: 'MAY_YOU_LIKE_RETAIL_BOOK',
  GET_DETAIL: 'GET_DETAIL',
  GET_LIST_AUDIO_FILE: 'GET_LIST_AUDIO_FILE',
  RELATED_FM: 'RELATED_FM',
  GET_CONTENT_AUTHORS: 'GET_CONTENT_AUTHORS',
  LATES_NEWS: 'LATES_NEWS',
  NEWS_CATEGORY: 'NEWS_CATEGORY',
  LIST_NEWS_BY_CATEGORY: 'LIST_NEWS_BY_CATEGORY',
  GET_DETAIL_NEWS: 'GET_DETAIL_NEWS',
  DETAIL_COMBO_BOOK: 'DETAIL_COMBO_BOOK',
  PARITY_COMBO: 'PARITY_COMBO',
  COMBO_SAME_CATEGORY: 'COMBO_SAME_CATEGORY',
  DETAIL_EPISODE_PODCAST: 'DETAIL_EPISODE_PODCAST',
  GET_ITEM_INFO: 'GET_ITEM_INFO',
  GET_BANNER: 'GET_BANNER',
  LIST_DONATE_LEAF: 'LIST_DONATE_LEAF',
  DONATE_LEAF: 'DONATE_LEAF',
  RETAIL_HOME_BOOK_SHELF: 'RETAIL_HOME_BOOK_SHELF',
  GET_DOWNLOAD_EBOOK: 'GET_DOWNLOAD_EBOOK',
  getNotes: 'getNotes',
  addNotes: 'addNotes',
  updateNote: 'updateNote',
  removeNotes: 'removeNotes',
  getBookMarks: 'getBookMarks',
  addBookMarks: 'addBookMarks',
  removeBookMarks: 'removeBookMarks',
  updateReadTime: 'updateReadTime',
  GET_ORDER_INFO: 'GET_ORDER_INFO',
  DETAIL_AUTHOR: 'DETAIL_AUTHOR',
  LIST_COMBO_BEST_SALE: 'LIST_COMBO_BEST_SALE',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  FEEDBACK_AUDIO_FILE: 'FEEDBACK_AUDIO_FILE',
  CHANGE_EMAIL: 'CHANGE_EMAIL',
  VERIFY_OTP_EMAIL: 'VERIFY_OTP_EMAIL',
  UPDATE_LISTEN_TIME: 'UPDATE_LISTEN_TIME',
  GET_DOWNLOAD_ITEM: 'GET_DOWNLOAD_ITEM',
  LIST_SAME_CONTENT: 'LIST_SAME_CONTENT',
  BUY_BOOK_OAK: 'BUY_BOOK_OAK',
  LIST_BUY_CONTENT: 'LIST_BUY_CONTENT',
  GET_RELATED_BOOKS: 'GET_RELATED_BOOKS',
  GET_DOWNLOAD_ITEM_OAK_WEB: 'GET_DOWNLOAD_ITEM_OAK_WEB',
  LIST_TOPIC: 'LIST_TOPIC',
  DETAIL_TOPIC: 'DETAIL_TOPIC',
  LIST_AUDIO_BY_TOPIC: 'LIST_AUDIO_BY_TOPIC',
  GET_TODAY_READ_STATISTICS: 'GET_TODAY_READ_STATISTICS',
  DETAIL_BOOK_CATE: 'DETAIL_BOOK_CATE',
  GET_INTRODUCTION: 'GET_INTRODUCTION',
  CONTENT_FLASH_SALE: 'CONTENT_FLASH_SALE',
  LIST_API_BUY_CATEGORY_V2: 'LIST_API_BUY_CATEGORY_V2',
  FM_DETAIL_CATEGORY: 'FM_DETAIL_CATEGORY',
  GET_DETAIL_MAJOR: 'GET_DETAIL_MAJOR',
  GET_COMPANY_INFORMATION: 'GET_COMPANY_INFORMATION',
  GET_LIST_COPYRIGHT: 'GET_LIST_COPYRIGHT',
  LOG_SEARCH_CONTENT: 'LOG_SEARCH_CONTENT',
  COUNT_NOTIFICATION: 'COUNT_NOTIFICATION',
  TOP_SEARCH_CONTENT: 'TOP_SEARCH_CONTENT',
  GET_LIST_NOTIFY: 'GET_LIST_NOTIFY',
  READ_ALL_NOTIFY: 'READ_ALL_NOTIFY',
  UPDATE_STATUS_NOTIFY: 'UPDATE_STATUS_NOTIFY',
  GET_POPUP_ADS: 'GET_POPUP_ADS',
  LIST_BANNER_CATEGORY_PODCAST: 'LIST_BANNER_CATEGORY_PODCAST',
  ADD_NOVEL_STORE: 'ADD_NOVEL_STORE',
  LOG_BANNER_POPUP: 'LOG_BANNER_POPUP',
  LOGOUT: 'LOGOUT',
  GET_NEXT_AUDIO: 'GET_NEXT_AUDIO',
  ZALO_LOGIN: 'ZALO_LOGIN',
  LOG_UTM_SOURCE: 'LOG_UTM_SOURCE',
  CREATE_ORDER_WAKA: 'CREATE_ORDER_WAKA',
  SEO_GAME_WAKA: 'SEO_GAME_WAKA',
  UPDATE_READER_TIME_ENTERPRISE: 'UPDATE_READER_TIME_ENTERPRISE'
} as const
export type IApiConstantKeys = keyof typeof ApiConstant

export const ApiParams = {
  LOGIN_VIA_SOCIAL: ['code', 'type', 'id', 'os'],
  LOGIN_VIA_TOKEN: ['accessToken', 'refreshToken', 'id', 'os'],
  GET_OTP: ['account', 'time', 'mobile', 'os', 'app_version', 'id'],
  GET_LIST_NEWS: ['account', 'page_no', 'page_size', 'id', 'os'],
  HOME_BLOCK: ['account', 'screen', 'page_no', 'page_size', 'id', 'os'],
  LIST_NEWS: ['account', 'page_no', 'page_size', 'id', 'os'],
  MAJOR_BLOCK: ['account', 'major_id', 'content_type', 'page_no', 'page_size', 'id', 'os'],
  LIST_RECOMMENDED: ['account', 'content_id', 'content_type', 'page_no', 'page_size', 'id', 'os'],
  LIST_RANKING: ['account', 'ranking_type', 'id', 'os'],
  LIST_PODCAST: ['account', 'category_id', 'type', 'page_no', 'page_size', 'sort', 'mini_app', 'id', 'os'],
  ITEM_BY_CAT: ['account', 'is_brief', 'category_id', 'page_no', 'page_size', 'id', 'os'],
  LIST_AUDIO_BY_CAT: ['account', 'category_id', 'page_no', 'page_size', 'id', 'os'],
  LIST_COMBO: ['account', 'id', 'os'],
  LIST_AUTHORS: ['account', 'page_no', 'page_size', 'id', 'os'],
  LIST_FEATURE_COLLECTIONS: ['account', 'page_no', 'page_size', 'os'],
  HOME_SLIDE: ['account', 'id', 'os'],
  RETAIL_BOOK_BY_CAT: ['account', 'category_id', 'page_no', 'page_size', 'id', 'os'],
  LIST_NEWEST_CHAPTER: ['account', 'page_no', 'page_size', 'id', 'os'],
  CREATE_ACCOUNT: ['account', 'phone_number', 'id', 'os'],
  GET_OTP_VERIFY_PHONE: ['account', 'phone_number', 'id', 'os'],
  CONFIRM_OTP_CREATE_ACCOUNT: ['account', 'phone_number', 'password', 'otp', 'id', 'os'],
  CONFIRM_OTP_VERIFY_PHONE: ['account', 'phone_number', 'otp', 'id', 'os'],
  GET_QR_CODE: ['account', 'id', 'os'],
  LOGIN_WITH_QR: ['account', 'id', 'os'],
  LOGIN: ['account', 'password'],
  SA_SEARCH: ['account', 'mini_app', 'content_type', 'id', 'os'],
  LIST_PACKAGE: ['account', 'id', 'os'],
  LIST_PAYMENT: ['account', 'id', 'os'],
  LIST_PACKAGE_OAK: ['account', 'id', 'os'],
  SA_CHARGE: ['account', 'item_id', 'charge_type', 'pay_type', 'bank_code', 'id', 'os'],
  HOME_AUDIO_BOOK_SLIDE: ['account', 'major_id', 'content_type', 'page_no', 'page_size', 'id', 'os'],
  LIST_CATEGORY_BY_PAGE: ['account', 'page', 'id', 'os'],
  ADD_WISH_LIST_ITEM: ['account', 'item_id', 'content_type', 'status', 'id', 'os'],
  CHANGE_ACCOUNT_INFO: ['account', 'fix_secure', 'sex', 'id', 'os'],
  CHANGE_AVATAR: ['account', 'id', 'os'],
  GET_CONNECT_SOCIAL: ['account', 'code', 'id', 'os'],
  GET_USER_TRANSACTION: ['account', 'type', 'is_retail', 'page_no', 'page_size', 'id', 'os'],
  GET_EVENT_CHART_INFO: ['account', 'id', 'os'],
  GET_EVENT_READ_STATISTICS: ['account', 'id', 'os'],
  GET_RECOMMEND_CONTENT: ['acocunt', 'content_id', 'content_type', 'page_no', 'page_size', 'id', 'os'],
  LIST_RANKING_BY_OFFSETS: ['account', 'content_type', 'ranking_type', 'offset', 'page_size', 'id', 'os'],
  LIST_CONTENT_CAMPAIGN_FLASH_SALE: ['account', 'content_type', 'id', 'os'],
  LIST_AUDIO_BY_CATE: ['account', 'category_id', 'page_no', 'page_size', 'id', 'os'],
  LIST_PODCAST_CHAP_NEW: ['account', 'id', 'os'],
  LIST_PODCAST_BY_CATEGORY_ID: ['account', 'category_id', 'page_no', 'page_size', 'id', 'os'],
  CALL_SOCIAL_BY_ACCOUNT: ['account', 'id', 'os'],
  CALL_FORGOT_PASSWORD_BY_ACCOUNT: ['account', 'type', 'id', 'os'],
  CALL_CONFIRM_OTP_BY_ACCOUNT: ['account', 'password', 'otp', 'type', 'id', 'os'],
  GET_LIST_COLLECTIONS: ['account', 'page_no', 'page_size'],
  GET_COLLECTION_DETAIL: ['account', 'collection_id'],
  GET_COLLECTION_ITEMS: ['account', 'collection_id', 'page_no', 'page_size'],
  LIST_HOT_COLLECTION_EBOOK: ['account', 'id', 'os'],
  LIST_BASE_MENU: ['account', 'id', 'os'],
  GET_USER_CONTENT: ['account', 'last_time', 'id', 'os'],
  SUBMIT_CODE: ['account', 'code', 'id', 'os'],
  GET_DETAIL_BOOK_OAK: ['account', 'book_id'],
  SUBSCRIBE_BOOK_OAK: ['account', 'book_id'],
  LIST_NEWEST_CHAPTER_OAK: ['account', 'page_no', 'page_size', 'id', 'os'],
  LIST_CHAPTER_BOOK_OAK: ['account', 'book_id', 'filter_id', 'page_no', 'page_size'],
  MAY_YOU_LIKE_RETAIL_BOOK: ['account', 'content_id', 'category_id', 'page_size', 'id', 'os'],
  LIST_RATE_FM: ['account', 'item_id', 'content_type', 'page_no', 'page_size', 'id', 'os'],
  RATE_FM: ['account', 'item_id', 'rate_value', 'content_type', 'id', 'os'],
  LIST_COMMENT_COMIC: ['account', 'content_id', 'content_type', 'id', 'os'],
  AUTO_RENEW_BOOK: ['account', 'book_id', 'type', 'id', 'os'],
  CHECK_BOUGHT_CHAP_OAK: ['account', 'book_id', 'chapter_id'],
  BUY_CHAPTER_BOOK_OAK: ['account', 'book_id', 'chapter_id'],
  GET_DETAIL: ['account', 'content_id', 'content_type', 'id', 'os'],
  GET_LIST_AUDIO_FILE: [
    'account',
    'content_id',
    'content_type',
    'sort',
    'is_summary',
    'download',
    'page_no',
    'page_size',
    'id',
    'os'
  ],
  RELATED_FM: ['account', 'item_id', 'content_type', 'page_no', 'page_size', 'id', 'os'],
  GET_CONTENT_AUTHORS: ['account', 'content_id', 'content_type', 'author_id', 'page_size', 'id', 'os'],
  LATES_NEWS: ['account', 'id', 'os'],
  NEWS_CATEGORY: ['account', 'id', 'os'],
  LIST_NEWS_BY_CATEGORY: ['account', 'category_id', 'page_no', 'page_size', 'id', 'os'],
  GET_DETAIL_NEWS: ['account', 'item_id', 'id', 'os'],
  DETAIL_COMBO_BOOK: ['account', 'combo_id'],
  PARITY_COMBO: ['account', 'combo_id', 'id', 'os'],
  COMBO_SAME_CATEGORY: ['account', 'combo_id', 'id', 'os'],
  GET_ITEM_INFO: ['account', 'item_id', 'content_type', 'id', 'os'],
  DETAIL_EPISODE_PODCAST: ['account', 'chapter_id', 'id', 'os'],
  LIST_DONATE_LEAF: ['account'],
  DONATE_LEAF: ['account', 'book_id', 'leaf_id', 'id', 'os'],
  RETAIL_HOME_BOOK_SHELF: ['account', 'id', 'os'],
  GET_BANNER: ['account', 'position_id', 'page_no', 'page_size', 'id', 'os'],
  GET_DOWNLOAD_EBOOK: ['account', 'item_id', 'content_type', 'id', 'os'],
  getNotes: ['account', 'content_id', 'content_type', 'chapter_cfi'],
  GET_BOOK_MARK: ['account', 'content_id', 'content_type', 'chapter_cfi'],
  addNotes: ['account', 'content_id', 'content_type'],
  updateNote: ['account', 'content_id', 'content_type'],
  removeNotes: ['account', 'content_id', 'content_type'],
  addBookMarks: ['account', 'content_id', 'content_type'],
  removeBookMarks: ['account', 'content_id', 'content_type'],
  getBookMarks: ['account', 'content_id', 'content_type', 'chapter_cfi'],
  updateReadTime: ['account', 'enterprise_id', 'content_id', 'content_type', 'read_time', 'id', 'os'],
  GET_ORDER_INFO: ['account', 'order_id', 'id', 'os'],
  DETAIL_AUTHOR: ['account', 'author_id', 'id', 'os'],
  LIST_COMBO_BEST_SALE: ['account', 'id', 'os'],
  CHANGE_PASSWORD: ['old_password', 'new_password', 'id', 'os'],
  FEEDBACK_AUDIO_FILE: ['account', 'content_id', 'content_type', 'feedback_type', 'id', 'os'],
  CHANGE_EMAIL: ['email', 'card', 'id', 'os'],
  VERIFY_OTP_EMAIL: ['email', 'otp_new_email', 'otp_old_email', 'card', 'id', 'os'],
  UPDATE_LISTEN_TIME: ['account', 'chapter_id', 'current_time', 'listen_time', 'id', 'os'],
  GET_DOWNLOAD_ITEM: ['account', 'audio_file_id', 'id', 'os'],
  BUY_BOOK_OAK: ['account', 'book_id', 'id', 'os'],
  LIST_BUY_CONTENT: ['account', 'content_type', 'page_no', 'page_size', 'id', 'os'],
  LIST_SAME_CONTENT: ['account', 'page_no', 'page_size', 'id', 'os'],
  GET_RELATED_BOOKS: ['account'],
  GET_DOWNLOAD_ITEM_OAK_WEB: ['account', 'item_id', 'content_type', 'id', 'os'],
  LIST_TOPIC: ['account', 'topic_id', 'page_no', 'page_size', 'id', 'os'],
  GET_DETAIL_MAJOR: ['account', 'item_id', 'tab_id', 'id', 'os'],
  DETAIL_TOPIC: ['account', 'content_id', 'id', 'os'],
  LIST_AUDIO_BY_TOPIC: ['account', 'topic_id', 'page_no', 'page_size', 'id', 'os'],
  DETAIL_BOOK_CATE: ['account', 'category_id', 'id', 'os'],
  GET_TODAY_READ_STATISTICS: ['account', 'id', 'os'],
  GET_INTRODUCTION: ['account', 'id', 'os'],
  CONTENT_FLASH_SALE: ['account', 'content_type', 'id', 'os'],
  LIST_API_BUY_CATEGORY_V2: ['account', 'category_id', 'page_no', 'page_size', 'id', 'os'],
  FM_DETAIL_CATEGORY: ['account', 'category_id', 'id', 'os'],
  GET_COMPANY_INFORMATION: ['account', 'id', 'os'],
  GET_LIST_COPYRIGHT: ['account', 'id', 'os'],
  LOG_SEARCH_CONTENT: ['account', 'content_id', 'content_type', 'id', 'os'],
  TOP_SEARCH_CONTENT: ['account', 'content_type', 'page_no', 'page_size', 'id', 'os'],
  COUNT_NOTIFICATION: ['account'],
  GET_LIST_NOTIFY: ['account'],
  READ_ALL_NOTIFY: ['account'],
  UPDATE_STATUS_NOTIFY: ['account', 'setting_id', 'id', 'os'],
  GET_POPUP_ADS: ['account', 'id', 'os'],
  LIST_BANNER_CATEGORY_PODCAST: ['account', 'id', 'os'],
  ADD_NOVEL_STORE: ['account', 'novel_id', 'is_add', 'id', 'os'],
  LOG_BANNER_POPUP: ['account', 'popup_id', 'id', 'os'],
  LOGOUT: ['account', 'code', 'id', 'os'],
  GET_NEXT_AUDIO: ['account', 'content_id', 'id', 'os'],
  ZALO_LOGIN: ['access_token', 'id', 'os'],
  LOG_UTM_SOURCE: ['account', 'id', 'os'],
  CREATE_ORDER_WAKA: ['account', 'item_id', 'charge_type', 'pay_type', 'bank_code', 'id', 'os'],
  SEO_GAME_WAKA: ['account', 'item_id', 'type', 'id', 'os'],
  UPDATE_READER_TIME_ENTERPRISE: ['account', 'enterprise_id', 'content_id', 'content_type', 'read_time', 'id', 'os']
} as const

export const ApiPath = {
  LOGIN_VIA_SOCIAL: '/fm/loginViaOpenId',
  LOGIN_VIA_TOKEN: '/fm/loginViaToken',
  GET_OTP: '/getOTP',
  GET_LIST_NEWS: '/super/getListNews',
  HOME_BLOCK: '/super/listBlockHome',
  LIST_NEWS: '/super/getListNews',
  MAJOR_BLOCK: '/super/listContentMajor',
  LIST_RECOMMENDED: '/super/listRecommendedContent',
  LIST_RANKING: '/super/rankingSuperApp',
  LIST_PODCAST: '/super/listPodcast',
  ITEM_BY_CAT: '/super/getItemByCat',
  LIST_AUDIO_BY_CAT: '/super/listAudioByCategoryId',
  LIST_COMBO: '/listCombo',
  LIST_AUTHORS: '/super/getListAuthors',
  LIST_FEATURE_COLLECTIONS: '/ebook/getListFeatureCollections',
  HOME_SLIDE: 'super/getStoreBannerApp',
  RETAIL_BOOK_BY_CAT: '/super/getRetailBookByCat',
  LIST_NEWEST_CHAPTER: '/super/listNewestChapterOak',
  CREATE_ACCOUNT: '/super/sendOtpCreateAccount',
  GET_OTP_VERIFY_PHONE: '/super/getOtpVerifyPhone',
  CONFIRM_OTP_CREATE_ACCOUNT: '/super/confirmOtpCreateAccount',
  CONFIRM_OTP_VERIFY_PHONE: '/super/confirmOtpVerifyPhone',
  GET_QR_CODE: '/make-qrcode-login',
  LOGIN_WITH_QR: '/login-with-qrcode',
  LOGIN: 'fm/login',
  SA_SEARCH: '/sa/searchSa',
  HOME_AUDIO_BOOK_SLIDE: '/super/listContentMajor',
  LIST_CATEGORY_BY_PAGE: '/super/listCategoryByPage',
  ADD_WISH_LIST_ITEM: '/fm/addWishlistItem',
  LIST_PACKAGE: '/super/listPackageWeb',
  LIST_PAYMENT: 'sa/listPayment',
  LIST_PACKAGE_OAK: '/super/listPackageOak',
  SA_CHARGE: '/sa/charge',
  CHANGE_ACCOUNT_INFO: '/fm/changeAccountInfo',
  CHANGE_AVATAR: '/super/changeAvatar',
  GET_CONNECT_SOCIAL: '/fm/getInfoConnectSocial',
  GET_USER_TRANSACTION: 'super/getUserTransaction',
  GET_EVENT_CHART_INFO: 'sa/getEventChartInfo',
  GET_EVENT_READ_STATISTICS: 'sa/getEventReadStatistics',
  GET_RECOMMEND_CONTENT: '/super/listRecommendedContent',
  LIST_RANKING_BY_OFFSETS: '/super/listRankingByOffset',
  LIST_CONTENT_CAMPAIGN_FLASH_SALE: '/super/listContentCampaignFlashsale',
  LIST_AUDIO_BY_CATE: '/super/listAudioByCategoryId',
  LIST_PODCAST_CHAP_NEW: '/super/listPodcastChapNew',
  CALL_SOCIAL_BY_ACCOUNT: 'fm/callSocialByAccount',
  CALL_FORGOT_PASSWORD_BY_ACCOUNT: 'fm/callForgetPassByAccount',
  CALL_CONFIRM_OTP_BY_ACCOUNT: 'fm/callConfirmOtpByAccount',
  LIST_PODCAST_BY_CATEGORY_ID: '/fm/listPodcastByCategoryId',
  GET_LIST_COLLECTIONS: '/getListCollections2',
  GET_COLLECTION_DETAIL: '/getCollectionDetail',
  GET_COLLECTION_ITEMS: '/getCollectionItemsV1',
  LIST_HOT_COLLECTION_EBOOK: '/super/listHotCollectionEbook',
  LIST_BASE_MENU: '/super/getBaseMenu',
  GET_DETAIL_BOOK_OAK: '/super/detailBookOak',
  SUBSCRIBE_BOOK_OAK: '/subscribeBookOak',
  LIST_NEWEST_CHAPTER_OAK: '/super/listNewestChapterOak',
  LIST_CHAPTER_BOOK_OAK: '/super/loadListChapBookOak',
  MAY_YOU_LIKE_RETAIL_BOOK: '/super/mayYouLikeRetailBook',
  LIST_RATE_FM: '/fm/listRateFm',
  RATE_FM: '/fm/rateFm',
  LIST_COMMENT_COMIC: '/super/showListComment',
  AUTO_RENEW_BOOK: '/autoRenewBook',
  CHECK_BOUGHT_CHAP_OAK: '/checkBoughtChapOak',
  BUY_CHAPTER_BOOK_OAK: '/buyChapterBookOak',
  SUBMIT_CODE: '/super/submitCodeWaka',
  GET_USER_CONTENT: '/sa/getUserContentV2',
  GET_ITEM_INFO: 'super/getItemInfo',
  GET_DETAIL: '/fm/getDetail',
  GET_LIST_AUDIO_FILE: '/fm/getListAudioFile',
  RELATED_FM: '/fm/relatedFm',
  GET_CONTENT_AUTHORS: '/super/getContentAuthors',
  LATES_NEWS: '/super/latestNews',
  NEWS_CATEGORY: '/super/newsCategory',
  LIST_NEWS_BY_CATEGORY: '/super/listNewsByCategory',
  GET_DETAIL_NEWS: '/super/detailNews',
  DETAIL_COMBO_BOOK: '/detailComboBook',
  PARITY_COMBO: '/listComboSamePrice',
  COMBO_SAME_CATEGORY: '/listComboSameCategory',
  DETAIL_EPISODE_PODCAST: '/fm/detailEpisodePodcast',
  LIST_DONATE_LEAF: '/listDonateLeaf',
  DONATE_LEAF: '/donateLeaf',
  RETAIL_HOME_BOOK_SHELF: '/super/retailHomeBookShelf',
  GET_BANNER: '/super/getBanner',
  GET_DOWNLOAD_EBOOK: '/super/getDownloadItemWeb',
  GET_NOTE: '/getNotes',
  GET_BOOK_MARK: '/getBookMarks',
  getNotes: '/getNotes',
  addNotes: '/addNotes',
  updateNote: '/updateNote',
  removeNotes: '/removeNotes',
  getBookMarks: '/getBookMarks',
  addBookMarks: '/addBookMarks',
  removeBookMarks: '/removeBookMarks',
  updateReadTime: '/super/updateReadTime',
  GET_ORDER_INFO: '/sa/getOrderInfo',
  DETAIL_AUTHOR: '/sa/detailAuthor',
  LIST_COMBO_BEST_SALE: '/super/listComboBestSale',
  FEEDBACK_AUDIO_FILE: '/fm/feedbackAudioFile',
  CHANGE_PASSWORD: '/fm/changePassword',
  CHANGE_EMAIL: '/fm/changeEmail',
  VERIFY_OTP_EMAIL: '/fm/verifyOtpEmail',
  UPDATE_LISTEN_TIME: '/super/updateListenTime',
  GET_DOWNLOAD_ITEM: '/fm/getDownloadItem',
  LIST_BUY_CONTENT: '/super/listBuyContent',
  LIST_SAME_CONTENT: '/super/listSameContent',
  BUY_BOOK_OAK: '/buyBookOak',
  GET_RELATED_BOOKS: '/getRelatedBooks',
  GET_DOWNLOAD_ITEM_OAK_WEB: '/super/getDownloadItemOakWeb',
  LIST_TOPIC: '/fm/listTopic',
  GET_DETAIL_MAJOR: '/sa/detailMajor',
  DETAIL_TOPIC: '/fm/detailTopic',
  LIST_AUDIO_BY_TOPIC: '/fm/listAudioBookByTopic',
  GET_TODAY_READ_STATISTICS: '/sa/getTodayReadStatistics',
  DETAIL_BOOK_CATE: '/sa/detailCategory',
  GET_INTRODUCTION: '/tn/introduction',
  CONTENT_FLASH_SALE: 'super/listContentCampaignFlashsale',
  LIST_API_BUY_CATEGORY_V2: '/super/listAudioByCategoryIdV2',
  FM_DETAIL_CATEGORY: '/fm/detailCategory',
  GET_COMPANY_INFORMATION: '/super/getInformationCompany',
  GET_LIST_COPYRIGHT: '/super/getListCopyright',
  LOG_SEARCH_CONTENT: '/ebook/addContentSearch',
  TOP_SEARCH_CONTENT: '/super/topContentSearch',
  COUNT_NOTIFICATION: '/getNewNotificationCount',
  GET_LIST_NOTIFY: '/getNotification',
  READ_ALL_NOTIFY: '/readAllNotification',
  UPDATE_STATUS_NOTIFY: '/updateNotificationStatus',
  GET_POPUP_ADS: '/listPopupCamp',
  LIST_BANNER_CATEGORY_PODCAST: '/super/listBannerCategoryPodcast',
  ADD_NOVEL_STORE: 'cdv/addNovelStore',
  LOG_BANNER_POPUP: 'logPopup',
  LOGOUT: 'fm/logout',
  GET_NEXT_AUDIO: '/fm/listNextBackFm',
  ZALO_LOGIN: '/zalo/login',
  LOG_UTM_SOURCE: '/updateUtmSource',
  CREATE_ORDER_WAKA: '/zalo/createOrderWaka',
  SEO_GAME_WAKA: '/super/seoGame',
  UPDATE_READER_TIME_ENTERPRISE: '/enterprise/updateReadTime'
} as const
