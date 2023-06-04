exports.registerCtrl = (req, res) => {
    const { name, password, email } = req?.body
    console.log("Register endpoint", res.json({
     name, email, password
 }))
};
