export interface IProduct {
  name: string;
  price: number;
  description: string;
  isPromotion: boolean;
}

export default class Product implements IProduct {
  description: string;

  name: string;

  price: number;

  isPromotion: boolean;

  constructor({ description, name, price, isPromotion }: IProduct) {
    this.description = description;
    this.name = name;
    this.price = price;
    this.isPromotion = isPromotion;
  }
}
