module.exports = function(app){ 
    app.route('/api/reservations')
    .get()
    .post();
    app.route('/api/reservations/:reservationId')
    .get()
    .patch()
    .delete();
}