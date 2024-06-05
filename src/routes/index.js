const routerNews = require('./news');
const routerSite = require('./site');
function route(app) {
    app.use('/news', routerNews);
    //Route những trang riêng Home - Contact - Search
    app.use('/', routerSite);
}
module.exports = route;
