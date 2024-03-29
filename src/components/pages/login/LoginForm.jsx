import React, { useState } from 'react'

export default function LoginForm() {
  //state (état, données)
  const [inputValue, setInputValue] = useState("");

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("")
  };
  const handleChange = (event) => {
    setInputValue(event.target.value)

  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prenom"
        required
      />
      <button>Accédez à votre espace</button>
    </form> 
  )
}
