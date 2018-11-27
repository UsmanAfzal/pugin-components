const shunter = require('shunter');
const config = require('./config');

// For Shunter configuration documentation, refer to: https://shunter.readthedocs.io/en/latest/usage/configuration-reference/
const app = shunter(config.shunter(__dirname, config.moduleName));

app.start();
