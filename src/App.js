import React from 'react';
import styles from './App.module.css';
import {useState} from 'react';
import {getProducts} from './ProductInfo';
import {getPromocodes} from './CodeInfo';
import Header from './Component/Header';
import Checkout from './Component/Checkout';
import Item from './Component/Item';
import Promocode from './Component/Promocode';

let PRODUCTS = getProducts();
let PROMOCODES = getPromocodes();

function App() {
  const [products, setProduct] = useState(PRODUCTS);
  let [takediscount, setDiscount] = useState(0);
  let items = [];
  let promocodes = PROMOCODES.map(e => <Promocode
                      code = {e.code}
                      discount = {e.discount}
                      key = {e.code}
                      billgreater = {e.billgreater}
                   />);
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let totalItems = 0;
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  let codeInput = document.getElementById('code');

  items = products.map(e => <Item
                name = {e.name}
                description = {e.description}
                quantity = {e.quantity}
                unit = {e.unit}
                price = {e.price}
                key = {e.key}
                img = {e.img}
                changeQuantity = {changeQuantity}
                removeItem = {removeItem}
              />);
  totalItems = products.map(e => e.quantity).reduce(reducer);
  subTotal = Math.floor(products.map(e => e.quantity * e.price).reduce(reducer));
  tax = subTotal * 0.1;
  total = subTotal + tax - takediscount;

  function changeQuantity(event, name) {
    let valueChange = parseInt(event.target.value);
    setProduct(
      products.map(e => {
        if (e.name !== name) return e
        else {
          let p = {...e};
          p.quantity = valueChange;
          return p
        }
      })
    );
  }

  function removeItem(name) {
    setProduct(
      products.filter(e => e.name !== name)
    );
  }

  function applyCode() {
    codeInput = document.getElementById('code');
    if (PROMOCODES.find(e => e.code === codeInput.value).billgreater > subTotal) {
      return
    }
    let newdiscount = PROMOCODES.filter(e => e.billgreater <= subTotal).find(e => e.code === codeInput.value);
    console.log(PROMOCODES.filter(e => e.billgreater <= subTotal));
    setDiscount(
      takediscount = newdiscount.discount / 100 * subTotal
    );
    console.log(takediscount);

  }


  return (
    <div>
      <Header totalItems = {totalItems}/>
      <section className={styles.container}>
        <ul className={styles.products}>
          {items}
        </ul>
      </section>
      <section className={styles.container}>
        <div className={styles.promotion}>
          <label className={styles.promocodeLabel} htmlFor="promo-code">Have A Promo Code?</label>
          <input id="code" type="text" className={styles.promoCodeip} /> <button type="button" className={styles.button} onClick={() => applyCode()}></button>
          <span className={styles.note} id="note"></span>
          {promocodes}
        </div>
        <Checkout subTotal = {subTotal} tax = {tax} total = {total} discount = {takediscount}/>
        <div className={styles.checkout}>
          <button type="button" className={styles.button}>Check Out</button>
        </div>
      </section>
    </div>
  );
}

export default App;
