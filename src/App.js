import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const API_URL = 'http://www.raydelto.org/agenda.php';

function App() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    obtenerContactos();
  }, []);

  const obtenerContactos = async () => {
    try {
      const respuesta = await fetch(API_URL);
      const data = await respuesta.json();
      setContactos(data);
    } catch (error) {
      console.error('Error al obtener contactos:', error);
    }
  };

  const agregarContacto = async (nuevoContacto) => {
    try {
      const respuesta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoContacto),
      });

      if (respuesta.ok) {
        obtenerContactos();
      } else {
        console.error('Error al agregar contacto:', respuesta.statusText);
      }
    } catch (error) {
      console.error('Error al agregar contacto:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Agenda de Contactos en React</h1>
      <ContactForm onAddContact={agregarContacto} />
      <ContactList contactos={contactos} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
