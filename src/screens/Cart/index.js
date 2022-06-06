import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import ProductButton from '../../components/ProductButton';
import { cartProductList } from '../../redux/selectors';
import { getCampaigns } from '../../services/API/api';
import ButtonGroup from '../../components/ButtonGroup';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cartProducts = useSelector(cartProductList);
  const [productList, setProductList] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [matchedCampaigns, setMatchCampaigns] = useState([]);
  const [discountTexts, setDiscountTexts] = useState([]);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);

  const calculateTotalDiscount = () => {
    let tempTotalDiscount = matchedCampaigns
      .map(product => product && product.discount * product.quantity)
      .reduce((partialSum, a) => partialSum + a, 0);
    setTotalDiscount(tempTotalDiscount);
  };

  const calculateSubTotalPrice = () => {
    let tempTotalDiscount = productList
      .map(product => product && product.currentPrice * product.quantity)
      .reduce((partialSum, a) => partialSum + a, 0);
    setSubTotalPrice(tempTotalDiscount);
  };

  useEffect(() => {
    setProductList(cartProducts);
    getCampaigns(setCampaigns);
  }, [cartProducts]);

  const campaingMatch = () => {
    let tempMatchedCampaigns = [];
    const checkCategory = product => {
      return campaigns.some(campaign => campaign.categoryName === product.category);
    };
    const checkCondition = product => {
      return campaigns.some(campaign => campaign.condition <= product.currentPrice);
    };
    const checkCampaing = product => checkCategory(product) && checkCondition(product);
    tempMatchedCampaigns = productList.map(
      product =>
        checkCampaing(product) && {
          discount:
            (product.currentPrice * campaigns.find(campaign => campaign.categoryName === product.category).percentage) / 100,
          category: product.category,
          percentage: campaigns.find(campaign => campaign.categoryName === product.category).percentage,
          productName: product.productName,
          quantity: product.quantity
        }
    );
    setMatchCampaigns(tempMatchedCampaigns);
  };

  useEffect(() => {
    campaingMatch();
  }, [campaigns]);

  useEffect(() => {
    calculateTotalDiscount();
    generateDiscountTexts();
    calculateSubTotalPrice();
  }, [matchedCampaigns, campaigns, cartProducts]);

  const generateDiscountTexts = () => {
    let tempDiscountText = [];
    matchedCampaigns.forEach(
      campaign =>
        campaign &&
        tempDiscountText.push({
          title: `%${campaign.percentage} ${campaign.category} indirimi`,
          description: `${campaign.productName}`,
          gain: `${campaign.quantity} adet x ${campaign.discount} ₺: ${-campaign.discount * campaign.quantity} ₺`
        })
    );
    setDiscountTexts(tempDiscountText);
  };

  const renderProduct = ({ item }) => {
    return <ProductButton product={item}></ProductButton>;
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  if (productList.length === 0) return <EmptyCart />;
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productListContainer}
        data={productList}
        renderItem={item => renderProduct(item)}
        ItemSeparatorComponent={renderSeparator}
      ></FlatList>
      <View style={styles.infoContainer}>
        {discountTexts.length > 0 &&
          discountTexts.map((discountText, index) => (
            <>
              <View key={index} style={styles.discountContainer}>
                <View>
                  <Text style={styles.infoTitle}>{discountText.title}</Text>
                  <Text style={styles.infoDescription}>{discountText.description}</Text>
                </View>
                <Text style={styles.gainText}>{discountText.gain}</Text>
              </View>
            </>
          ))}
        {discountTexts.length > 0 && (
          <View style={styles.totalPriceContainer}>
            <Text>Toplam İndirim:</Text>
            <Text style={styles.gainText}>-{totalDiscount} ₺</Text>
          </View>
        )}
        <View style={styles.totalPriceContainer}>
          <Text>Toplam Fiyat:</Text>
          <Text style={styles.totalPriceText}>
            {totalDiscount > 0
              ? `${subTotalPrice}₺ - ${totalDiscount}₺ = ${subTotalPrice - totalDiscount}₺ `
              : `${subTotalPrice} ₺`}
          </Text>
        </View>
      </View>
      <ButtonGroup
        style={styles.confirmCartButton}
        primaryButtonPress={() => console.log('Sepeti Onayla')}
        primaryButtonText={'Sepeti Onayla'}
      ></ButtonGroup>
    </View>
  );
};

export default Cart;
