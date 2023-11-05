/* eslint-disable no-irregular-whitespace */
const config = {
  /**
   * You can use this tool http://heymind.github.io/tools/microsoft-graph-api-auth
   * to get following params: client_id, client_secret, refresh_token & redirect_uri.
   */
  refresh_token: "0.AUYA9mDsL6Oph0mBPtPY3lGWQOGItgbZJz9Ohr4ndMkyYti8AEw.AgABAAEAAAAtyolDObpQQ5VtlI4uGjEPAgDs_wUA9P9_dnLXkjCyO2D9l7MMa3UdaTDnWfvamaXjG_yrEWhf6VRaEhznaOLLwvtsec78i8Q7M9xAhd7UaGVW7AuqSrxohjp_IThZFRCwN-g-ZNC6l7jGl3AFKGh1msc_o7nioBMlusJzdNf9TGzafEksc14ne9VL5wiOnZtm9PGB-6wChUwEWNzlMX2kRtb91wvwLsPiGtJr1TL2XhPBBdRlpgFyUVHA2JlX-q-vP9pkFH3Xw-OCRxLHULSZNBc4a2A6bKTmbXrxbFGXY2f6xH4dzOdquTq9sU07vuYdvg6UGrb8yZ5FPoHN_OH1l93FXy1Ypz1ROGPDQDrNdlYENJSi4S4clNUfPQHHOyM3F0cHeWyhOb1PF6ixhy4k0GXA-HtGU21gDuOuQYvUgPQymzuyWpgRj3d6VLEw_eqssNA1rQuutaoDDiWupGgD3qc9URNDIDgho08_q5qzWfRvpR9oeih870fhaRccBPMuCNeqZJfjzW_jn8l88jw1zDeo4592kC7goGSC6nSHc1bSO0pYzqJFHoWciWPEIYJQmU3z-TaBoGIW5hDRTRmJmalR_CfGjytZoqiCR7m9FFayL8-zE4yjxz9nl7tQIGR6W1fDpihC8Ye0onNdO1bPBpO4CI0f1lnADkUC0VbTIAynd76U8JiJSIazlW_eNEXKjoMMOe2oH_wiSHdlPV8hQIymnxaodfM6AfWtE798ptx8J3wUD4fRIAvILBS-HYHwLiIlRJgJ0Cj81K35cyQrUHfytJi13PYVPDFetbug1IAvzs0eYPEHGYkdlQ4_0tRreKT_JJkAP_qt4UpD99jqfzU8Ckv08BI_",
  client_id: '06b688e1-27d9-4e3f-86be-2774c93262d8',
  client_secret: 'Sli8Q~80Lp~ggyqecBU.RKfYWvTlTRl6mfMT1aFV',
  redirect_uri: 'http://localhost:3000',

  /**
   * The base path for indexing, all files and subfolders are public by this tool. For example: `/Public`.
   */
  base: '/',

  /**
   * Feature: add OneDriveCN (21Vianet) support
   * Usage: simply change `useOneDriveCN` to true
   */
  useOneDriveCN: false,

  /**
   * Feature: Pagination when a folder has multiple(>${top}) files
   * - top: specify the page size limit of the result set, a big `top` value will slow down the fetching speed
   */
  pagination: {
    enable: true,
    top: 100 // default: 200, accepts a minimum value of 1 and a maximum value of 999 (inclusive)
  },

  /**
   * Feature Caching
   * Enable Cloudflare cache for path pattern listed below.
   * Cache rules:
   * - Entire File Cache  0 < file_size < entireFileCacheLimit
   * - Chunked Cache     entireFileCacheLimit  <= file_size < chunkedCacheLimit
   * - No Cache ( redirect to OneDrive Server )   others
   *
   * Difference between `Entire File Cache` and `Chunked Cache`
   *
   * `Entire File Cache` requires the entire file to be transferred to the Cloudflare server before
   *  the first byte sent to a client.
   *
   * `Chunked Cache` would stream the file content to the client while caching it.
   *  But there is no exact Content-Length in the response headers. ( Content-Length: chunked )
   *
   */
  cache: {
    enable: false,
    entireFileCacheLimit: 10000000, // 10MB
    chunkedCacheLimit: 100000000, // 100MB
    paths: ['/Images']
  },

  /**
   * Feature: Thumbnail
   * Show a thumbnail of image by ?thumbnail=small (small, medium, large)
   * More details: https://docs.microsoft.com/en-us/onedrive/developer/rest-api/api/driveitem_list_thumbnails?view=odsp-graph-online#size-options
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?thumbnail=mediumSquare
   * You can embed this link (url encoded) directly inside Markdown or HTML.
   */
  thumbnail: true,

  /**
   * Small File Upload (<= 4MB)
   * POST https://<base_url>/<directory_path>/?upload=<filename>&key=<secret_key>
   */
  upload: {
    enable: false,
    key: 'your_secret_key_here'
  },

  /**
   * Feature: Proxy Download
   * Use Cloudflare as a relay to speed up download. (Especially in Mainland China)
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?raw=true&proxied
   * You can also embed this link (url encoded) directly inside Markdown or HTML.
   */
  proxyDownload: true
}

export default config
