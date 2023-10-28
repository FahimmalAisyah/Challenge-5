const productController = require('../Controllers/productController');

const router = require('express').Router();


/**
 * @swagger
 * components:
 *      schemas:
 *          mobil:
 *              type: object
 *              required:
 *                  -nama
 *                  -ukuran
 *                  -sewa
 *              properties:
 *                  nama:
 *                      type: string
 *                      description: nama mobil
 *                  ukuran:
 *                      type: string
 *                      description: ukuran mobil
 *                  sewa:
 *                      type: integer
 *                      description: harga sewa mobil
 *    
 */

/**
 * @swagger
 * /car/addMobil:
 *      post:
 *          summary: tambah mobil
 *          parameters:
 *          - name: nama
 *            in: query
 *            description: Nama mobil
 *            required: true
 *            schema: 
 *              type: string
 *          - name: ukuran
 *            in: query
 *            description: ukuran mobil
 *            required: true
 *            schema: 
 *              type: string
 *          - name: sewa
 *            in: query
 *            description: harga sewa mobil
 *            required: true
 *            schema: 
 *              type: integer
 *          responses:
 *              '200':
 *                  description: tambah berhasil
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/mobil'
 *         
 */

/**
 * @swagger
 * /car/allMobil:
 *      get:
 *          summary: get all mobil
 *          responses:
 *              '200':
 *                  description: get all mobil
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/mobil'
 *         
 */

/**
 * @swagger
 * /car/:id:
 *      get:
 *          summary: get mobil tertentu
 *          parameters:
 *          - name: id
 *            in: query
 *            description: id mobil
 *            required: true
 *            schema: 
 *              type: integer
 *          responses:
 *              '200':
 *                  description: tambah berhasil
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/mobil'
 *         
 */

/**
 * @swagger
 * /car/updateMobil/:id:
 *      put:
 *          summary: update mobil
 *          parameters:
 *          - name: nama
 *            in: query
 *            description: Nama mobil
 *            required: true
 *            schema: 
 *              type: string
 *          - name: ukuran
 *            in: query
 *            description: ukuran mobil
 *            required: true
 *            schema: 
 *              type: string
 *          - name: sewa
 *            in: query
 *            description: harga sewa mobil
 *            required: true
 *            schema: 
 *              type: integer
 *          responses:
 *              '200':
 *                  description: update berhasil
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/mobil'
 *         
 */

/**
 * @swagger
 * /car/deleteMobil/:id:
 *      delete:
 *          summary: delete mobil
 *          parameters:
 *          - name: id
 *            in: query
 *            description: id mobil
 *            required: true
 *            schema: 
 *              type: integer
 *          responses:
 *              '200':
 *                  description: tambah berhasil
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/mobil'
 *         
 */

router.post('/addMobil', productController.addProduct);

router.get('/allMobil', productController.getAllProduct);

router.get('/published', productController.getPublishedProduct);

router.get('/:id', productController.getOneProduct);
router.put('/updateMobil/:id', productController.updateProduct);
router.get('/deleteMobil/:id', productController.deleteProduct);

module.exports = router