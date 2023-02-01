import React, { useState } from "react";
import CountryDropDown from "../countries/CountryDropDown";
import { useSelector } from 'react-redux'
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createPlayer } from "./playersSlice";
import { fetchCountries } from "../countries/countriesSlice";
import { useEffect } from "react";
import { playerAddedToTeam } from "../teams/teamsSlice";

function PlayerInput({ teamId }) {
  //useDispatch hook from react 
  let dispatch = useDispatch();
  //useSelector hook to get countries state
  const countries = useSelector((state) => state.countries.entities)
  const [selectedCountry, setSelectedCountry] = useState({})

  //component state for playerData
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [image, setImage] = useState("")
  const [position, setPosition] = useState("")
  const [rating, setRating] = useState(0)
  const [club, setClub] = useState("")
  const [price, setPrice] = useState(0)
  const [pace, setPace] = useState(0)
  const [dribbling, setDribbling] = useState(0)
  const [shooting, setShooting] = useState(0)
  const [defending, setDefending] = useState(0)
  const [passing, setPassing] = useState(0)
  const [physical, setPhysical] = useState(0)

  // useEfffect function to fetch countries on each page refresh 
  useEffect(() => {
    dispatch(fetchCountries())
  },[dispatch])


  function handleCountryChange(event){ 
    const findCountry = countries.find((country) => country.id === event.target.value)
    setSelectedCountry(findCountry)
  };



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
   
    event.preventDefault();
    dispatch(createPlayer(playerData))
    // the player object that was just added to state!!!
    dispatch(playerAddedToTeam(playerData))

    // setName("")
    // setAge("")
    // setImage("")
    // setPosition("")
    // setRating(0)
    // setClub("")
    // setPrice(0)
    // setPace(0)
    // setDribbling(0)
    // setShooting(0)
    // setDefending(0)
    // setPassing(0)
    // setPhysical(0)

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
      <input name="age" type="number" onChange={(event) => setAge(event.target.value)} value={age}/>
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
      <input name="rating" type="number" onChange={(event) => setRating(event.target.value)} value={rating}/>
      </label>
      <br />
      <label>Club
      <input name="club" onChange={(event) => setClub(event.target.value)} value={club}/>
      </label>
      <br />
      <label>Price
      <input name="price" type="number" onChange={(event) => setPrice(event.target.value)} value={price}/>
      </label>
      <br />
      <label>Pace
      <input name="pace" type="number" onChange={(event) => setPace(event.target.value)} value={pace}/>
      </label>
      <br />
      <label>Dribbling
      <input name="dribbling" type="number" onChange={(event) => setDribbling(event.target.value)} value={dribbling}/>
      </label>
      <br />
      <label>Shooting
      <input name="shooting" type="number" onChange={(event) => setShooting(event.target.value)} value={shooting}/>
      </label>
      <br />
      <label>Defending
      <input name="defending" type="number"  onChange={(event) => setDefending(event.target.value)} value={defending}/>
      </label>
      <label>Passing
      <input name="passing" type="number" onChange={(event) => setPassing(event.target.value)} value={passing}/>
      </label>
      <br />
      <label>Physical
      <input name="physical" type="number" onChange={(event) => setPhysical(event.target.value)} value={physical}/>
      </label>
      <br />
      <Button type="submit">add player</Button>
    </form>
    </>
  )
}

export default PlayerInput;