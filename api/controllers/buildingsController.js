exports.getAllBuildings = function(req, res, next){
    mysqlCon.executeQuery("select * from building;", 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json(success);
    });
}

exports.getBuildingById = function(req, res, next){
    var buildingId = req.params.buildingId;
    mysqlCon.executeQuery(`select * from building WHERE id = ${buildingId};`, 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json(success);
    });
}

exports.updateBuildingById = function(req, res, next){
    var buildingId = req.params.buildingId;
    var building = req.body;

    mysqlCon.executeQuery(`UPDATE building SET name = ${building.fullName} WHERE id = ${buildingId};`, 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json({"message": `building ${buildingId} updated.`});
    });
}

exports.deleteBuildingById = function(req, res, next){
    var buildingId = req.params.buildingId;
    mysqlCon.executeQuery(`UPDATE building SET marked_as_deleted = 1 WHERE id = ${buildingId};`, 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json({"message": `building ${buildingId} deleted.`});
    });
}