/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Register new user
 *    tags: [Authorizations]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            address:
 *               type: string
 *               description: The address of the user
 *               example: "Calle falsa 123"
 *            email:
 *              type: string
 *              description: The email of the user
 *              example: "johndoe@user.com"
 *            password:
 *              type: string
 *              description: The password of the user
 *              example: "123456"
 *            password2:
 *              type: string
 *              description: The password of the user
 *              example: "123456"
 *            roleId:
 *              type: number
 *              description: The role of the user in the system
 *              example: 1
 *            example:
 *              address: "Calle falsa 123"
 *              email: "johndoe@user.com"
 *              password: "123456"
 *              password2: "123456"
 *              roleId: 1
 *    responses:
 *      '200':
 *        description: User created
 *      '400':
 *        description: Bad Request, some values are missing or invalid
 *      '500':
 *        description: Server error
 */

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login a user
 *    tags: [Authorizations]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            email:
 *              type: string
 *              description: The email of the user
 *              example: "johndoe@user.com"
 *            password:
 *              type: string
 *              description: The password of the user
 *              example: "123456"
 *            example:
 *              email: "johndoe@user.com"
 *              password: "123456"
 *    responses:
 *      '200':
 *        description: User logged in
 *      '400':
 *        description: Bad Request, some values are missing or invalid
 *      '404':
 *        description: Invalid Credentials, password do not match or email not exists
 *      '500':
 *        description: Server error
 */
