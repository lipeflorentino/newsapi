// este arquivo contém o controller da aplicação

'use strict';

const News = require('../models/newsModel.js');

console.log('criei o controller!');

//metodo do controller para listar todas as noticias
exports.list_all_news = function(req, res) {
    News.getAllNews(function(err, news) {
        if (err)
          res.send(err);
          console.log('resultado: ', news);
        res.send(news);
    });
};

//metodo do controller para pegar uma noticia pelo id
exports.get_a_news_by_id = function(req, res) {
    News.getANewsById(req.params.id, function(err, news) {
        if (err)
            res.send(err);
            console.log('resultado: ', news);
        res.send(news);
    });
};

//metodo do controller para computar um like
exports.add_a_like = function(req, res){
    News.addALike(req.params.id, function(err, likes){
        if (err)
            res.send(err);
            console.log('resultado: ', likes)
        res.send(likes);
    });
};