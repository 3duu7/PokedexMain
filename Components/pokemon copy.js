import React, { useState } from "react";
import getPokemon from "../Services/getPokemon";
import Attack from "./attacks";
import ReactDOM from 'react-dom';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  /*const [pokemonItems, setPokemonItems] = useState([]);*/

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //informacion pokemon
    getPokemon(pokemon).then((responsePokemon) => {
      if (!responsePokemon) return;

      setPokemonType(responsePokemon.types);
      setPokemonData([responsePokemon]);
      setPokemonMoves(responsePokemon.moves);
      setPokemonAbilities(responsePokemon.abilities);
      setPokemonStats(responsePokemon.stats[0].base_stat);
      setPokemonStats(responsePokemon.stats[1].base_stat);
      setPokemonStats(responsePokemon.stats[2].base_stat);
      setPokemonStats(responsePokemon.stats[3].base_stat);
      setPokemonStats(responsePokemon.stats[4].base_stat);
      setPokemonStats(responsePokemon.stats[5].base_stat);
      /*setPokemonItems(responsePokemon.items);*/

    });
  };

  function typesName(types) {
    const name = types.type.name;

    return <div>
      <div className={name}>{name}</div>
    </div>;
  }

  function weak(types) {

    const name = types.type.name
    const weakness = []

    switch (name) {
      case "steel": 
      case "water": 
        weakness.push("electric ","fighting ","ground " );
        break;
      
      case "steel":
        weakness.push("fire ","fighting ","ground ");
        break;

      case "water":
        weakness.push("electric ","grass ");
        break;

      case "bug":
        weakness.push("fire ","rock ","flying ");
        break;

      case "dragon":
        weakness.push("dragon ","fairy ","ice ");
        break;

      case "electric":
        weakness.push("ground ");
        break;
    
      case "ghost":
        weakness.push("ghost ","dark ");
        break;

      case "fire":
        weakness.push("water ","rock ","ground ");
        break;

      case "fairy":
        weakness.push("steel ","poison ");
        break;

      case "ice":
        weakness.push("steel ","fire ","fighting ","rock ");
        break;

      case "fighting":
        weakness.push("fairy ","psychic ","flying ");
        break;

      case "normal":
        weakness.push("fighting ");
        break;

      case "grass":
        weakness.push("bug ","fire ","ice ","poison ","flying ");
        break;

      case "psychic":
        weakness.push("dark ","bug ","ghost ");
        break;

      case "rock":
        weakness.push("steel ","water ","fighting ","grass ","ground ");
        break;

      case "dark":
        weakness.push("bug ","fairy ","fighting ");
        break;

      case "ground":
        weakness.push("water ","ice ","grass ");
        break;

      case "poison":
        weakness.push("psychic ","ground ");
        break;

      case "flying":
        weakness.push("electric ","ice ","rock ");
        break;

      //////////////////////////ACERO(ice,normal)
      
     

     
      case "steel": 
      case "water": 
        weakness.push("electric ","fighting ","ground " );
        break;
     
      case "steel":
      case "bug":
        weakness.push("fire  ");
        break;
/*
      case "steel":
      case "dragon":
        weakness.push(" ");
        break;

      case "steel":
      case "electric":
        weakness.push(" ");
        break;

      case "steel":
      case "ghost":
        weakness.push(" ");
        break;

      case "steel":
      case "fire":
        weakness.push(" ");
        break;

      case "steel":
      case "fairy":
        weakness.push(" ");
        break;

      case "steel":
      case "ice":
        weakness.push(" ");
        break;

      case "steel":
      case "fighting":
        weakness.push(" ");
        break;

      case "steel":
      case "normal":
        weakness.push(" ");
        break;

      case "steel":
      case "grass":
        weakness.push(" ");
        break;

      case "steel":
      case "psychic":
        weakness.push(" ");
        break;

      case "steel":
      case "rock":
        weakness.push(" ");
        break;

      case "steel":
      case "dark":
        weakness.push(" ");
        break;

      case "steel":
      case "ground":
        weakness.push(" ");
        break;

      case "steel":
      case "poison":
        weakness.push(" ");
        break;

      case "steel":
      case "flying":
        weakness.push(" ");
        break;

      /////////////////////////AGUA(fire)

      case "water":
      case "bug":
        weakness.push(" ");
        break;

      case "water":
      case "dragon":
        weakness.push(" ");
        break;

      case "water":
      case "electric":
        weakness.push(" ");
        break;

      case "water":
      case "ghost":
        weakness.push(" ");
        break;

      case "water":
      case "fire":
        weakness.push(" ");
        break;
      
      case "water":
      case "fairy":
        weakness.push(" ");
        break;

      case "water":
      case "ice":
        weakness.push(" ");
        break;

      case "water":
      case "fighting":
        weakness.push(" ");
        break;

      case "water":
      case "normal":
        weakness.push(" ");
        break;

      case "water":
      case "grass":
        weakness.push(" ");
        break;

      case "water":
      case "psychic":
        weakness.push(" ");
        break;

      case "water":
      case "rock":
        weakness.push(" ");
        break;

      case "water":
      case "dark":
        weakness.push(" ");
        break;

      case "water":
      case "ground":
        weakness.push(" ");
        break;

      case "water":
      case "poison":
        weakness.push(" ");
        break;

      case "water":
      case "flying":
        weakness.push(" ");
        break;

    //BICHO(dragonn,psychic,dark,hada,hielo,normal)

      case "bug":
      case "dragon":
        weakness.push(" ");
        break;
      
      case "bug":
      case "electric":
        weakness.push(" ");
        break;

      case "bug":
      case "ghost":
        weakness.push(" ");
        break;

      case "bug":
      case "fire":
        weakness.push(" ");
        break;

      case "bug":
      case "fairy":
        weakness.push(" ");
        break;
      
      case "bug":
      case "ice":
        weakness.push(" ");
        break;

      case "bug":
      case "fighting":
        weakness.push(" ");
        break;

      case "bug":
      case "normal":
        weakness.push(" ");
        break;
      
      case "bug":
      case "grass":
        weakness.push(" ");
        break;

      case "bug":
      case "psychic":
        weakness.push(" ");
        break;

      case "bug":
      case "rock":
        weakness.push(" ");
        break;

      case "bug":
      case "dark":
        weakness.push(" ");
        break;

      case "bug":
      case "ground":
        weakness.push(" ");
        break;

      case "bug":
      case "poison":
        weakness.push(" ");
        break;

      case "bug":
      case "flying":
        weakness.push(" ");
        break;

      ////////////////DRAGON(bicho,fairy,lucha,normal)

      case "dragon":
      case "electric":
        weakness.push("dragon" ,"fairy" ,"ice" ,"ground ");
        break;
  
      case "dragon":
      case "ghost":
        weakness.push(" ");
        break;
  
      case "dragon":
      case "fire":
        weakness.push(" ");
        break;
  
      case "dragon":
      case "fairy":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "ice":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "fighting":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "normal":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "grass":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "psychic":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "rock":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "dark":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "ground":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "poison":
        weakness.push(" ");
        break;
    
      case "dragon":
      case "flying":
        weakness.push(" ");
        break;
       
    //////////////ELECTRICO

      case "electric":
      case "ghost":
        weakness.push(" ");
        break;

      case "electric":
      case "fire":
        weakness.push(" ");
        break;

      case "electric":
      case "fairy":
        weakness.push(" ");
        break;

      case "electric":
      case "ice":
        weakness.push(" ");
        break;

      case "electric":
      case "fighting":
        weakness.push(" ");
        break;

      case "electric":
      case "normal":
        weakness.push(" ");
        break;

      case "electric":
      case "grass":
        weakness.push(" ");
        break;

      case "electric":
      case "psychic":
        weakness.push(" ");
        break;

      case "electric":
      case "rock":
        weakness.push(" ");
        break;

      case "electric":
      case "dark":
        weakness.push(" ");
        break;

      case "electric":
      case "ground":
        weakness.push(" ");
        break;

      case "electric":
      case "poison":
        weakness.push(" ");
        break;

      case "electric":
      case "flying":
        weakness.push(" ");
        break;

///////////////GHOST

    ///////////ELECTRICO

      case "ghost":
      case "fire":
        weakness.push(" ");
        break;

      case "ghost":
      case "fairy":
        weakness.push(" ");
        break;

      case "ghost":
      case "ice":
        weakness.push(" ");
        break;

      case "ghost":
      case "fighting":
        weakness.push(" ");
        break;

      case "ghost":
      case "normal":
        weakness.push(" ");
        break;

      case "ghost":
      case "grass":
        weakness.push(" ");
        break;

      case "ghost":
      case "psychic":
        weakness.push(" ");
        break;

      case "ghost":
      case "rock":
        weakness.push(" ");
        break;

      case "ghost":
      case "dark":
        weakness.push(" ");
        break;

      case "ghost":
      case "ground":
        weakness.push(" ");
        break;

      case "ghost":
      case "poison":
        weakness.push(" ");
        break;

      case "ghost":
      case "flying":
        weakness.push(" ");
        break;



*/


































    }





































    return (
      weakness.map((weak) => {
        return (
          <div className={weak}>{weak}</div>)
      }))

  }


  /* var x = 10;
   var y = 100;
   var e = 31;
   var i = 63;
   var b = 2;
 
   var z = x + ( y /y * [ (y * b) + i + e]) + y*/

  return (

    <div className="pokemonContainer">
      {/* Buscar pokemon */}
      <div className="pokemonForm">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="pokemon name"
            />
          </label>
        </form>
      </div>

      {/* Información pokemon */}
      <div className="pokemonInfoContainer" >
        {pokemonData.map((data) => {
          return (
            <>
              <img src={data.sprites["front_default"]} />

              {pokemonType.map(types => typesName(types))}
              {pokemonType.map(types => weak(types))}

              <div classname="stats">
                <div> HP {data.stats[0].base_stat} </div>
                <div> Atk {data.stats[1].base_stat} </div>
                <div> Def {data.stats[2].base_stat} </div>
                <div> SpA {data.stats[3].base_stat} </div>
                <div> SpD {data.stats[4].base_stat} </div>
                <div> Spe {data.stats[5].base_stat} </div>
              </div>
            </>
          );
        })}

        {pokemonAbilities.map((abilities) => {
          return <div className=""><select><option value={abilities.ability.name}>{abilities.ability.name}</option> </select></div>
        })}

        {/* Mostrar ataques */}
        <Attack moves={pokemonMoves} />
        <Attack moves={pokemonMoves} />
        <Attack moves={pokemonMoves} />
        <Attack moves={pokemonMoves} />
      </div>
    </div>

  );
};



export default Pokemon;
