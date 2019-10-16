module.exports = {
    env: "development", // production
    getMongoDbUri(){
        let development = {
            uri: "**********"
        };
        let production = {
            uri: "**********"
        };
        if(this.env == "development") {
            return development;
        }else if(this.env == "production"){
            return production;
        }
    }
}