const express = require('express');
const vehicleRouter = express.Router();
const {postVehicle, getVehicle} = require('../Controller/vehicleBookingController');


/**
 *  @swagger
 *  components:
 *        schemas:
 *              tbl_vehicle_booking:
 *                          type: object
 *                          properties:
 *                              First_Name:
 *                                          type: string
 *                              Last_Name:
 *                                          type: string
 *                              id:
 *                                           type: string
 *                              Start_Date:
 *                                            type: date
 *                              End_Date:
 *                                            type: date
 *                      
 */

/**
 * @swagger
 * /viewvehiclebooking:
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
 *                                          $ref : '#components/schemas/tbl_vehicle_booking'
 */


/**
 * @swagger
 * /addvehiclebooking:
 *      post:
 *          summary: add data in database
 *          description: nodejs api
 *          requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                              $ref : '#component/schemas/tbl_vehicle_booking'
 *          responses:
 *               200:
 *                    description: added successfully
 */



vehicleRouter.post('/addvehiclebooking', postVehicle)
vehicleRouter.get('/viewvehiclebooking', getVehicle)

module.exports = vehicleRouter;
