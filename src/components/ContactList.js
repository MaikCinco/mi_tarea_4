import React from 'react';

function ContactList({ contactos }) {
  return (
    <div>
      <h2>Lista de Contactos</h2>
      {contactos.length > 0 ? (
        <ul>
          {contactos.map((contacto, index) => (
            <li key={index}>
              {contacto.nombre} {contacto.apellido} - {contacto.telefono}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay contactos disponibles.</p>
      )}
    </div>
  );
}

export default ContactList;
