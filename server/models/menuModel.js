const mongoose =require('mongoose');

const Schema = mongoose.Schema

const MenuSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }, 
    description:{
        type:String,
        required:true
    },
},{timestamps : true })

module.exports = mongoose.model('restaurantMenu',MenuSchema)