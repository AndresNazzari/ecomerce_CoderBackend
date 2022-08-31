/**
 * @swagger
 * /products/:
 *  get:
 *    summary: Get all products
 *    tags: [Products]
 *    responses:
 *      '200':
 *        description: Products loaded
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    summary: Get a product by id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the product
 *    responses:
 *      '200':
 *        description: Product loaded
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /products:
 *  post:
 *    summary: Save a new product
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/Product'
 *    responses:
 *      '200':
 *        description: Product loaded
 *      '400':
 *        description: Bad Request, some values are missing or invalid
 *      '401':
 *        description: Unauthorized, no token detected
 *      '403':
 *        description: Forbidden, token expired or incorrect
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /products/{id}:
 *  put:
 *    summary: update a product
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the product to update
 *    requestBody:
 *     content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/Product'
 *    responses:
 *      '200':
 *        description: Product updated
 *      '401':
 *        description: Unauthorized, no token detected
 *      '403':
 *        description: Forbidden, token expired or incorrect
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /products/{id}:
 *  delete:
 *    summary: delete a product
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the product to delete
 *    responses:
 *      '200':
 *        description: Product deleted
 *      '401':
 *        description: Unauthorized, no token detected
 *      '403':
 *        description: Forbidden, token expired or incorrect
 *      '500':
 *        description: Server error
 */
