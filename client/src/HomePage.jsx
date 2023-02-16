import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Login from './authentication/Login';
import { fetchTeams } from './features/teams/teamsSlice';


function HomePage() {
  
  const currentUser = useSelector((state) => state.users) 
  const dispatch = useDispatch();
  const {user, loggedIn} = currentUser 
  const [fact, setFact] = useState("Soccer is the most popular game in the world. In many countries it is known as 'football'")
  //create an array with a variable name of soccerFacts that will contain string elements of facts about soccer 
  const soccerFacts = ["Soccer is the most popular game in the world. In many countries it is known as football","In England, soccer was formed when several clubs formed the Football Association about 150 years ago", "Women started playing soccer around the same time as men did in England. However, originally men were the main players in the game. Women’s soccer started to become extremely popular in the 1990s", "In China, the first soccer balls were made from sewn clothing that was filled with rubble. In Europe during the Middle Ages, soccer balls were made from inflated pig bladders", "Today most of the balls are made from layers of synthetic leather while the bladders inside the ball are made from latex or butyl", "An international soccer game is 90 minutes long. The 90 minutes is divided in two 45 minute halves"]


  useEffect(() =>{
    dispatch(fetchTeams())
  }, [user])

  //create function that will spit out a random element from soccerFacts array 
  function randomFact(){
    setFact(soccerFacts[Math.floor(Math.random()*soccerFacts.length)])
  }

    if(loggedIn){
      return (
        <div className='homepage'>
          <h1>History of Football</h1>
          <h4>More than 240 million people around the world play soccer regularly according to the Federation Internationale de Football Association (FIFA). The game has evolved from the sport of kicking a rudimentary animal-hide ball around into the World Cup sport it is today.

Records trace the history of soccer back more than 2,000 years ago to ancient China. Greece, Rome, and parts of Central America also claim to have started the sport; but it was England that transitioned soccer, or what the British and many other people around the world call “football,” into the game we know today. The English are credited with recording the first uniform rules for the sport, including forbidding tripping opponents and touching the ball with hands.

As the sport developed, more rules were implemented and more historical landmarks were set. For example, the penalty kick was introduced in 1891. FIFA became a member of the International Football Association Board of Great Britain in 1913. Red and yellow cards were introduced during the 1970 World Cup finals. More recent major changes include goalkeepers being banned from handling deliberate back passes in 1992 and tackles from behind becoming red-card penalties in 1998.

Some of the top players throughout history include Pele (Edson Arantes Do Nascimento) from Brazil, who scored six goals in the 1958 World Cup and helped Brazil claim its first title; Lev Yashin from Russia, who claimed to have saved more than 150 penalty shots during his outstanding goal-tending career; and Marco Van Basten from Holland, who won several very prestigious soccer awards during one year alone. There are many debates over who the greatest soccer players are of all time; but players like Zinedine Zidane, Diego Maradona, Michel Platini, Lionel Messi, and Roberto Baggio make almost every list.</h4>
          <br />
          {/* <Button onClick={randomFact}>Fact</Button> */}
          <button onClick={randomFact}>Click Me!</button>
          <h1>Fun Facts</h1>
          <h4>{fact}</h4>
        </div>
      )
    } else {
      return (
        <Login />
      )
    }
}

export default HomePage