'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getArticles(request, response) {
    console.log('GET article',request.params.id);
    var result;
    try {
        result = await (service.articlesService.getArticle(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteArticles(request, response) {
    console.log('DELETE article');
    var result;
    try {
        result = await (service.articlesService.deleteArticle(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateArticles(request, response) {
    console.log('UPDATE article');
    var result;
    try {
        result = await (service.articlesService.updateArticle(request.body.article));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postArticles(request, response) {
    console.log('POST article', request.body);
    var result;
    try {
        result = await (service.articlesService.postArticle(request.body.article));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getArticles));
routes.get('/', async(getArticles));
routes.delete('/:id', async(deleteArticles));
routes.put('/:id', async(updateArticles));
routes.post('/', async(postArticles));

module.exports = routes;