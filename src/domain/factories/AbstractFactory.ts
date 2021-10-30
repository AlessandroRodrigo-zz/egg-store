interface IAbstractFactory<T> {
  create(object: T): T;
}

export default class AbstractFactory<T> implements IAbstractFactory<T> {
  create(object: T): T {
    return object;
  }
}
