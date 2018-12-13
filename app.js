// Require in Shunter
var shunter = require('shunter');

// Create a Shunter application, passing in options
var app = shunter({

  // Configure the themes path to the current directory
  path: {
    themes: __dirname
  },

  // Configure the proxy route, this should point to
  // where your back end application runs
  routes: {
    localhost: {
      default: {
        host: '127.0.0.1',
<<<<<<< HEAD
        port: 5501
=======
        port: 5401
>>>>>>> [WEBDEV-1103] Render data views
      }
    }
  }

});

// Start the application
<<<<<<< HEAD
app.start();
=======
app.start();
>>>>>>> [WEBDEV-1103] Render data views
