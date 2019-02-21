'user strict';
const sql = require('../config/db_connection.js');

//construtor do objeto news
const News = function(news){
    this.imagem = news.imagem;
    this.titulo = news.titulo;
    this.descricao = news.descricao;
    this.num_likes = news.num_likes;
    this.createdAt = new Date();
    this.updatedAt = new Date();
};

console.log('criei o model!');

//metodo do model para listar todas as noticias
News.getAllNews = function getAllNews(result) {
    sql.query("Select * from newsdb.tb_news_db", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('news : ', res);  
            result(null, res);
        }
    });   
};

//metodo do model para pegar uma noticia pelo id
News.getANewsById = function getANewsById(id, result) {
    sql.query("Select * from newsdb.tb_news_db where id = ?", [id], function(err, res){
       if(err){
           console.log("error: " + err);
           result(null, err);
       } 
       else{
           console.log('news: ', res);
           result(null, res);
       }
    });
};

//metodo do model para computar um like
News.addALike = function addALike(id, result){
    sql.query("UPDATE newsdb.tb_news_db SET num_likes = num_likes + 1, updatedAt = now() WHERE id = ?", [id], function (err, res){
        
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('like computado!');
            result(null, res);
        }
    });
};

module.exports = News;