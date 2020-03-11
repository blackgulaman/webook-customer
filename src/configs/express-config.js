const fs = require('fs');
const path = require('path');

module.exports = {
  /**
   * This prefix will automatically append '/customer'
   * for all the routes. ex: https://localhost:5000/customer
   */
  apiPrefix: '/customer',

  staticFiles: path.join(__dirname, '../../frontend', 'build'),

  certificates: {
    key: fs.readFileSync(path.join(__dirname, '../certificates/key.pem')),
    cert: fs.readFileSync(
      path.join(__dirname, '../certificates/certificate.pem')
    )
  }
};
