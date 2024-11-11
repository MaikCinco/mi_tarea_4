import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoContacto = { nombre, apellido, telefono };
    onAddContact(nuevoContacto);
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nuevo Contacto</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Contacto</button>
    </form>
  );
}

export default ContactForm;
