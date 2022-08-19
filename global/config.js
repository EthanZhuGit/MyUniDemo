import { apiConfig } from './api.config'
import { operaionApiType, exaApiType, trainApiType, siteApiType, basicApiType } from './base.config'
const { baseApiHost, operationApiHost, examinationApiHost, trainApiHost, siteApiHost, basicApi } = apiConfig


function getActionApi (type) {
  if (operaionApiType === type) {
    return operationApiHost
  } else if (exaApiType === type) {
    return examinationApiHost
  } else if (trainApiType === type) {
    return trainApiHost
  } else if (siteApiType === type) {
    return siteApiHost
  } else if (basicApiType === type) {
    return basicApi
  } else {
    return baseApiHost
  }
}

export default {
  get(url, param, action) {
	return new Promise((resolve, reject) => {
	  uni.request({
		method: 'GET',
		url: getActionApi(action) + url,
		data:param,
		timeout: 10000,
		success: (res) => {
		  if(res.data && res.statusCode === 200){
			if (res.data.code === 200) {
			  resolve(res)
			} else {
			  uni.showToast({
			      icon: 'none', 
			  	duration: 3000,
			  	title: `${res.data.message}`
			  });
			  reject(res.data.message)
			}
		  } else {
			uni.showToast({
			    icon: 'none', 
				duration: 3000,
				title: `${res.data.message}`
			});
			reject(res.data.message)          
		  }
		},
		fail:(err)=>{
		  reject(err)
		}
	  })
	})
  },
  post(url, data, action) {
  	return new Promise((resolve, reject) => {
  	  uni.request({
  		method: 'POST',
  		url: getActionApi(action) + url,
		data:data,
  		// header: {
		  // 'Content-Type': 'application/json',
  		//   token: uni.getStorageSync('token')
  		// },
  		timeout: 100000,
  		success: (res) => {
  		  if(res.data && res.statusCode === 200){
  		  	if (res.data.code === 200) {
  		  	  resolve(res)
  		  	} else {
  		  	  uni.showToast({
  		  	    icon: 'none', 
  		  	  	duration: 3000,
  		  	  	title: `${res.data.message}`
  		  	  });
  		  	  reject(res.data.message)
  		  	}
  		  } else {
			uni.showToast({
				icon: 'none', 
				duration: 3000,
				title: `${res.data.message}`
			});
			reject(res.data.message)          
  		  }
  		},
  		fail:(err)=>{
  		  reject(err)
  		}
  	  })
  	})
  }
}