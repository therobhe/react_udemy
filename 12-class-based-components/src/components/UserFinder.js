import { Fragment, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();

    this.state = {
      filteredUsers: [],
      searchTerm: ""
    };
  }

  // imagine, we are fetching data from a server instead using DUMMY_USERS, then componentDidMount would fetch them for every render
  // instead we use componentDidMount to fetch data only once when the component is first rendered
  componentDidMount() {
    // send http request to fetch data
    this.setState(() => {
      return { filteredUsers: this.context.users };
    });
  }

  // executed every time the component is rendered
  componentDidUpdate(prevProps, prevState) {
    // if the search term has changed, filter the users
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState(() => {
        return { filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) };
      });
    }
  }

  searchChangeHandler(event) {
    this.setState(() => {
      return { searchTerm: event.target.value };
    });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

/*const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};*/

export default UserFinder;