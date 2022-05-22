import React from 'react';
import './App.css';
import {useState} from 'react';
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    <div>

      <div className='FormContainer'>
        <form onSubmit={handleSubmit} className="Search" >
          <label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="enter pokemon name"/>
          </label>
        </form>
      </div>

      {pokemonData.map((data) => {
        return (
          <div>
            <div id="pokedex">
  <div id="left">
    <div id="logo"></div>
    <div id="bg_curve1_left"></div>
    <div id="bg_curve2_left"></div>
    <div id="curve1_left">
      <div id="buttonGlass">
        <div id="reflect"> </div>
      </div>
      <div id="miniButtonGlass1"></div>
      <div id="miniButtonGlass2"></div>
      <div id="miniButtonGlass3"></div>
    </div>
    <div id="curve2_left">
      <div id="junction">
        <div id="junction1"></div>
        <div id="junction2"></div>
      </div>
    </div>
    <div id="screen">
      <div id="topPicture">
        <div id="buttontopPicture1"></div>
        <div id="buttontopPicture2"></div>
      </div>
      <div id="picture">
      <img src={data.sprites["front_default"]} height="170"/>
      </div>
      <div id="buttonbottomPicture"></div>
      <div id="speakers">
        <div class="sp"></div>
        <div class="sp"></div>
        <div class="sp"></div>
        <div class="sp"></div>
      </div>
    </div>
    <div id="bigbluebutton"></div>
    <div id="barbutton1"></div>
    <div id="barbutton2"></div>
    <div id="cross">
      <div id="leftcross">
        <div id="leftT"></div>
      </div>
      <div id="topcross">
        <div id="upT"></div>
      </div>
      <div id="rightcross">
        <div id="rightT"></div>
      </div>
      <div id="midcross">
        <div id="midCircle"></div>
      </div>
      <div id="botcross">
        <div id="downT"></div>
      </div>
    </div>
  </div>
  <div id="right">
    <div id="stats">
      <strong>Name:</strong> {data.species.name}<br/>
      <strong>Type:</strong> 
        {data.types.map(types => {
          return types.type.name
          .split('   ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        })
        }<br/>
      <strong>Height:</strong>{Math.round(data.height * 3.9)}"<br/>
      <strong>Weight:</strong>{Math.round(data.weight / 4.3)} lbs<br/>
      <strong>Abilities:</strong>
        {data.abilities.map(ability => {
          return ability.ability.name
          .toLowerCase()
          .split('   ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        })
        }<br/>
      <strong>HP:</strong>{data.stats[0].base_stat}<br/>
      <strong>Attack:</strong>{data.stats[1].base_stat}<br/>
      <strong>Defense:</strong>{data.stats[2].base_stat}<br/>
      <strong>Special Attack:</strong>{data.stats[3].base_stat}<br/>
      <strong>Special Defense:</strong>{data.stats[4].base_stat}<br/>
      <strong>Speed:</strong>{data.stats[5].base_stat}<br/>
    </div>
    <div id="blueButtons1">
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
    </div>
    <div id="blueButtons2">
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
      <div class="blueButton"></div>
    </div>
    <div id="miniButtonGlass4"></div>
    <div id="miniButtonGlass5"></div>
    <div id="barbutton3"></div>
    <div id="barbutton4"></div>
    <div id="yellowBox1"></div>
    <div id="yellowBox2"></div>
    <div id="bg_curve1_right"></div>
    <div id="bg_curve2_right"></div>
    <div id="curve1_right"></div>
    <div id="curve2_right"></div>
  </div>
</div>
          </div>
        );
      })}

    </div>

    
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <label>
//           <input
//             type="text"
//             onChange={handleChange}
//             placeholder="enter pokemon name"
//           />
//         </label>
//       </form>
//       {/* <ul>{pokemonData}</ul> */}
//       {/* <p>{[pokemonData]}</p> */}
//       {pokemonData.map((data) => {
//         return (
//           <div className="container">
//             <img src={data.sprites["front_default"]} />
//             <div className="divTable">
//               <div className="divTableBody">
//                 <div className="divTableRow">
//                   <div className="divTableCell">Type</div>
//                   <div className="divTableCell">{pokemonType}</div>
//                 </div>
//                 <div className="divTableRow">
//                   <div className="divTableCell">Height</div>
//                   <div className="divTableCell">
//                     {" "}
//                     {Math.round(data.height * 3.9)}"
//                   </div>
//                 </div>
//                 <div className="divTableRow">
//                   <div className="divTableCell">Weight</div>
//                   <div className="divTableCell">
//                     {" "}
//                     {Math.round(data.weight / 4.3)} lbs
//                   </div>
//                 </div>
//                 <div className="divTableRow">
//                   <div className="divTableCell">Abilities</div>
//                   <div className="divTableCell">{data.abilities}</div>
//                 </div>
//                 <div className="divTableRow">
//                   <div className="divTableCell">Base Stats</div>
//                   <div className="divTableCell">{data.game_indices.length}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
   );
};

export default App;