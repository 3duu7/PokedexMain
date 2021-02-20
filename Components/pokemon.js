import React, { useState } from "react";
import getPokemon from "../Services/getPokemon";
import Attack from "./attacks";


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

    return <div className="typesName">
      <div className={name}>{name}</div> 
    </div>
    
  }

  function weak(types) {
    const pokemonTypes = types.map(type => type.type.name)
    const weakness = []
    const tipos = {

      steel: 0,
      water:0,
      bug: 0,
      dragon: 0,
      electric: 0,
      ghost: 0,
      fire: 0,
      fairy: 0,
      ice: 0,
      fighting: 0,
      normal: 0,
      grass: 0,
      psychic: 0,
      rock: 0,
      dark: 0,
      ground: 0,
      poison: 0,
      flying: 0
     
    }

    pokemonTypes.map(type => {
      switch (type) {
          case "steel":
            tipos.steel = tipos.steel - 2
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug - 2
            tipos.dragon = tipos.dragon - 2
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 2
            tipos.fairy = tipos.fairy - 2
            tipos.ice = tipos.ice - 2
            tipos.fighting = tipos.fighting + 2
            tipos.normal = tipos.normal - 2
            tipos.grass = tipos.grass - 2
            tipos.psychic = tipos.psychic - 2
            tipos.rock = tipos.rock - 2
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 2
            delete tipos.poison 
            tipos.flying = tipos.flying - 2
          break;

          case "water":
            tipos.steel = tipos.steel - 2
            tipos.water = tipos.water - 2
            tipos.bug = tipos.bug + 0
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 2
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire - 2
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice - 2
            tipos.fighting = tipos.fighting + 0
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 2
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 0
          break;

          case "bug":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug + 0
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 2
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting - 2
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass - 2
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 2
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground - 2
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 2
          break;

          case "dragon":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water - 2
            tipos.bug = tipos.bug + 0
            tipos.dragon = tipos.dragon + 2
            tipos.electric = tipos.electric - 2
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire - 2
            tipos.fairy = tipos.fairy + 2
            tipos.ice = tipos.ice + 2
            tipos.fighting = tipos.fighting + 0
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass - 2
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 0
          break;

          case "electric":
            tipos.steel = tipos.steel - 2
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug + 0
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric - 2
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting + 0
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 0
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 2
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying - 2
          break;

          case "ghost":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug - 2
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 2
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 0
            delete tipos.fighting 
            delete tipos.normal 
            tipos.grass = tipos.grass + 0
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 2
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison - 2
            tipos.flying = tipos.flying + 0    
          break;

          case "fire":
            tipos.steel = tipos.steel - 2
            tipos.water = tipos.water + 2
            tipos.bug = tipos.bug - 2
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire - 2
            tipos.fairy = tipos.fairy - 2
            tipos.ice = tipos.ice - 2
            tipos.fighting = tipos.fighting + 0
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass - 2
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 2
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 2
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 0  
          break;

          case "fairy":
            tipos.steel = tipos.steel + 2
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug - 2
            delete tipos.dragon
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting - 2
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 0
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark - 2
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison + 2
            tipos.flying = tipos.flying + 0 
          break;

          case "ice":
            tipos.steel = tipos.steel + 2
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug + 0
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 2
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice - 2
            tipos.fighting = tipos.fighting + 2
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 0
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 2
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 0
          break;

          case "fighting":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug - 2
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 2
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting + 0
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 0
            tipos.psychic = tipos.psychic + 2
            tipos.rock = tipos.rock - 2
            tipos.dark = tipos.dark - 2
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 2
          break;
          
          case "normal":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug + 0
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            delete tipos.ghost 
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting + 2
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 0
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 0
          break;

          case "grass":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water - 2
            tipos.bug = tipos.bug + 2
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric - 2
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 2
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 2
            tipos.fighting = tipos.fighting + 0
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass - 2
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground - 2
            tipos.poison = tipos.poison + 2
            tipos.flying = tipos.flying + 2
          break;

          case "psychic":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug + 2
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 2
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting - 2
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 0
            tipos.psychic = tipos.psychic - 2
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 2
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 0
          break;

          case "rock":
            tipos.steel = tipos.steel + 2
            tipos.water = tipos.water + 2
            tipos.bug = tipos.bug + 0
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire - 2
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting + 2
            tipos.normal = tipos.normal - 2
            tipos.grass = tipos.grass + 2
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 2
            tipos.poison = tipos.poison - 2
            tipos.flying = tipos.flying - 2
          break;

          case "dark":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug + 2
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost - 2
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 2
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting + 2
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 0
            delete tipos.psychic 
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark - 2
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 0
          break;

          case "ground":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 2
            tipos.bug = tipos.bug + 0
            tipos.dragon = tipos.dragon + 0
            delete tipos.electric 
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 2
            tipos.fighting = tipos.fighting + 0
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass + 2
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock - 2
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 0
            tipos.poison = tipos.poison - 2
            tipos.flying = tipos.flying + 0
          break;

          case "poison":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug - 2
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 0
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy - 2
            tipos.ice = tipos.ice + 0
            tipos.fighting = tipos.fighting - 2
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass - 2
            tipos.psychic = tipos.psychic + 2
            tipos.rock = tipos.rock + 0
            tipos.dark = tipos.dark + 0
            tipos.ground = tipos.ground + 2
            tipos.poison = tipos.poison - 2
            tipos.flying = tipos.flying + 0
          break;

          case "flying":
            tipos.steel = tipos.steel + 0
            tipos.water = tipos.water + 0
            tipos.bug = tipos.bug - 2
            tipos.dragon = tipos.dragon + 0
            tipos.electric = tipos.electric + 2
            tipos.ghost = tipos.ghost + 0
            tipos.fire = tipos.fire + 0
            tipos.fairy = tipos.fairy + 0
            tipos.ice = tipos.ice + 2
            tipos.fighting = tipos.fighting - 2
            tipos.normal = tipos.normal + 0
            tipos.grass = tipos.grass - 2
            tipos.psychic = tipos.psychic + 0
            tipos.rock = tipos.rock + 2
            tipos.dark = tipos.dark + 0
            delete tipos.ground 
            tipos.poison = tipos.poison + 0
            tipos.flying = tipos.flying + 0
          break;
      }
    })

      const tiposKeys = Object.keys(tipos)

      tiposKeys.map((tipo) => {
        if(tipos[tipo] === +2) {
          weakness.push({type: tipo, value: null})
        }
        if(tipos[tipo] === +4) {
          weakness.push({type: tipo, value: 'x4'})
        }
      })

    return (
      weakness.map((typeInfo) => {
        const {type, value} = typeInfo

        return (
        <div className="weaks">
          <div  className={type}>{type} {value}</div>
        </div>)
      }))
  }
  
  var hp = document.querySelector('.hp');
	if (hp) {
  		var inputhp = document.querySelector('.inputhp');
  			if (inputhp) {
   			 inputhp.innerHTML = hp.value;

   			 hp.addEventListener('input', function() {
     		 inputhp.innerHTML = hp.value;
    		}, 
		false);
 	 	}
     
	}

  var atk = document.querySelector('.atk');
	if (atk) {
  		var inputatk = document.querySelector('.inputatk');
  			if (inputatk) {
   			 inputatk.innerHTML = atk.value;

   			 atk.addEventListener('input', function() {
     		 inputatk.innerHTML = atk.value;
    		}, 
		false);
 	 	}
     
	}

  var def = document.querySelector('.def');
	if (def) {
  		var inputdef = document.querySelector('.inputdef');
  			if (inputdef) {
   			 inputdef.innerHTML = def.value;

   			 def.addEventListener('input', function() {
     		 inputdef.innerHTML = def.value;
    		}, 
		false);
 	 	}
     
	}

  var spa = document.querySelector('.spa');
	if (spa) {
  		var inputspa = document.querySelector('.inputspa');
  			if (inputspa) {
   			 inputspa.innerHTML = spa.value;

   			 spa.addEventListener('input', function() {
     		 inputspa.innerHTML = spa.value;
    		}, 
		false);
 	 	}
     
	}

  var spd = document.querySelector('.spd');
	if (spd) {
  		var inputspd = document.querySelector('.inputspd');
  			if (inputspd) {
   			 inputspd.innerHTML = spd.value;

   			 spd.addEventListener('input', function() {
     		 inputspd.innerHTML = spd.value;
    		}, 
		false);
 	 	}
     
	}

  var spe = document.querySelector('.spe');
	if (spe) {
  		var inputspe = document.querySelector('.inputspe');
  			if (inputspe) {
   			 inputspe.innerHTML = spe.value;

   			 spe.addEventListener('input', function() {
     		 inputspe.innerHTML = spe.value;
    		}, 
		false);
 	 	}
     
	}

 
  function myFunction() {
    var showHp = document.getElementById("Hp");
  
    if (showHp.style.display === "none") {
      showHp.style.display = "block";
    } else {
      showHp.style.display = "none";
    }
    
    
  }


  return (

    <div className="pokemonContainer">
     
      <div className="pokemonForm">
        <form onSubmit={handleSubmit}>
          <label>
            <input classNanme="searchPoke"type="text" onChange={handleChange} placeholder="pokemon name"/>
          </label>
        </form>
      </div>
      {/* Información pokemon */}
        {pokemonData.map((data) => {

          var sbHp100 = data.stats[0].base_stat;
          var hp100 = 10 + (100 /100 * [(sbHp100 * 2) + 31]) + 100;
          var sbAtk100 = data.stats[1].base_stat;
          var atk100 = 5 + (100 /100 * [(sbAtk100 * 2) + 31]);
          var sbDef100 = data.stats[2].base_stat;
          var def100 = 5 + (100 /100 * [(sbDef100 * 2) + 31]);
          var sbSpA100 = data.stats[3].base_stat;
          var spa100 = 5 + (100 /100 * [(sbSpA100 * 2) + 31]);
          var sbSpD100 = data.stats[4].base_stat;
          var spd100 = 5 + (100 /100 * [(sbSpD100 * 2) + 31]);
          var sbSpe100 = data.stats[5].base_stat;
          var spe100 = 5 + (100 /100 * [(sbSpe100 * 2) + 31]);
        // var nature = hp100 * 1.1;
        // var natureHp = nature.toFixed();

        





        
          return (
            <>
            <div>
              <img src={data.sprites["front_default"]} />
              </div>
            <div>
              {pokemonType.map(types => typesName(types))}
            
              {weak(pokemonType)}
              
              </div>
              <button onclick={"myFunction"}>Clickeame</button>
              <div id="Hp">ewew</div>
              <div classname="stats">
                <div> HP  {data.stats[0].base_stat} 
                  <input class="hp" type="range" min={hp100} max={hp100 + 63} /><div class="inputhp"></div></div>
                <div> Atk {data.stats[1].base_stat} 
                  <input class="atk"  type="range" min={atk100} max={atk100 + 63} /><div class="inputatk"></div></div>
                <div> Def {data.stats[2].base_stat} 
                  <input class="def"  type="range" min={def100} max={def100 + 63} /><div class="inputdef"></div></div>
                <div> SpA {data.stats[3].base_stat} 
                  <input class="spa"  type="range" min={spa100} max={spa100 + 63} /><div class="inputspa"></div></div>
                <div> SpD {data.stats[4].base_stat} 
                  <input class="spd"  type="range" min={spd100} max={spd100 + 63} /><div class="inputspd"></div></div>
                <div> Spe {data.stats[5].base_stat} <input class="spe"  type="range" min={spe100} max={spe100 + 63} /><div class="inputspe"></div></div>
                
              </div>
            </>
          );
        })}

        {pokemonAbilities.map((abilities) => {
          return <select><option value={abilities.ability.name}>{abilities.ability.name}</option> </select>
        })}

        {/* Mostrar ataques */}
        <div className="moves">
          <Attack moves={pokemonMoves} />
          <Attack moves={pokemonMoves} />
          <Attack moves={pokemonMoves} />
          <Attack moves={pokemonMoves} />
        </div>
    </div>

  );
};



export default Pokemon;
