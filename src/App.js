import { useSelector, useDispatch } from "react-redux";
// import { actions } from "./store/index";
import { increment, decrement, payLoad } from "./actions/index";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  // const increment = () => {
  //   dispatch(actions.increment());
  // };
  // const decrement = () => {
  //   dispatch(actions.decrement());
  // };
  // const addBy = () => {
  //   dispatch(actions.addBy(10));
  // };
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}> Decrement</button>
      <button onClick={() => dispatch(payLoad(10))}>Add by 10</button>
      {isLogged ? (
        <h3>Valuable Information you shouldnt see</h3>
      ) : (
        <h3>Content Not Available </h3>
      )}
    </div>
  );
}

export default App;
