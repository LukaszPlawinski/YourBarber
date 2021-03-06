import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Barbers from './pages/Barbers';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container className="text-center py-4" >
        <Barbers/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
