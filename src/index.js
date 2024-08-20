import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // <React.StrictMode>
  //   {/* <StarRating
  //     maxRating={5}
  //     messages={["Awful", "Bad", "Okay", "Good", "Amazing"]}
  //     className="test"
  //   />
  //   <StarRating color="blue" size={25} maxRating={10} defaultRating={5} />
  //   <Test /> */}
  // </React.StrictMode>
);

// function Test() {
//   const [rating, setRating] = useState(0);
//   return (
//     <div>
//       <StarRating onSetRating={setRating} />
//       <p>This movie has a rating of {rating} stars</p>
//     </div>
//   );
// }
