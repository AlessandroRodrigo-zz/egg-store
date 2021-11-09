import ProductFactory from '../../domain/factories/ProductFactory';
import Product from '../../domain/models/Product';
import AbstractRepository from './AbstractRepository';

class ProductRepository extends AbstractRepository {
  constructor() {
    super('products');
  }

  async index() {
    try {
      const products = await this.collection.get();

      return products.docs.map(doc => {
        return ProductFactory.create(doc.data() as Product);
      });
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}

export default new ProductRepository();
