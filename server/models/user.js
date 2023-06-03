const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Shema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 30,
      unique: true,
      index: true,
      lowercase: true,
    },

    name: {
      type: String,
      trim: true,
      required: true,
      max: 40,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },

    hashed_password: {
      type: String,
      required: true,
    },

    salt: String,

    role: {
      type: String,
      default: 'subscriber',
    },

    resetPasswordLink: {
      data: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Virtual fields
userSchema
  .virtual('password')
  .set(function (password) {
    //   create a temporary password called _password
    this._password = password;

    // generate salt
    this.salt = this.makeSalt();

    // encrypt password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods > authenticate method, encrypt password method, makeSalt value method
userSchema.methods = {
    authenticate: function (plainText) {
        return 
  },

  // used in virtual
  encryptPassword: function (password) {
    if (!password) return;

    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (error) {
      return;
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random() + '');
  },
};
