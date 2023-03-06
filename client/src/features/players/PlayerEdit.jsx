import React, { useState } from "react";
import CountryDropDown from "../countries/CountryDropDown";
import { useSelector } from 'react-redux'
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../countries/countriesSlice";
import { useEffect } from "react";
import { updatePlayer } from "../teams/teamsSlice";

function PlayerEdit({ player }) {
  //useDispatch hook from react 
  let dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.entities)
  const [selectedCountry, setSelectedCountry] = useState({})
  const { id, name, position, age, rating, club, pace, dribbling, shooting, defending, passing, physical, image_url, price, team_id } = player


  //component state for playerData
  const [editName, setEditName] = useState(name)
  const [editAge, setEditAge] = useState(age)
  const [editImage, setEditImage] = useState(image_url)
  const [editPosition, setEditPosition] = useState(position)
  const [editRating, setEditRating] = useState(rating)
  const [editClub, setEditClub] = useState(club)
  const [editPrice, setEditPrice] = useState(price)
  const [editPace, setEditPace] = useState(pace)
  const [editDribbling, setEditDribbling] = useState(dribbling)
  const [editShooting, setEditShooting] = useState(shooting)
  const [editDefending, setEditDefending] = useState(defending)
  const [editPassing, setEditPassing] = useState(passing)
  const [editPhysical, setEditPhysical] = useState(physical)

  // useEfffect function to fetch countries on each page refresh 
  useEffect(() => {
    dispatch(fetchCountries())
  },[dispatch])


  function handleCountryChange(event){ 
    const findCountry = countries.find((country) => country.id === event.target.value)
    setSelectedCountry(findCountry)
  };


  function handleEditSubmit(event){

    const playerData = {
    id: id,
    name: editName,
    age: editAge,
    image_url: editImage,
    position: editPosition,
    rating: editRating,
    club: editClub,
    price: editPrice,
    pace: editPace,
    dribbling: editDribbling,
    shooting: editShooting,
    defending: editDefending,
    passing: editPassing,
    physical: editPhysical,
    team_id: team_id,
    country_id: selectedCountry.id
    }
    
    event.preventDefault();
    dispatch(updatePlayer(playerData))

    setEditName("")
    setEditAge("")
    setEditImage("")
    setEditPosition("")
    setEditRating(0)
    setEditClub("")
    setEditPrice(0)
    setEditPace(0)
    setEditDribbling(0)
    setEditShooting(0)
    setEditDefending(0)
    setEditPassing(0)
    setEditPhysical(0)
  }


  return (
    <>
    <form className="form" onSubmit={handleEditSubmit}>
      <div class="title">Edit Player</div>
      <CountryDropDown handleCountryChange={handleCountryChange} countries={countries} selectedCountry={selectedCountry}/>
      <label>Name
      <input name="name" onChange={(event) => setEditName(event.target.value)} value={editName}/>
      </label>
      <br />
      <label>Age
      <input name="age" type="number" onChange={(event) => setEditAge(event.target.value)} value={editAge}/>
      </label>
      <br />
      <label>Image
      <input name="image_url" onChange={(event) => setEditImage(event.target.value)} value={editImage}/>
      </label>
      <br />
      <label>Position
      <input name="position" onChange={(event) => setEditPosition(event.target.value)} value={editPosition}/>
      </label>
      <br />
      <label>Rating
      <input name="rating" type="number" onChange={(event) => setEditRating(event.target.value)} value={editRating}/>
      </label>
      <br />
      <label>Club
      <input name="club" onChange={(event) => setEditClub(event.target.value)} value={editClub}/>
      </label>
      <br />
      <label>Price
      <input name="price" type="number" onChange={(event) => setEditPrice(event.target.value)} value={editPrice}/>
      </label>
      <br />
      <label>Pace
      <input name="pace" type="number" onChange={(event) => setEditPace(event.target.value)} value={editPace}/>
      </label>
      <br />
      <label>Dribbling
      <input name="dribbling" type="number" onChange={(event) => setEditDribbling(event.target.value)} value={editDribbling}/>
      </label>
      <br />
      <label>Shooting
      <input name="shooting" type="number" onChange={(event) => setEditShooting(event.target.value)} value={editShooting}/>
      </label>
      <br />
      <label>Defending
      <input name="defending" type="number"  onChange={(event) => setEditDefending(event.target.value)} value={editDefending}/>
      </label>
      <label>Passing
      <input name="passing" type="number" onChange={(event) => setEditPassing(event.target.value)} value={editPassing}/>
      </label>
      <br />
      <label>Physical
      <input name="physical" type="number" onChange={(event) => setEditPhysical(event.target.value)} value={editPhysical}/>
      </label>
      <br />
      <Button type="submit" sx={{ color: 'white' }}>edit player</Button>
    </form>
    </>
  )
}

export default PlayerEdit;