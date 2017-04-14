
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var UserInfoSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  streetaddress: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  country: { type: String, default: '' },
  zipcode: {type: Number}
});

/**
 * User plugin
 */

// UserSchema.plugin(userPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

UserInfoSchema.method({

});

/**
 * Statics
 */

UserInfoSchema.static({

});

/**
 * Register
 */

mongoose.model('UserInfo', UserInfoSchema);
