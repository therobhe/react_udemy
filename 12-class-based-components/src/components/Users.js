import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" }
];

class Users extends Component {
  /**
   * Constructor used to initialize state and bind methods.
   *
   * In class components, the state is ALWAYS an object.
   */
  constructor() {
    super();
    this.state = {
      showUsers: true,
      otherState: "some value"
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = !this.state.showUsers; // NOT HOW TO DO IT!

    this.setState((curState) => {
      return { showUsers: !curState.showUsers }; // if there are multiple stats in the object, react will merge them, so the other state wont be lost
    });
  }

  getUsersList() {
    return (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && this.getUsersList()}
      </div>
    );
  }
}

/*const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};*/

export default Users;
