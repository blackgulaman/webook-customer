const fs = require('fs');

// Application port
exports.port = process.env.PORT || 5000;

// Checker for what server is to run (http | https)
exports.isHttp = true;
