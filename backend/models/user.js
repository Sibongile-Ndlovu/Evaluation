var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var user = require('../models/user.js')

var schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    number: { type: String, require: true },
    password: { type: String, require: true },
    creation_dt: { type: Date, require: true },
    complaint: [
        {
            heading: { type: String, require: true },
            description: { type: String, require: true },
            complaintDate: {type: Date, default: Date.now}
        }
    ]
});

// schema.save().then(function(){
//     user.findOne({email: 'erna@gmail.com'}).then(function(record){
//         assert(record.complaint.length === 1);
//         done();
//     })
// });

schema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

schema.methods.isValid = function (hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User', schema);