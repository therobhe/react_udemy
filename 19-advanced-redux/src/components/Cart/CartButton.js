import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItemsInCart = useSelector((state) => state.cart.totalQuantity);

  const handleClick = () => {
    dispatch(uiActions.toggleShowCart());
  };

  return (
    <button onClick={handleClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsInCart}</span>
    </button>
  );
};

export default CartButton;
