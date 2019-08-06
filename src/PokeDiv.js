import React, {useState, useEffect} from 'react';

function PokeDiv() {
  const [image, setImage] = useState("")
  const [name, setName] = useState("")

  async function fetchPkmn() {
    var rand = Math.floor(Math.random() * 792)
    var res = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`)
    let response = await res.json()
    console.log(response)
    setImage(response.sprites.front_default)
    setName(response.name)
  }

  useEffect(() => {
    fetchPkmn()
  }, [])

  return(
    <div>
      <h2>{name}</h2>
      <img src={`${image}`} alt=""/>
      <br/>
      <button onClick={fetchPkmn}>Change Pokémon</button>
    </div>
  ) 
}

export default PokeDiv