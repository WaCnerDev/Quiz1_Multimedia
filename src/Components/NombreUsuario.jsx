import React from 'react'
import { useState } from 'react';

export default function NombreUsuario() {
  const [name, setName] = useState('No definido');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
  };

  return (
    <div className='containerForm'>
        <form onSubmit={handleSubmit}>
            <h2>Su nombre es: {name}</h2>
        <input
          type="text"
          placeholder="Digite su nombre"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  )
}
