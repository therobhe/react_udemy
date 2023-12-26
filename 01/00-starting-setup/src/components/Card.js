/**
 * Import style
 */
import "../style/Card.css"

/**
 * Composition: a custom shell used to prevent duplicate css lines
 * props.children = reference to paste everything from the outside call to inside the composition
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Card(props) {
    const classes = "card " + props.className;
    return (
      <div className={classes}>
          {props.children}
      </div>
    );
}

export default Card;