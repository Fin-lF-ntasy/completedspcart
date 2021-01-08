import React from 'react';
import styles from './App.module.css';
import {useState} from 'react';
import {getProducts} from './ProductInfo';
import {getPromocodes} from './CodeInfo';
import Header from './Component/Header';
import Checkout from './Component/Checkout';
import Item from './Component/Item';
import Promocode from './Component/Promocode';

let PRODUCTS = [...getProducts()];
let PROMOCODES = [...getPromocodes()];

function App() {
  const [products, setProduct] = useState(PRODUCTS);
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(PROMOCODES[0]);

  const createProductsCpn = () =>
     products.map(product => (
       <Item
          name = {product.name}
          description = {product.description}
          quantity = {product.quantity}
          unit = {product.unit}
          price = {product.price}
          key = {product.key}
          img = {product.img}
          changeQuantity = {changeQuantity}
          removeProduct = {removeProduct}
          formatCurrency = {formatCurrency}
        />
      )
    );

  const createPrmCodeCpn = () =>
    PROMOCODES.map(e => (
      <Promocode
         code = {e.code}
         discount = {e.discount}
         key = {e.code}
         billgreater = {e.billgreater}
      />
      )
    );

  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  const calculateTotalItems = () =>
    products.map(product => product.quantity).reduce(reducer, 0);
  const calculatesubTotal = () =>
    Math.floor(products.map(product => product.quantity * product.price).reduce(reducer, 0));
  const calculateTax = () => calculatesubTotal() * 0.1;

  const changeQuantity = (value, name) =>
    setProduct(
      products.map(product => {
      if (product.name !== name) return product;
      product.quantity = parseInt(value);
      return product;
      })
    )

  const removeProduct = (name) =>
    setProduct(products.filter(product => product.name !== name));

  const applyCode = () => {
    const matchPrm = PROMOCODES.find(promocode => promocode.code === promoInput);
    if (matchPrm && matchPrm.billgreater <= calculatesubTotal()) {
      setAppliedPromo(matchPrm);
    }
  }

  const calculateTotal = () =>
    calculatesubTotal() + calculateTax() - calculateDiscount();

  const calculateDiscount = () =>
    appliedPromo.discount / 100 * calculatesubTotal();

  const formatCurrency = (value) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);

  return (
    <div>
      <Header totalItems = {calculateTotalItems()}/>
      <section className={styles.container}>
        <ul className={styles.products}>
          {createProductsCpn()}
        </ul>
      </section>
      <section className={styles.container}>
        <div className={styles.promotion}>
          <label className={styles.promocodeLabel} htmlFor="promo-code">Have A Promo Code?</label>
          <input id="code" type="text" className={styles.promoCodeip} onChange={(e) => setPromoInput(e.target.value)} /> <button type="button" className={styles.button} onClick={() => applyCode()}></button>
          <span className={styles.note} id="note"></span>
          {createPrmCodeCpn()}
        </div>
        <Checkout subTotal = {calculatesubTotal()} tax = {calculateTax()} total = {calculateTotal()} discount = {calculateDiscount()} formatCurrency={formatCurrency}/>
        <div className={styles.checkout}>
          <button type="button" className={styles.button}>Check Out</button>
        </div>
      </section>
    </div>
  );
}

export default App;
