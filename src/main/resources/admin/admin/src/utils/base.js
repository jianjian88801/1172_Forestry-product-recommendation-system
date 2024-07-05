const base = {
    get() {
                return {
            url : "http://localhost:8080/linyechanpintuijian/",
            name: "linyechanpintuijian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/linyechanpintuijian/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "林业产品推荐系统"
        } 
    }
}
export default base
