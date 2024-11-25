let myrequest=function () {
    let res={}
    let hasRequest=[]
    return function (config) {
        let {url}=config
        //查寻结果缓存
        if(res[url]) {
            return Promise.resolve(res[url])
        } else {
            if(hasRequest.indexOf(url)!==-1) {
                return Promise.reject('请求已提交')
            }
            hasRequest.push(url)
            return new Promise((resolve,reject)=> {
                fetch(url).then(res=>res.json()).then(data=> {
                    res[url]=data
                    resolve(data)
                    hasRequest.splice(hasRequest.indexOf(url),1)
                }).catch(err=> {
                    reject(err)
                    hasRequest.splice(hasRequest.indexOf(url),1)
                })
            })
        }
    }
}
let refactorMyrequest=function () {
    let res={}
    let  hasRequest=[]
    let promise= Promise.resolve()
    // date: 搭载的数据
    // go属性： 是否继续执行，true要继续执行
    //
   return function (config) {
    function  cache(result= {go:true}) {
        let {url}=config
        if(!result.go) {
            return Promise.resolve(result)
        }
        else if(res[url]) {
            return Promise.resolve({go:true,type:'then',data:res[url]})
        } else {
            return Promise.resolve({go:true,type:'then'})
        }

    }
    function  hasRepeat(result= {go:true}) {
        let {url}=config
        if(!result.go) {
            return Promise.resolve(result)
        } else if(hasRequest.indexOf(url)!==-1) {
            return Promise.reject({go:false,type:'catch',data:'请求已提交'})
        } else {
            hasRequest.push(url)
            return Promise.resolve({go:true,type:'then'})
        }

    }
   async function   finalRequest(result= {go:true}) {
        let {url}=config
        if(!result.go) {
            return Promise.resolve(result)
        } else {
          let  resl= await fetch(config)
            return Promise.resolve({go:true,type:'then',data:resl.json()})
    }
    }
    function  finalHandle(result= {go:true, type: 'then', data: {}})
     {
        let {url}=config
        if(!result.go) {
            return Promise.resolve(result)
        }
        if(result.type==='catch') {
            return Promise.reject(result.data)
        }
        res[url]=result.data
        hasRequest.splice(hasRequest.indexOf(url),1)
        return Promise.resolve(result.data)
    }
    let handleArr=[cache,hasRepeat,finalRequest,finalHandle]
    while (handleArr.length>0) {
        promise=promise.then(handleArr.shift)
    }
    return promise
}
}
export default {
    myrequest:myrequest(),
    refactorMyrequest:refactorMyrequest()
}
