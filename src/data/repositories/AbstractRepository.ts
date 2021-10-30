import Firebase from 'firebase/app';

export default class AbstractRepository {
  protected collection!: Firebase.firestore.CollectionReference<Firebase.firestore.DocumentData>;

  protected collectionName!: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
    this.collection = Firebase.firestore().collection(this.collectionName);
  }
}
