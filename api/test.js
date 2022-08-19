import api from '../global/config.js'
import * as ApiType from '../global/base.config'
export default {
	selAllKind(params) {
		return api.get('/consumables-order/app/selKind', params, ApiType.operaionApiType).then(res => res.data)
	},

	buttonShow(params) {
		return api.get('/mina/buttonShow', params, ApiType.operaionApiType)
	},
	
	goalKeeperListData(param){
		return api.get('/goalKeeperFeedBack/operation-goalkeeper-base/listData',param,ApiType.operaionApiType)
	},
	goalKeeperListProduct(param){
		return api.get('/goalKeeperFeedBack/operation-goalkeeper-feedback/listProduct',param,ApiType.operaionApiType)
	},
	getQiniuToken(){
		return api.get('/common/getUpToken','',ApiType.trainApiType)
	},
	
	
	saveFeedBack(param){
		return api.post('/goalKeeperFeedBack/operation-goalkeeper-feedback/saveFeedBack',param,ApiType.operaionApiType)
	}
	
	
	
}
