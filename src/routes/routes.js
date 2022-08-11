module.exports = (app, passport) => {

    app.get('/', (req, res) => {
        res.render('index');
    });

};

//module.exports = (app, passport) => {
//
//    app.get('/login', (req, res) => {
//        res.render('login');
//    });
//
//};