import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      
      <Link to="/eleves" style={{ 
        position: 'fixed', // <-- On passe en fixed
        top: '7px',       // Ajuste pour que ça tombe pile dans ton bandeau gris
        right: '20px', 
        zIndex: 1000       // On le met très haut pour qu'il passe devant tout
      }}>
        <button style={{
          backgroundColor: '#b8bcfa',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
        Mes Élèves
        </button>
      </Link>
      
    </div>
  );
}

export default Dashboard;