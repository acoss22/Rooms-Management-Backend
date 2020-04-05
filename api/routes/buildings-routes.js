module.exports = function(app){ 
    app.route('/api/buildings')
    .get()
    .post();
    app.route('/api/buildings/:buildingId')
    .get()
    .patch()
    .delete();
}