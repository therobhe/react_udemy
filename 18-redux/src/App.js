import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <>
      <Header />
      {!isLoggedIn ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
