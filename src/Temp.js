import React, {useState, useEffect} from 'react';

function PokeDiv2() {
  async function reqPkmn(filter) {
    
    var url = type ? `https://pokeapi.co/api/v2/pokemon/${rand}` : `https://pokeapi.co/api/v2/pokemon/${rand}`
    
    
    var rand = Math.floor(Math.random() * 792)
    var res = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`)
    let response = await res.json()
    console.log(response)
    setImage(response.sprites.front_default)
    setName(response.name)
  }

  
  return(
    <div>
    </div>
  ) 
}

export default PokeDiv2