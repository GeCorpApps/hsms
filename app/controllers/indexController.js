module.exports = {
    main(req, resp) {
        var data = {
            title: "index title"
        };
        resp.render('index', data);
    }
};