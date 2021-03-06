import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container className="text-center py-4" >
        <h1>Your Barber</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
