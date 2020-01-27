import {firebaseDatabase, firebaseStorage} from '../utils/firebaseUtils';

export default class FirebaseService {
    constructor(){
        this.storageRef = firebaseStorage.ref();
    }

    static getData = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static postData = (nodePath, data) => {
        firebaseDatabase.ref(nodePath).push(data);
    };

    static getImage(nodePath){
        return this.storageRef.child(nodePath).getDownloadURL().then((url) => {return url})
    }

    static postPicture(node, image){
        this.storageRef.child(node).push(image)
    }

}