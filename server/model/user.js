//require modules for model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let user = mongoose.Schema
    (
        {
            username:
            {
                type: String,
                default: '',
                trim: true,
                required: 'username is required'
            },

            email:
            {
                type: String,
                default: '',
                trim: true,
                required: 'Email is require'
            },

            displayName: {
                type: String,
                default: '',
                trim: true,
                required: 'Display name is require'
            },

            created: {
                type: Date,
                default: Date.now
            },

            update:
            {
                type: Date,
                default: Date.now
            }
        },

        {
            collection: "users"
        }
    );

//Configure options for user model
let options = ({ missingPasswordError: 'wrong/Missing Password' });
user.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('user', user);