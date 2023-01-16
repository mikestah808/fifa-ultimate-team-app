import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchUser } from './features/sessions/sessionsSlice';
import Login from './authentication/Login';
// import TeamsContainer from './features/teams/TeamsContainer'

function HomePage() {
  // const dispatch = useDispatch();
  // let navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.user) 
  const [fact, setFact] = useState("Soccer is the most popular game in the world. In many countries it is known as 'football'")

  //create an array with a variable name of soccerFacts that will contain string elements of facts about soccer 
  const soccerFacts = ["Soccer is the most popular game in the world. In many countries it is known as football","In England, soccer was formed when several clubs formed the Football Association about 150 years ago", "Women started playing soccer around the same time as men did in England. However, originally men were the main players in the game. Women’s soccer started to become extremely popular in the 1990s", "In China, the first soccer balls were made from sewn clothing that was filled with rubble. In Europe during the Middle Ages, soccer balls were made from inflated pig bladders", "Today most of the balls are made from layers of synthetic leather while the bladders inside the ball are made from latex or butyl", "An international soccer game is 90 minutes long. The 90 minutes is divided in two 45 minute halves"]

  //create function that will spit out a random element from soccerFacts array 
  function randomFact(){
    // console.log(soccerFacts[Math.floor(Math.random()*soccerFacts.length)])
    setFact(soccerFacts[Math.floor(Math.random()*soccerFacts.length)])
  }


  // useEffect(() => {
  //   if(currentUser === {}){
  //     navigate("/login")
  //   } else {
  //     dispatch(fetchUser())
  //   }
  // }, [dispatch])



    if(currentUser.error !== "Not authorized" && currentUser !== true){
      return (
        <div>
          <h1>History of Football</h1>
          <p>Records trace the origins of the sport back more than 2,000 years ago to ancient China, Greece and Rome, where the 'ball' was made of rock or animal hide stuffed with hair. There have even been suggestions it dates even further back to old Mesoamerican cultures - but 'football' or 'soccer' as we know it today has its roots in 19th century England.

          From England, the idea of football spread to Europe and across the Atlantic. Two schoolteachers, August Hermann and Konrad Koch, introduced the game to Germany circa 1874. Immigrants, meanwhile, are thought to have brought soccer to the United States.</p>
          <br />
          <h1>Fun Facts</h1>
          <p>{fact}</p>
          <button onClick={randomFact}>Fact</button>
        </div>
      )
    } else {
      return (
        <Login />
      )
    }
}

export default HomePage