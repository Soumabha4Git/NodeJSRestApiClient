
const express = require('express');
const router = express.Router();




const courseController = require('../controllers/courseController');

/**
 * @swagger
 * /get/all:
 *  get:
 *    tags:
 *      - course-controller Course Controller
 *    description: Use to request all courses
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.get('/all', courseController.fetchAllCourses);


/**
 * @swagger
 * /get/:id:
 *  get:
 *    tags:
 *      - course-controller Course Controller
 *    description: Use to request courses by id
 *    parameters:
 *       - in: path
 *         name: :id
 *         description: ID of course that needs to be fetched
 *         required: true
 *         type: string *         
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.get('/:id', courseController.fetchCourseById);


module.exports = router;
