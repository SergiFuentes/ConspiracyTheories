import './App.css';
import api from "../api/cards";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";

function App ()
{
  const [cards, setCards] = useState([]);
  const retriveCards = () =>
  {
    const response = await api.get( "/cards" );
    return response.data;
  };

  const addCard = ( card ) =>
  {
    console.log( card );

    setCards([...cards, {id: uuid(), ...cards}])
  }

  useEffect( () =>
  { 
    const getAllCards = async () =>
    {
      const allCards = await retriveCards();
      if ( allCards ) setCards( allCards );
    }
    getAllCards();
  }, [] );


  return (
    <div className="App">

    </div>
  );
}

export default App;
