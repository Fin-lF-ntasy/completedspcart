import classes from './Item.module.css';

function Item({name, description, quantity, price, img, changeQuantity, removeProduct, formatCurrency}) {

  return (
    <li className={classes.row}>
        <div className={`${classes.col} ${classes.left}`}>
          <div className={classes.thumbnail}>
            <a href="#">
              <img src= {img} alt={`Ảnh ${name}`}/>
            </a>
          </div>
          <div className={classes.detail}>
            <div className={classes.name}><a href="#">{name}</a></div>
            <div className={classes.description}>
              {description}
            </div>
            <div className={classes.price}>{formatCurrency(price)}</div>
          </div>
        </div>

        <div className={`${classes.col} ${classes.right}`}>
          <div className={classes.quantity}>
            <input type="number" min ="0" className={classes.numberIp} defaultValue={quantity} onChange={event => changeQuantity(event.target.value, name)}/>
          </div>

          <div className={classes.remove}>
            <svg
              version="1.1"
              className={classes.close}
              xmlns="//www.w3.org/2000/svg"
              xmlnsXlink="//www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 60 60"
              enableBackground="new 0 0 60 60"
              xmlSpace="preserve"
              onClick={() => removeProduct(name)}
            >
              <polygon
                points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"
              ></polygon>
            </svg>
          </div>
        </div>
    </li>
  );
}

export default Item;
