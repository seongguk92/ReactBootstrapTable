import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContactUs from "./Component/ContactComponent/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ContactUs} />  
      </Router>      
    </div>
  )
}

export default App;
