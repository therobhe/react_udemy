import {Component} from 'react';
import classes from './User.module.css';

// extend is necessary to be able to process props
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

/*
const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};*/

export default User;
