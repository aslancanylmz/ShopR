import firestore from '@react-native-firebase/firestore';

export const getCategoryList = setCategoryList => {
  firestore()
    .collection('productList')
    .get()
    .then(querySnapshot => {
      let categoryList = [];
      querySnapshot.forEach(snapshot => {
        let data = snapshot.data().category;
        !categoryList.some(category => category === data) && categoryList.push(data);
      });
      setCategoryList(categoryList);
    });
};
export const getProductList = (setProductList, categoryList) => {
  firestore()
    .collection('productList')
    .where('category', 'in', categoryList)
    .orderBy('currentPrice')
    .get()
    .then(querySnapshot => {
      let productList = [];
      querySnapshot.forEach(snapshot => {
        let data = snapshot.data();
        productList.push(data);
      });
      setProductList(productList);
    });
};
