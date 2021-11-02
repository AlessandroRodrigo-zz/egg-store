import User from '../models/User';
import AbstractFactory from './AbstractFactory';

class UserFactory extends AbstractFactory<User> {
  create(user: NonNullable<Partial<User>>): User {
    return new User({
      email: user.email || '',
      id: user.id || '',
      imageProfile: user.imageProfile || '',
      name: user.name || '',
    });
  }
}

export default new UserFactory();
