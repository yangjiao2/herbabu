
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var UserSchema = new Schema({
  firstname: { type: String, default: '' },
  lastname: { type: String, default: '' },
  email: { type: String, default: '' },
  hashed_password: { type: String, default: '' },
  gender: { type: String, enum: ['Female', 'Male',], default: 'Female' },
  age: { type: Number},
  updated: { type: Date, default: Date.now },
  height: { type: Number},
  weight: { type: Number},
  card: [{ type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'}],
  address: [{ type: mongoose.Schema.Types.ObjectId,
    ref: 'UserInfo'}]

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
UserSchema
    .virtual('name')
    .get(function () {
      return this.firstname + ', ' + this.lastname;
    });
/**
 * Methods
 */

UserSchema.method({

});

/**
 * Statics
 */

UserSchema.static({

});

/**
 * Register
 */

mongoose.model('User', UserSchema);
