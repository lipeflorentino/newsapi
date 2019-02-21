'use strict';
module.exports = function(app) {
    const newsController = require('../controllers/newsController');

    console.log('cheguei na rota!');

    // os endpoints da aplicação
    app.route('/news').get(newsController.list_all_news);
    app.route('/news/:id').get(newsController.get_a_news_by_id);
    app.route('/newsLikes/:id').put(newsController.add_a_like);
};