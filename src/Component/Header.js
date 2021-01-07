import classes from './Header.module.css';

function Header({totalItems}) {

  return (
    <header className={`${classes.header}  ${classes.container}`}>
        <h1>Shopping Cart</h1>

        <ul className={`${classes.breadcrumbUl} ${classes.breadcrumb}`}>
          <li className={classes.crumbLi}>Home</li>
          <li className={classes.crumbLi}>Shopping Cart</li>
        </ul>

        <span className={classes.count}>{totalItems} items in the bag</span>
      </header>
  );
}

export default Header;
