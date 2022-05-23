import React from 'react';
import './App.css';
import {useState} from 'react';
import axios from "axios";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [pokemon, setPokemon] = useState("froakie");
  const [pokemonData, setPokemonData] = useState({
    pokemon_id: "",
    name: "",
    img: "",
    height: "",
    weight: "",
    type: "",
    HP: "",
    Attack: "",
    Defense: "",
    SpecialAttack: "",
    SpecialDefense: "",
    Speed: "",
    Abilities: ""
  });

  const API_CALL = "https://pokeapi.co/api/v2/pokemon/" + searchText;
  function searchForPokemon(event) {
    axios.get(API_CALL).then(function (response) {
      setPokemonData({
        pokemon_name: searchText,
        name: response.data.species.name,
        img: response.data.sprites["front_default"],
        type: response.data.types.map(types => {
          return types.type.name
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        }),
        height: response.data.height,
        weight: response.data.weight,
        health: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        spatk: response.data.stats[3].base_stat,
        spdef: response.data.stats[4].base_stat,
        spd: response.data.stats[5].base_stat,
        ability: response.data.abilities.map(abilities => {
          return abilities.ability.name
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        }),
      });
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  // maybe useEffect to make api call on site load (?) will need to try
  const RAN_API_CALL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  function RanPokemonSearch() {
    const pokeArray = ["zapdos","entei","pikachu","rhydon","bellsprout","magikarp","machamp","metagross","honedge","furfrou","butterfree","salandit"]

    let pokemon = pokeArray[Math.floor(Math.random() * pokeArray.length)]

    axios.get(RAN_API_CALL).then(function (response) {
      setPokemonData({
        pokemon_name: pokemon,
        name: response.data.species.name,
        img: response.data.sprites["front_default"],
        type: response.data.types.map(types => {
          return types.type.name
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        }),
        height: response.data.height,
        weight: response.data.weight,
        health: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        spatk: response.data.stats[3].base_stat,
        spdef: response.data.stats[4].base_stat,
        spd: response.data.stats[5].base_stat,
        ability: response.data.abilities.map(abilities => {
          return abilities.ability.name
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        }),
      });
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  const RanPokemonCall = async () => {
    const pokeArray = ["zapdos","entei","pikachu","rhydon","bellsprout","magikarp","machamp","metagross","honedge","furfrou","butterfree","salandit"]

    let pokemon = pokeArray[Math.floor(Math.random() * pokeArray.length)]

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

  const [pokemonType, setPokemonType] = useState("");
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (
      <div className='pokedexContainer'>
        
          <label className='searchBar'>
            <input type="text" onChange={e => setSearchText(e.target.value)} placeholder="enter pokemon name"/>
            <button onClick={e => {
              searchForPokemon(e)
              onClick()
            }}>Search</button>
          </label>
          <div className="BPDex">
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
            <img src={pokemonData.img} height="170"/>
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
          <div>
            <p>Name: {pokemonData.name}</p>
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            <p>Type: {pokemonData.type}</p>
            <p>HP: {pokemonData.health}</p>
            <p>Attack: {pokemonData.atk}</p>
            <p>Defense: {pokemonData.def}</p>
            <p>SpecialAttack: {pokemonData.spatk}</p>
            <p>SpecialDefense: {pokemonData.spdef}</p>
            <p>Speed: {pokemonData.spd}</p>
            <p>Abilities: {pokemonData.ability}</p>
          </div>
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
      </div>
   );
}

export default App;