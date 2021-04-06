import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Barbers from "./screens/Barbers";
import Services from "./screens/Services";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="text-center py-4">
          <Route path={["/home", "/"]} component={Home} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/services" component={Services} exact />
          <Route path="/barbers" component={Barbers} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
