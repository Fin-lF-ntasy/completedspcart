import classes from './Checkout.module.css';

function Checkout({subTotal, tax, total, discount}) {
  return (
    <div className={classes.summary}>
        <ul>
          <li>Subtotal: <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subTotal)}</span></li>
          <li>Tax: <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tax)}</span></li>
          <li>Discount: <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(-discount)}</span></li>
          <li className={classes.total}>Total <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</span></li>
        </ul>
      </div>
  );
}

export default Checkout;
