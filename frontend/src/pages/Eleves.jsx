import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Assure-toi que le nom du fichier et du composant est bien celui-là
import remplirEleves from '../components/remplirEleves'; 

function Students() {
    const [eleves, setEleves] = useState([]);
    // --- IL MANQUAIT CETTE LIGNE ---
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); 

    const getEleves = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/students/all');
            setEleves(res.data);
        } catch (err) {
            console.error("Erreur chargement élèves", err);
        }
    };

    // --- IL MANQUAIT CETTE FONCTION ---
    const handleStudentAdded = () => {
        getEleves(); // On relance la recherche pour voir le nouvel élève
    };

    useEffect(() => { getEleves(); }, []);

    return (
        <div style={{ padding: '20px' }}>
            
            {/* 1. Bouton Dashboard */}
            <div style={{ position: 'relative' }}>
                <Link to="/" style={{ 
                    position: 'fixed', 
                    top: '7px', 
                    right: '20px', 
                    zIndex: 1000 
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
                        Dashboard
                    </button>
                </Link>
            </div>

            {/* 2. Le bouton rond "+" */}
            <button
                onClick={() => setIsDrawerOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#646cff',
                    color: 'white',
                    fontSize: '2.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 1000
                }}
            >
                +
            </button>

            {/* 3. Liste des élèves */}
            <div style={{ marginTop: '20px' }}>
                <h2 style={{ marginBottom: '20px' }}>Mes Élèves</h2>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '20px'
                }}>
                    {eleves.map(el => (
                        <div key={el._id} className="eleve-card">
                            <h3 style={{ margin: '0 0 10px 0', color: '#646cff' }}>
                                {el.prenom} {el.nom}
                            </h3>
                            <p><strong>Classe :</strong> {el.classe}</p>
                            <p><strong>📞 Tel :</strong> {el.numeroTelephone}</p>
                            <p><strong>📧 Email :</strong> {el.email || 'Non renseigné'}</p>
                            <p><strong>👨‍👩‍👧 Tel Parent :</strong> {el.telParent}</p>
                            
                            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                                <button style={{ backgroundColor: '#ffbd59', fontSize: '0.8rem' }}>Modifier</button>
                                <button style={{ backgroundColor: '#ff5c5c', fontSize: '0.8rem' }}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Le panneau latéral (le Drawer) */}
            {/* Attention : utilise le nom d'import (RemplirEleves) avec une MAJUSCULE */}
            <remplirEleves 
                isOpen={isDrawerOpen} 
                onClose={() => setIsDrawerOpen(false)} 
                onStudentAdded={handleStudentAdded}
            />
        </div>
    );
}

export default Students;