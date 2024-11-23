import { useState } from 'react';
import Person from './components/Person';
import AjoutpersoForm from './components/AjoutpersoForm';

export default function App() 
{
  const [persons, setPersons] = useState(
   [ { id: 1, nom: "Amine" },
    { id: 2, nom: "Mohamed" },
    { id: 3, nom: "Sirine" }]);

    const handleAdd = (newperson) => {
      //façon 1 pour l'ajout
      //1. copie du state
     // const personsCopy = [...persons];
     
      //2. manipulation sur la copie du state
     // personsCopy.push(newperson);

     //3. modifier le state avec le setter
      //setPersons(personsCopy);
  
      //façon 2 
     setPersons( // Remplace l'état par un nouveau tableau
      [  
        ...persons, //copie de tous les anciens éléments
        newperson
        //{ id: persons.length+1, nom: nom } //  un nouvel élément (objet) à la fin 
      ]
    );

      
    }
    
    function handleSupp(id)
    {
     //façon 1 pour faire la suppression 
     //1. copie du state
    //const personsCopy = [...persons];
     //2. manipuler mon state
    //const personCopy = personsCopy.filter((p) => p.id !== id);
     //mettre à jour le state
    // setPersons(personCopy);

    //façon 2 pour la suppression
      setPersons(curr => curr.filter( per => per.id !==id));
    }

   
  return (
    <div>
      <AjoutpersoForm handleAdd={handleAdd}/>
       <h1>Liste de personnes</h1>
      <ul>
      { persons.map(pers => {
        return (  
            <Person
              nom={pers.nom}
              id={pers.id}
              key={pers.id}
              onClick={handleSupp}
          />);
       })
      }
      </ul>
      
    </div>
  );
}
