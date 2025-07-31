import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiActions.toggleShowCart());
  };

  return (
    <button onClick={handleClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
