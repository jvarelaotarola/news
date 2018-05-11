var async = require('asyncawait/async');
var await = require('asyncawait/await');
var articleModel = require(__base + 'server/model/article');

function getArticles() {
    var articles = await(articleModel.find({}));
    return articles;
}

function getArticle(id) {
    var article = await(articleModel.findOne({_id:id}));
    return article;
}

function deleteArticle(id) {
    var article = await(articleModel.remove({_id:id}));
    return article;
}

function updateArticle(articleParam) {
    var article = await(articleModel.update({_id:articleParam._id},articleParam));
    return article;
}

function addArticle(articleParam) {
    var article = await(articleModel.create(articleParam));
    return article;
}

module.exports = {
    getArticles: async(getArticles),
    getArticle: async(getArticle),
    deleteArticle: async(deleteArticle),
    updateArticle: async(updateArticle),
    addArticle: async(addArticle)
};