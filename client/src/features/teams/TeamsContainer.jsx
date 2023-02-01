import React, { useEffect } from "react";
import TeamInput from "./TeamInput";
// import Teams from "./Teams";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "./teamsSlice"
import { useNavigate } from "react-router-dom";

import Team from "./Team";

function TeamsContainer() {
  // const dispatch = useDispatch();
  const usersTeams = useSelector((state) => state.teams.entities) 
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.users) 
  const {user, loggedIn} = currentUser 


  // useEffect(() => {
  //   // debugger;
  //   dispatch(fetchTeams());
  // }, [dispatch])

  // const renderTeams = usersTeams.map((team) => {
  //   return <Team key={team.id} team={team} />
  // })


  // return (
  //   <div>
  //     <TeamInput/>
  //     {renderTeams}
  //     {/* <Teams teams={usersTeams}/> */}
  //   </div>
  // );

  if(loggedIn){

    const renderTeams = usersTeams.map((team) => {
      return <Team key={team.id} team={team} />
    })

    return (
      <div>
        <TeamInput/>
        {renderTeams}
        {/* <Teams teams={usersTeams}/> */}
      </div>
    )
  } else {
    return (
      // <Login />
      navigate("/")
    )
  }



}

export default TeamsContainer;