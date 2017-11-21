const express = require('express'),
      logger = require('morgan');
      bodyParser = require('body-parser');
      app = express();
 
const { PORT=3000, NODE_ENV='development'} = process.env;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  // START SERVER
  Promise.resolve()
  .then(() => 
    app.listen(PORT, () => 
        console.log(`App listening on port ${PORT}`)))
  .catch((err) => { 
        if (NODE_ENV === 'development') {
            console.error(err.stack);
        }else{
            res.status(404).send({"message":err});
        } 
    });

// ROUTES

//Handle all unimplemented routes
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the Contacts API. This route is not implemented'
}));

module.exports = app;