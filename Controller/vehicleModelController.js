const connection = require('../Model/dbConnect');

const postVehicle = async (req, res)=>{
   try{ 
    let userData = req.body;
    let sqlQuery = "INSERT INTO tbl_vehicles SET ?";

    await connection.query(sqlQuery,userData,function(error, result){
        if(error){
            console.log("Error:", error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage);
}
}
const getVehicle = async (req, res)=>{
    try{
    let userData = req.body;
    let sqlQuery = "SELECT * FROM tbl_vehicles";

    await connection.query(sqlQuery, userData, function(error, result){
        if(error){
            console.log("Error:", error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage);
}
}
module.exports={postVehicle, getVehicle};

















