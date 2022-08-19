let fileDomain = ''
let baseApiHost = ''
let examinationApiHost = ''
let openLink = ''
let websocketUrl = ''
let QN_URL = ''
let imgQnUrl = ''
let trainApiHost = ''
let basicApi = ''
let operationApiHost = ''
let siteApiHost = ''
let siteQnUrl = ''

//判断环境


//测试环境下域名配置
const origin = `https://test.js-hflm.cn`
baseApiHost = `${origin}/hopApi`
operationApiHost = `${origin}/operationSystemApi`
examinationApiHost = `${origin}/exaApi`
trainApiHost = `${origin}/trainSystemApi`
siteApiHost = `${origin}/siteSystemApi`
fileDomain = `${origin}/file`
basicApi = `${origin}/basicApi`
openLink = `${origin}/appSystem/#/`
QN_URL = 'http://video.jshflm.cn/'
imgQnUrl = 'http://test.jshflm.cn/'
websocketUrl = `${origin}/hopApi/websocket`
siteQnUrl = 'http://test.jshflm.cn/'


const apiConfig = {
  fileDomain,
  baseApiHost,
  examinationApiHost,
  openLink,
  QN_URL,
  imgQnUrl,
  websocketUrl,
  operationApiHost,
  trainApiHost,
  siteApiHost,
  siteQnUrl,
  basicApi
}

export {apiConfig}
