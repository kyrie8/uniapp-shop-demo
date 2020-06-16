const baseUrl = 'http://localhost:3000'
export default function getRequest(options){
	return new Promise((resolve, reject)=>{
		uni.request({
			url:baseUrl + options.url,
			method:options.method || 'GET',
			data:options.data||{},
			success: (res)=>{
				resolve(res)
			},
			fail: (err)=>{
				reject(err)
			}
		})
	})
}