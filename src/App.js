import { FirebaseError } from "firebase/app";
import "./App.css";
import Login from "./Component/Collection/login";

const App = () => {
  return <Login />;
};

export default App;

// src/App.js

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Component/Collection/login";
// // import Signup from "./Component/Collection/signup"; // Assuming you have a Signup component
// import Home from "./Home"; // Import your Home component or any other main component

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         {/* <Route path="/signup" element={<Signup />} /> */}
//         <Route path="/home" element={<Home />} />
//         {/* Add more routes as necessary */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
