import './App.css';
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <BrowserRouter>
      <PrimeReactProvider>
        <AppRouter />
      </PrimeReactProvider>
    </BrowserRouter>
  );
}

export default App;
