const express = require('express');
const vehicleTypeRouter = express.Router();
const {postVehicleType, getVehicleType} = require('../Controller/vehicleTypeController')

/**
 *  @swagger
 *  components:
 *        schemas:
 *              tbl_vehicle_type:
 *                          type: object
 *                          properties:
 *                              id:
 *                                       type: string
 *                              vehicle_type_id:
 *                                          type: string
 *                              vehicle_type:
 *                                           type: string
 */

/**
 * @swagger
 * /viewvehicletype:
 *        get:
 *             summary: get data by database
 *             description: node js api
 *             responses:
 *                 200:
 *                    description: to test Get method
 *                    content:
 *                         application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/tbl_vehicle_type'
 */


/**
 * @swagger
 * /addvehicletype:
 *      post:
 *          summary: add data in database
 *          description: nodejs api
 *          requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                              $ref : '#component/schemas/tbl_vehicle_type'
 *          responses:
 *               200:
 *                    description: added successfully
 */


vehicleTypeRouter.post('/addvehicletype', postVehicleType)
vehicleTypeRouter.get('/viewvehicletype', getVehicleType)

module.exports = vehicleTypeRouter;
