const express = require('express');
const vehicleModelRouter = express.Router();
const {postVehicle, getVehicle} = require('../Controller/vehicleModelController')

/**
 *  @swagger
 *  components:
 *        schemas:
 *              tbl_vehicles:
 *                          type: object
 *                          properties:
 *                              id:
 *                                   type: string
 *                              vehicle_type_id:
 *                                          type: string
 *                              model_name:
 *                                           type: string
 */

/**
 * @swagger
 * /viewvehiclemodel:
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
 *                                          $ref : '#components/schemas/tbl_vehicles'
 */


/**
 * @swagger
 * /addvehiclemodel:
 *      post:
 *          summary: add data in database
 *          description: nodejs api
 *          requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                              $ref : '#component/schemas/tbl_vehicles'
 *          responses:
 *               200:
 *                    description: added successfully
 */


vehicleModelRouter.post('/addvehiclemodel', postVehicle)
vehicleModelRouter.get('/viewvehiclemodel', getVehicle)

module.exports = vehicleModelRouter;
