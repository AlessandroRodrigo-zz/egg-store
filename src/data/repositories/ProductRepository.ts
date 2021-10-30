import ProductFactory from '../../domain/factories/ProductFactory';
import Product from '../../domain/models/Product';
import AbstractRepository from './AbstractRepository';

class ProductRepository extends AbstractRepository {
  constructor() {
    super('products');
  }

  async index() {
    try {
      const procuts = await this.collection.get();

      const factorizedProducts = procuts.docs.map(doc => {
        return ProductFactory.create(doc.data() as Product);
      });

      return factorizedProducts;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}

export default new ProductRepository();
