export interface IUser {
  id: string;
  name: string;
  email: string;
  imageProfile: string;
}

export default class User implements IUser {
  id: string;

  name: string;

  email: string;

  imageProfile: string;

  constructor({ id, name, email, imageProfile }: IUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.imageProfile = imageProfile;
  }
}
