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
      categoryList.length
        ? setCategoryList(categoryList)
        : setCategoryList({ error: `Bir sorun oluştu.\nLütfen daha sonra deneyin` });
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
      productList.length ? setProductList(productList) : setProductList({ error: 'Bu kategoriye ait ürün bulunumadı.' });
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
export const getCampaigns = setCampaigns => {
  firestore()
    .collection('campaigns')
    .get()
    .then(querySnapshot => {
      let tempCampaigns = [];
      querySnapshot.forEach(snapshot => {
        let data = snapshot.data();
        tempCampaigns.push(data);
      });
      setCampaigns(tempCampaigns);
    });
};
export const searchProductList = (setProductList, searchText, setLoading) => {
  firestore()
    .collection('productList')
    .where('productName', '>=', searchText)
    .where('productName', '<=', searchText + '~')
    .get()
    .then(querySnapshot => {
      let searchProductList = [];
      querySnapshot.forEach(snapshot => {
        let data = snapshot.data();
        searchProductList.push(data);
      });
      setProductList(searchProductList);
      setLoading && setLoading(false);
    });
};

//Also an example with Async-Await
export const getProductDetail = async (productId, setLoading, setProductDetail) => {
  const productRef = firestore().collection('productList');
  const snapshot = await productRef.where('productId', '==', productId).get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    setLoading(false);
    return;
  }

  snapshot.forEach(doc => {
    setProductDetail(doc.data()), setLoading(false);
  });
};
