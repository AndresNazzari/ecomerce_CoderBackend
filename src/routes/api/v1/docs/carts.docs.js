/**
 * @swagger
 * /carts:
 *  post:
 *    summary: Creates a new cart, returns its id
 *    tags: [Carts]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: Cart loaded
 *      '401':
 *        description: Unauthorized, no token detected
 *      '403':
 *        description: Forbidden, token expired or incorrect
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /carts/{id}/products:
 *  get:
 *    summary: Get all products in a cart by id
 *    tags: [Carts]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the cart
 *    responses:
 *      '200':
 *        description: Cart loaded
 *      '401':
 *        description: Unauthorized, no token detected
 *      '403':
 *        description: Forbidden, token expired or incorrect
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /carts/{id}/products:
 *  post:
 *    summary: Add products in a cart
 *    tags: [Carts]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the cart
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            id:
 *              type: string
 *              description: The id of the product to add
 *              example: "630882fd700f6113622e9a6b"
 *            quantity:
 *              type: number
 *              description: The quantity of the product to add
 *              example: 1
 *            example:
 *              id: "630882fd700f6113622e9a6b"
 *              qty: 1
 *    responses:
 *      '200':
 *        description: Cart added
 *      '401':
 *        description: Unauthorized, no token detected
 *      '403':
 *        description: Forbidden, token expired or incorrect
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /carts/{id}/products:
 *  delete:
 *    summary: Delete product in a cart
 *    tags: [Carts]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the cart
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            id:
 *              type: string
 *              description: The id of the product to delete
 *              example: "630882fd700f6113622e9a6b"
 *            example:
 *              id: "630882fd700f6113622e9a6b"
 *    responses:
 *      '200':
 *        description: product deleted
 *      '401':
 *        description: Unauthorized, no token detected
 *      '403':
 *        description: Forbidden, token expired or incorrect
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /carts/{id}:
 *  delete:
 *    summary: Delete a cart
 *    tags: [Carts]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the cart
 *    responses:
 *      '200':
 *        description: cart deleted
 *      '401':
 *        description: Unauthorized, no token detected
 *      '403':
 *        description: Forbidden, token expired or incorrect
 *      '500':
 *        description: Server error
 */
