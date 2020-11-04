import {projectFirestore, projectStorage} from '../../firebase';

const imageFileName = `IMG_${Math.random(4000)}`;

const productCollection = projectFirestore.collection('Products');
const productImage = projectStorage.ref('Products').child(imageFileName);


export default {

  async index(setProducts) {
    productCollection.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {product, price, quantily, img} = doc.data();
        list.push({
          key: doc.id,
          product,
          price,
          quantily,
          img
        });
      });
      setProducts(list);
    })
  },

  async addImage(blob_data, imageName, setUrlImage){
    productImage.put(blob_data).on('state_changed', upload => {
      imageName(imageFileName);
    }, err => {
      console.log(err);
    }, async () => {
      const downloadUrl = await productImage.getDownloadURL();
      setUrlImage(downloadUrl);
    }
    );
  },

  async addProduct(data) {
    await productCollection.add(data).then(() => {
      console.log(`${data}`);
    })
  },

  async delete(item){
    
    await projectStorage.ref('Products').child(item.img.imageName).delete().then(() => {
    }).catch(err => {
      console.log(err);
    })

    await productCollection.doc(item.key).delete().then(() => {
    }).catch(err => {
      console.log(err);
    });
  },
}