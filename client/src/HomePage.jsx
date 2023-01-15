import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchUser } from './features/sessions/sessionsSlice';
import Login from './authentication/Login';
// import TeamsContainer from './features/teams/TeamsContainer'

function HomePage() {
  // const dispatch = useDispatch();
  // let navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.user) 

  console.log(currentUser)


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
          HomePage
        {/* <TeamsContainer /> */}
        </div>
      )
    } else {
      return (
        <Login />
      )
    }
}

export default HomePage