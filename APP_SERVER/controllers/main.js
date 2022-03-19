// JavaScript source code
const index = function (req, res, next) {
    res.render('index', { title: 'Aditi Shah' })
};

module.exports = {
    index
};