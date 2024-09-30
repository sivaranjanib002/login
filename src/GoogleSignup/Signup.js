import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import google from "../Assets/g-logo.png";
// import Home from "./Home";

function SignIn() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue(storedEmail);
    }
    console.log(storedEmail);
  });
  return (
    <div>
      {/* {value ? (
        <Home />
      ) : ( */}
      <button className="btn" onClick={handleClick}>
        <img className="goo" src={google} alt="" />
        SignIn with Google
      </button>
      {/* // )} */}
    </div>
  );
}
export default SignIn;
