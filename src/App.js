import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Components/Header/Header.js";
import About from "./Components/About/About.js";
import Footer from "./Components/Footer/Footer.js";
import Collection from "./Components/Gallery/Collection";
import Contact from "./Components/ContactUs/Contact.js";
import InsideService from "./Components/Services/Services";
import ForPathOne from "./Components/forPathOne/ForPathOne";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'><ForPathOne/></Route>
          <Route path='/home'><ForPathOne/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/gallery"><Collection /></Route>
          <Route path="/services"><InsideService/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
