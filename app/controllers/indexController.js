const mongodb = require('../config/mongodb');
const appConfig = require('../config/appConfig');

module.exports = {
    main(req, resp) {
        var vPageContent = `
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`

       var dbo = mongodb.getDB()
       var vServers;
       dbo.then((db) => {
       db.collection("servers").find({}).toArray(function(err, items) {
                if (err) throw err
                vServers = items;                
                var data = {
                    title: "index title",
                    pageContent: vPageContent,
                    servers: items
                }
                resp.render('index', data) 
            })
       })    
    }
};