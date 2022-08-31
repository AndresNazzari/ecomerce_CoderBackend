/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *      address:
 *         type: string
 *         description: The address of the user
 *         example: "Calle falsa 123"
 *      email:
 *        type: string
 *        description: The email of the user
 *        example: "johndoe@user.com"
 *      password:
 *        type: string
 *        description: The password of the user
 *        example: "123456"
 *      roleId:
 *        type: number
 *        description: The role of the user in the system
 *        example: 1
 *    example:
 *      address: "Calle falsa 123"
 *      email: "johndoe@user.com"
 *      password: "123456"
 *      roleId: 1
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   Product:
 *    type: object
 *    properties:
 *      title:
 *        type: string
 *        description: The title of the product
 *        example: "iPhone X"
 *      description:
 *        type: string
 *        description: The description of the product
 *        example: "iPhone X is the best phone ever"
 *      price:
 *        type: number
 *        description: The price of the product
 *        example: 100
 *      discountPercentage:
 *        type: number
 *        description: The discount percentage of the product
 *        example: 10
 *      rating:
 *        type: number
 *        description: The rating of the product
 *        example: 4.9
 *      stock:
 *         type: number
 *         description: The stock of the product
 *         example: 135
 *      category:
 *         type: string
 *         description: The category of the product
 *         example: "Smartphone"
 *      thumbnail:
 *         type: string
 *         description: The thumbnail of the product
 *         example: "https://www.apple.com/iphone-x/space/images/hero/iphone-x.jpg"
 *    example:
 *      title: "iPhone X"
 *      description: "iPhone X is the best phone ever"
 *      price: 100
 *      discountPercentage: 10
 *      rating: 4.9
 *      stock: 135
 *      category: "Smartphone"
 *      thumbnail: "https://www.apple.com/iphone-x/space/images/hero/iphone-x.jpg"
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   Cart:
 *    type: object
 *    properties:
 *      email:
 *        type: string
 *        description: The email of the user
 *        example: "johndoe@user.com"
 *      items:
 *        type: array
 *        description: The products of the cart
 *        items:
 *          allOf:
 *           - $ref: '#/components/schemas/Product'
 *      timestamp:
 *        type: date
 *        description: The date of creation of the cart
 *        example: "2020-01-01T00:00:00.000Z"
 *    example:
 *     email: "johndoe@user.com"
 *     items: [{title: "iPhone X", description: "iPhone X is the best phone ever", price: 100, discountPercentage: 10, rating: 4.9, stock: 135, category: "Smartphone", thumbnail: "https://www.apple.com/iphone-x/space/images/hero/iphone-x.jpg"}]
 *     timestamp: "2020-01-01T00:00:00.000Z"
 */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * security:
 *  - bearerAuth: []
 */
