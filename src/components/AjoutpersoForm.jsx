import React from "react";
import { useState } from "react";

export default function AjoutpersoForm({ handleAdd }) {
  // state
  const [nouveauPerson, setNouveauPerson] = useState("");

  //comportements

  function handleSubmit(event) {
    event.preventDefault(); //empêcher la page de se refraichir :empêche le navigateur d'exécuter son action par défaut lorsque le formulaire est soumis.
    const id = nouveauPerson.length + 1;
    const nom = nouveauPerson;
    const personAajouter = { id, nom };
    handleAdd(personAajouter);
    setNouveauPerson(""); //réinitialiser l'input
  }

  function handleChange(event) {
    setNouveauPerson(event.target.value);
  }

  return (
    <div>
      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <input
          value={nouveauPerson}
          type="text"
          placeholder="Ajouter un nom..."
          onChange={handleChange}
        />
        <button>Ajouter personne</button>
      </form>
    </div>
  );
}
