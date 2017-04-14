
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var CardSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  cardnum: { type: Number },
  cvv: { type: Number },
  expire: { type: Date, default: Date.now },
});

/**
 * User plugin
 */

// CardSchema.plugin(userPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

CardSchema.method({

});

/**
 * Statics
 */

CardSchema.static({

});

/**
 * Register
 */

mongoose.model('Card', CardSchema);
