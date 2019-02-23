var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
      type: String,
      required: 'Kindly enter the name of the User'
    },
   email:{
       type:String,
       required:true,
     
   },
   password:{
       type:String,
       required:'please enter password'
   }
  });


  module.exports = mongoose.model('Users', UserSchema);