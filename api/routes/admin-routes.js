module.exports = function(app){ 
    app.route('/api/admin/states/anomalies')
    .get()
    .post();
    app.route('/api/admin/states/anomalies/:anomalyId')
    .get()
    .patch()
    .delete();

    app.route('/api/admin/states/rooms')
    .get()
    .post();
    app.route('/api/admin/states/rooms/:anomalyId')
    .get()
    .patch()
    .delete();
}