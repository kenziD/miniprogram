export function get(url,data = {}){
    return new Promise((resolve,reject)=>{
        uni.request({
            url: 'http://116.205.131.72:8080'+url, //仅为示例，并非真实接口地址。
            data: data,
            success: (res) => {
                resolve(res);
            },
            fail:(res)=>{
                reject(res);
            }
        });
    })
   
}
