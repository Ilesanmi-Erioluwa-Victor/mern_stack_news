const AWS = require('aws-sdk');

AWS.config.update({});

exports.registerCtrl = (req, res) => {
  console.log('Well conneted ', req?.body);
};
