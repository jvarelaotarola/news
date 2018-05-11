'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var ArticlesRsrc = require(__base + 'server/infrastructure/resources').articles;

function getArticle(id) {
    var result;
    console.log('get article by ' + id);
    try {
    	if(id){
        	result = await (ArticlesRsrc.getArticle(id));
        } else {
        	result = await (ArticlessRsrc.getArticles());
        }   
    } catch(error) {
        throw error;
    }
    return { article: result };
}

function updateArticle(article) {
    var result;
    console.log('update article by ' + article._id);
    try {
        result = await (ArticlesRsrc.updateArticle(article));
    } catch(error) {
        throw error;
    }
    return { article: result };
}

function deleteArticle(id) {
    var result;
    console.log('delete article by ' + id);
    try {
        result = await (ArticlesRsrc.deleteArticle(id));
    } catch(error) {
        throw error;
    }
    return { article: result };
}

function postArticle(article) {
    var result;
    console.log('post article');
    try {
        result = await (ArticlesRsrc.addArticle(article));
    } catch(error) {
        throw error;
    }
    return { article: result };
}

module.exports.getArticle = async(getArticle);
module.exports.updateArticle = async(updateArticle);
module.exports.deleteArticle = async(deleteArticle);
module.exports.postArticle = async(postArticle);