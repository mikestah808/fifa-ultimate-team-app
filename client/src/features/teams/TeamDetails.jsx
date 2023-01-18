import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


function TeamDetails() {
  // Get the teamId param from the URL.
  const { id } = useParams();
  const usersTeams = useSelector((state) => state.teams.entities) 

  const [selectedTeam, setSelectedTeam] = useState({
    players: []
  })


//figure out how to display the specific team objects players 
//how do we do this???
//



 useEffect(() => {
    //debugger;
    const findTeam = usersTeams.find(team => team.id === parseInt(id))
    if (findTeam){
      setSelectedTeam(findTeam)
    }
  }, [usersTeams])

  console.log("selected team", selectedTeam)


  return (
    <div>
        <h1>TEAM DETAILS</h1>
    </div>
      )
}

export default TeamDetails