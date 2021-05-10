import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Declares a piece of state and
  //   stateValue, stateSetter            // its initial value
  const [PlusClicked, setPlusClicked] = useState(false);

  //   stateValue, stateSetter            // its initial value
  const [minClicked, setminClicked] = useState(false);

  const incrementScore = () => {
    setCount(count + 1);
    if (count === 99) setPlusClicked(true);
  };

  const decrementScore = () => {
    setCount(count - 1);
    if (count === 1) setminClicked(true);
  };

  return (
    <div>
      <p>The count currently is:</p>
      <h1>{count}</h1>
      <div>
        <button
          style={{ marginRight: 20 }}
          onClick={incrementScore}
          disabled={PlusClicked}
        >
          +
        </button>
        <button onClick={decrementScore} disabled={minClicked}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
