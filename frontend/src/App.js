import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Barbers from "./screens/Barbers";
import Services from "./screens/Services";
import Booking from "./screens/Booking";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MyAppointmentsScreen from "./screens/MyAppointmentsScreen";
import BarberAppointmentsScreen from "./screens/BarberAppointmentsScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="text-center py-4">
          <Route path={["/home", "/"]} component={Home} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/services" component={Services} exact />
          <Route path="/barbers" component={Barbers} exact />
          <Route path="/booking" component={Booking} />
          <Route path="/myappointments" component={MyAppointmentsScreen} />
          <Route
            path="/barberappointments"
            component={BarberAppointmentsScreen}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
