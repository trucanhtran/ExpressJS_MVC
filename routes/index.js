const accountsRouter =  require('./accounts');
const siteRouter = require('./site');

function route (app) {

    app.use('/accounts', accountsRouter);

    app.use('/', siteRouter);
    
}

module.exports = route;