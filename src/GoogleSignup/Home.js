// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1>home page</h1>
//     </div>
//   );
// };
// export default
import React from "react";

function Home() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1>home page!!!</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
}
export default Home;
