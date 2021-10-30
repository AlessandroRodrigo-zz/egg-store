import User from '../models/User';
import AbstractFactory from './AbstractFactory';

class UserFactory extends AbstractFactory<User> {
  create(user: User): User {
    return new User({
      ...user,
    });
  }
}

export default new UserFactory();
