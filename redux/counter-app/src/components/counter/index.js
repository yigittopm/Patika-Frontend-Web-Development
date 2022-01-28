import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counter/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default Counter;
