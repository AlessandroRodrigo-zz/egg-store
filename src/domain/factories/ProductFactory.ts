import Product from '../models/Product';
import AbstractFactory from './AbstractFactory';

class ProductFactory extends AbstractFactory<Product> {
  create(product: Product) {
    const { description, isPromotion, name, price } = product;

    return new Product({
      description,
      isPromotion,
      name,
      price: price / 100,
    });
  }

  formatPrice(price: number): string {
    const formatCurrent = new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(price);

    return formatCurrent;
  }
}

export default new ProductFactory();
