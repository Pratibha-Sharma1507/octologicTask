const connection = require('../Model/dbConnect');

const postVehicle = async (req, res)=>{
   try{ 
    let userData = req.body;

    connection.query('INSERT INTO tbl_vehicle_booking SET ?', userData, (insertErr, results) => {
        if (insertErr) {
            return res.status(500).json({ error: `This vehicle already booked` });
        }

        res.status(201).json({ message: 'Booking successfully', id: results.insertId });
    });

}catch(error){
    res.send(error.sqlMessage);
}
}
const getVehicle = async (req, res)=>{
    try{
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "SELECT * FROM tbl_vehicle_booking";

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

















