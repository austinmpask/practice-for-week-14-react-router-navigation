import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

function Stocks() {
  const loggedIn = true;
  const history = useHistory();
  const handleClick = () => {
    window.alert("Doing something");
    history.push("/");
  };

  if (loggedIn) {
    return (
      <div className="comp orange">
        <h1>Stocks Component</h1>
        <button onClick={handleClick}>Home</button>
      </div>
    );
  } else {
    return <Redirect to="/not-logged-in"></Redirect>;
  }
}

export default Stocks;
