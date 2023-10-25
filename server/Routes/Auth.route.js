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
 * 
 * components:
 *      securitySchemes:
 *          BearerAuth:
 *              type: http
 *              scheme: bearer
 */










const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/Auth.controller')


/**
 * @swagger
 * /auth/register:
 *  post:
 *      summary: register
 *      responses:
 *          200:
 *              description: list login
 *              content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/admin'
 *                          
 * 
 * 
 */


router.post('/register', AuthController.register)

/**
 * @swagger
 * /auth/login:
 *      post:
 *          summary: login
 *          
 * 
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
 *          - name: Token
 *            in: query
 *            description: Token for login
 *            required: true
 *            schema:
 *              type: http
 *          responses:
 *              '200':
 *                  description: Login berhasil
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/admin'
 *         
 *                          
 * 
 * 
 */

router.post('/login', AuthController.login )

router.post('/refresh-token', AuthController.refresh)

router.delete('/logout', AuthController.logout)


module.exports = router