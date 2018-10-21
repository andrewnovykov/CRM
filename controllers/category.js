const Position = require("../model/position");
const Category = require('../model/category');
const errorHandler = require("../utils/errorHendler");

module.exports.getAll = async function (req, res) {

    try {
         const categories = await Category.find({
             user: req.user.id
         });
        res.status(200).json( categories )

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {

    try {

        const category = await Category.findById(
             req.user.id
        );
        res.status(200).json(category)

    } catch (e) {
        errorHandler(res, e)
    }

};

module.exports.remove = async function(req, res) {

    try {
        await Category.remove({ _id: req.params.id });
        await Position.remove({ category: req.params.id });
        res.status(200).json({message: 'category was deleted'})

    } catch (e) {
        errorHandler(res, e)
    }

};

module.exports.create = async function(req, res) {

    try {

        res.status().json()

    } catch (e) {
        errorHandler(res, e)
    }

};

module.exports.update = async function(req, res) {

    try {

        res.status().json()

    } catch (e) {
        errorHandler(res, e)
    }
    
};