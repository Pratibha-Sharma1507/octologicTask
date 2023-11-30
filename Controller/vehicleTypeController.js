const connection = require('../Model/dbConnect');
const Joi = require('joi');

const schema = Joi.object({
    id: Joi.string().required(),
    vehicle_type_id: Joi.string().required(),
    vehicle_type: Joi.string().valid('hatchback', 'suv', 'sedan', 'cruiser', 'sports').required()
});

const postVehicleType = async (req, res) => {
    try {
        let userData = req.body;
        const { error } = schema.validate(userData);
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        connection.query('INSERT INTO tbl_vehicle_type SET ?', userData, (insertErr, results) => {
            if (insertErr) {
                return res.status(500).json({ error: `This data already exists` });
            }

            res.status(201).json({ message: 'Data inserted successfully', id: results.insertId });
        });

    } catch (error) {
        res.send(error.sqlMessage);
    }
}
const getVehicleType = async (req, res) => {
    try {
        let userData = req.body;
        console.log(userData);
        let sqlQuery = "SELECT * FROM tbl_vehicle_type";

        await connection.query(sqlQuery, userData, function (error, result) {
            if (error) {
                console.log("Error:", error.sqlMessage);
            }
            else {
                res.json(result);
            }
        });
    } catch (error) {
        res.send(error.sqlMessage);
    }
}
module.exports = { postVehicleType, getVehicleType };















