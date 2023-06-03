const mongoose = require('mongoose');

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
userSchema.virtual('password');

// methods > authenticate method, encrypt password method, makeSalt value method
userSchema.methods = {};
