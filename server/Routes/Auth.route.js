const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/Auth.controller')

/**
 * @swagger
 * components:
 *      schemas:
 *          admin:
 *              type: object
 *              required:
 *                  -email
 *                  -password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: email admin
 *                  password:
 *                      type: string
 *                      description: password
 *    
 */

/**
 * @swagger
 * /:
 *  get:
 *      summary: this api test
 *      description: this is api testttt
 *      responses:
 *          200:
 *              description: to text Get method
 */

/**
 * @swagger
 * /auth/login:
 *      post:
 *          summary: login
 *          parameters:
 *          - name: email
 *            in: query
 *            description: email for login
 *            required: true
 *            schema: 
 *              type: string
 *          - name: password
 *            in: query
 *            description: Email for login
 *            required: true
 *            schema: 
 *              type: string
 *          responses:
 *              '200':
 *                  description: Login berhasil
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/admin'
 *         
 */

/**
 * @swagger
 * /auth/register:
 *      post:
 *          summary: register
 *          parameters:
 *          - name: email
 *            in: query
 *            description: email for login
 *            required: true
 *            schema: 
 *              type: string
 *          - name: password
 *            in: query
 *            description: Email for login
 *            required: true
 *            schema: 
 *              type: string
 *          responses:
 *              '200':
 *                  description: Login berhasil
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/admin'
 *         
 */






router.post('/register', AuthController.register)



router.post('/login', AuthController.login )

router.post('/refresh-token', AuthController.refresh)

router.delete('/logout', AuthController.logout)


module.exports = router