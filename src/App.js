import React from 'react';
import './App.css';
import Footer from './component/Footer';
import FormRegister from './container/FormRegister';
// import Routes from './Routers';
// import FromLogin from './container/FormLogin';

function App() {
  return (
    <div className="App">
      <div className="App-content1"></div>
      <div className="App-content2">
      <FormRegister/>
      {/* <FromLogin /> */}
      {/* <Routes /> */}
      <Footer footerBold="Powered by" footerSupport="html5, CSS3, reactjs"/>
      </div>
      <div className="App-content3"></div>
    </div>
  );
}

export default App;
