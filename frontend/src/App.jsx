import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Students from './pages/Eleves';



function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        
        {/* LE BANDEAU DE HAUT DE PAGE */}
        <header style={{ 
          display: 'flex',
          alignItems: 'center',
          padding: '10px 15px',
          borderBottom: '1px solid #e0e0e0', // La délimitation grise
          backgroundColor: '#f5f4fc',       // Un fond très légèrement gris
          height: '50px',                   // Hauteur fixe pour le bandeau
          boxSizing: 'border-box'
        }}>
          <h1 style={{ 
            fontSize: '20px', 
            margin: 0, 
            color: '#333',
            fontWeight: '600'
          }}>
            Cours Particuliers
          </h1>
        </header>

        {/* CONTENU DES PAGES */}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/eleves" element={<Students />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
