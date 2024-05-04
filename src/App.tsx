import React from "react";
import logo from "./logo.svg";
import { First_Screen, Second_Screen, Third_Screen } from "./Screens";
import { Header, Footer, Chat } from "./Components";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <First_Screen />
        <Second_Screen />
        <Third_Screen />
      <Footer />
        {/* <Chat /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
