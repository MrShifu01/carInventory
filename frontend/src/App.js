import { Container } from 'react-bootstrap';
import Header from './components/Header';
import './index.css';
import { Outlet } from 'react-router-dom';

// Main App which houses the header and brings in the Outlet from react router dom
function App() {

  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
        <Outlet/>
      </Container>
    </main>
    
    </>
  )
}

export default App;
