var path = require('path');
var appdir = path.dirname(require.main.filename);
var reservations = require(`${appdir}/api/controllers/reservationsController.js`);

module.exports = function(app){ 
    app.route('/api/reservations').get(reservations.getAllReservations);


}
