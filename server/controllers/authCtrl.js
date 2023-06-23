const AWS = require('aws-sdk');

// AWS.config.update({
//   accessKeyId: '',
//   secretAccessKey: '',
//   region: '',
// });

// const ses = AWS.SES({
//   apiVersion: '2010-12-01',
// });

exports.registerCtrl = (req, res) => {
  const { name, email, password } = req?.body;

  const params = {

  }
  console.log('Well conneted ', req?.body);
};
