import classes from './Promocode.module.css';

function Promocode({code, discount, billgreater}) {

  return (
    <div className={classes.promoCode}>
        <span>Code: {code} -  Giảm: {discount}% cho các hoá đơn (trước thuế) từ {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(billgreater)} </span>
    </div>
  );
}

export default Promocode;
