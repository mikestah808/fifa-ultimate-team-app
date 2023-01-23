import React, { useState } from "react";
import CountryDropDown from "../countries/CountryDropDown";
import { useSelector } from 'react-redux'
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createPlayer } from "./playersSlice";

function PlayerInput({ teamId }) {
  //useDispatch hook from react 
  let dispatch = useDispatch();
  //useSelector hook to get countries state
  const countries = useSelector((state) => state.countries.entities)
  const [selectedCountry, setSelectedCountry] = useState({})

  //component state for playerData
  const [name, setName] = useState("")
  const [age, setAge] = useState(null)
  const [image, setImage] = useState("")
  const [position, setPosition] = useState("")
  const [rating, setRating] = useState(null)
  const [club, setClub] = useState("")
  const [price, setPrice] = useState(null)
  const [pace, setPace] = useState(null)
  const [dribbling, setDribbling] = useState(null)
  const [shooting, setShooting] = useState(null)
  const [defending, setDefending] = useState(null)
  const [passing, setPassing] = useState(null)
  const [physical, setPhysical] = useState(null)

 
  // const [player, setPlayer] = useState({
  //   name: "",
  //   age: null,
  //   image_url: "",
  //   position: "",
  //   rating: null,
  //   club: "",
  //   price: null,
  //   pace: null,
  //   dribbling: null,
  //   shooting: null,
  //   defending: null,
  //   passing: null,
  //   physical: null,
  //   country_id: 1,
  //   team_id: teamId
  // })

  function handleCountryChange(event){ 
    const findCountry = countries.find((country) => country.id === event.target.value)
    setSelectedCountry(findCountry)
  };

  console.log("selected country",selectedCountry.id)

  // function handleChange(e) {
  //   setPlayer({...player,
  //     [e.target.name] : e.target.value
  //   })
  // }


  function handleSubmit(event){

    const playerData = {
    name: name,
    age: age,
    image_url: image,
    position: position,
    rating: rating,
    club: club,
    price: price,
    pace: pace,
    dribbling: dribbling,
    shooting: shooting,
    defending: defending,
    passing: passing,
    physical: physical,
    team_id: teamId,
    country_id: selectedCountry.id
    }
    // debugger;
    event.preventDefault();
    dispatch(createPlayer(playerData))
  }


  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <div class="title">Add Player</div>
      <CountryDropDown handleCountryChange={handleCountryChange} countries={countries} selectedCountry={selectedCountry}/>
      <label>Name
      <input name="name" onChange={(event) => setName(event.target.value)} value={name}/>
      </label>
      <br />
      <label>Age
      <input name="age" onChange={(event) => setAge(event.target.value)} value={age}/>
      </label>
      <br />
      <label>Image
      <input name="image_url" onChange={(event) => setImage(event.target.value)} value={image}/>
      </label>
      <br />
      <label>Position
      <input name="position" onChange={(event) => setPosition(event.target.value)} value={position}/>
      </label>
      <br />
      <label>Rating
      <input name="rating" onChange={(event) => setRating(event.target.value)} value={rating}/>
      </label>
      <br />
      <label>Club
      <input name="club" onChange={(event) => setClub(event.target.value)} value={club}/>
      </label>
      <br />
      <label>Price
      <input name="price" onChange={(event) => setPrice(event.target.value)} value={price}/>
      </label>
      <br />
      <label>Pace
      <input name="pace" onChange={(event) => setPace(event.target.value)} value={pace}/>
      </label>
      <br />
      <label>Dribbling
      <input name="dribbling" onChange={(event) => setDribbling(event.target.value)} value={dribbling}/>
      </label>
      <br />
      <label>Shooting
      <input name="shooting" onChange={(event) => setShooting(event.target.value)} value={shooting}/>
      </label>
      <br />
      <label>Defending
      <input name="defending" onChange={(event) => setDefending(event.target.value)} value={defending}/>
      </label>
      <label>Passing
      <input name="passing" onChange={(event) => setPassing(event.target.value)} value={passing}/>
      </label>
      <br />
      <label>Physical
      <input name="physical" onChange={(event) => setPhysical(event.target.value)} value={physical}/>
      </label>
      <br />
      <Button type="submit">add player</Button>
    </form>
    </>
  )
}

export default PlayerInput;