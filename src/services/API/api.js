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
    .limit(3)
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

export const getMoreProducts = (productList, setProductList, categoryList, setIsLastItem) => {
  const lastProductName = productList[productList.length - 1].productName;
  firestore()
    .collection('productList')
    .where('category', 'in', categoryList)
    .orderBy('productName')
    .limit(3)
    .startAfter(lastProductName)
    .get()
    .then(querySnapshot => {
      let tempProductList = [];
      querySnapshot.forEach(snapshot => {
        let data = snapshot.data();
        tempProductList.push(data);
      });
      querySnapshot.docs.length < 3 && setIsLastItem(true);
      setProductList([...productList, ...tempProductList]);
    });
};
