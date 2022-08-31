import MongoContainer from '../../containers/mongo.container.js';
import { Product } from '../../models/Product.model.js';

export default class ProductsMongoDao extends MongoContainer {
  constructor(collection) {
    super(collection);
  }
  async addNewProduct(product) {
    const newProduct = new Product({
      ...product,
    });
    await newProduct.save();
    return { msg: 'producto agregado', product: newProduct };
  }

  async updateProduct(id, obj) {
    const productoUpdate = await Product.findByIdAndUpdate(id, obj, {
      returnOriginal: false,
    }); //con el new:true, devuelve el producto actualizado
    return { msg: 'producto actualizado', product: productoUpdate };
  }

  static getInstance() {
    if (!ProductsMongoDao.instance) {
      ProductsMongoDao.instance = new ProductsMongoDao('products');
    }
    return ProductsMongoDao.instance;
  }
}
