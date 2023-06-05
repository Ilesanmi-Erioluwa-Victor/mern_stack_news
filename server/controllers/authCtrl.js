const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: "",
  secretAccessKey: "",
  region  :""
});

exports.registerCtrl = (req, res) => {
  console.log('Well conneted ', req?.body);
};
