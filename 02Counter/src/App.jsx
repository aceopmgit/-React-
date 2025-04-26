// import "./App.css";
// import React, { useState } from "react";
// function App() {
//   let [counter, setCounter] = useState(0);

//   function increaseButtonHandler() {
//     if (counter < 20) setCounter(counter + 1);
//   }

//   function decreaseButtonHandler(e) {
//     if (counter > 0) setCounter(counter - 1);
//   }

//   function resetButtonHandler() {
//     setCounter(0);
//   }

//   return (
//     <div className="main_div">
//       <div className="main_content">
//         <h1>Counter Project</h1>
//         <h2>Counter : {counter}</h2>
//         {counter >= 10 && counter < 20 && (
//           <p className="congratsMessage">
//             🎉 Congrats! You reached 10 or more!
//           </p>
//         )}
//         {counter === 20 && (
//           <p className="limitMessage">🚫 Maximum limit of 20 reached</p>
//         )}

//         <div className="buttonContainer">
//           <button onClick={increaseButtonHandler} disabled={counter === 20}>
//             Increase
//           </button>
//           <button onClick={decreaseButtonHandler} disabled={counter === 0}>
//             Decrease
//           </button>
//           <button onClick={resetButtonHandler} disabled={counter === 0}>
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  const increaseButtonHandler = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const decreaseButtonHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const resetButtonHandler = () => {
    setCounter(0);
  };
  return (
    <div className="main_div">
      <div className="main_content">
        <h1>Counter Project</h1>
        <h2>Counter : {counter}</h2>
        {counter >= 10 && counter < 20 && (
          <p className="congratsMessage">
            🎉 Congrats! You reached 10 or more!
          </p>
        )}
        {counter === 20 && (
          <p className="limitMessage">🚫 Maximum limit of 20 reached</p>
        )}

        <div className="buttonContainer">
          <button onClick={increaseButtonHandler} disabled={counter === 20}>
            Increase
          </button>
          <button onClick={decreaseButtonHandler} disabled={counter === 0}>
            Decrease
          </button>
          <button onClick={resetButtonHandler} disabled={counter === 0}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
