import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from './Footer';
import Banner from './Banner';
import Attribution from "./Attribution";

import "../scss/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Banner />
      <Footer />
      <Attribution />
      </div>
  );
}

export default App;
