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
export const getProductList = (setProductList, categoryList, setLoading, setFirstLoading) => {
  firestore()
    .collection('productList')
    .where('category', 'in', categoryList)
    .limit(10)
    .get()
    .then(querySnapshot => {
      let productList = [];
      querySnapshot.forEach(snapshot => {
        let data = snapshot.data();
        productList.push(data);
      });
      setProductList(productList);
      setFirstLoading && setFirstLoading(false);
      setLoading && setLoading(false);
    });
};

export const getMoreProducts = (productList, setProductList, categoryList, setIsLastItem) => {
  const lastProductName = productList[productList.length - 1].productName;
  firestore()
    .collection('productList')
    .where('category', 'in', categoryList)
    .orderBy('productName')
    .limit(4)
    .startAfter(lastProductName)
    .get()
    .then(querySnapshot => {
      let tempProductList = [];
      querySnapshot.forEach(snapshot => {
        let data = snapshot.data();
        tempProductList.push(data);
      });
      querySnapshot.docs.length < 4 && setIsLastItem(true);
      setProductList([...productList, ...tempProductList]);
    });
};
