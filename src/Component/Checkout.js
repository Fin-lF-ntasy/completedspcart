import classes from './Checkout.module.css';

function Checkout({subTotal, tax, total, discount, formatCurrency}) {

  return (
    <div className={classes.summary}>
        <ul>
          <li>Subtotal: <span>{formatCurrency(subTotal)}</span></li>
          <li>Tax: <span>{formatCurrency(tax)}</span></li>
          <li>Discount: <span>{formatCurrency(discount)}</span></li>
          <li className={classes.total}>Total <span>{formatCurrency(total)}</span></li>
        </ul>
      </div>
  );
}

export default Checkout;
