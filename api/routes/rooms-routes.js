// var path = require('path');
// var appdir = path.dirname(require.main.filename);
// var reservations = require(`${appdir}/api/controllers/reservationsController.js`);

// module.exports = function(app){ 
//     app.route('/api/reservations').get(reservations.getAllReservations);


// }
module.exports = function(app){ 
    app.route('/api/rooms')
    .get()
    .post();
    app.route('/api/rooms/:roomId')
    .get()
    .patch()
    .delete();
    app.route('/api/rooms/:roomId/materials')
    .get()
    .post();
    app.route('/api/rooms/:roomId/materials/:materialId')
    .get()
    .patch()
    .delete();
    app.route('/api/rooms/:roomId/anomalies')
    .get()
    .post();
    app.route('/api/rooms/:roomId/anomalies/:anomalyId')
    .get()
    .patch()
    .delete();
}