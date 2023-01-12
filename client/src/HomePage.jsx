import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from './features/sessions/sessionsSlice';
// import TeamsContainer from './features/teams/TeamsContainer'

function HomePage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.sessions.user)

  console.log(currentUser)


  useEffect(() => {
    if(currentUser === {}){
      navigate("/login")
    } else {
      dispatch(fetchUser())
    }
  }, [dispatch])



    // const currentUser = useSelector((state) => state.users.user)

    // console.log("current user", currentUser)

  return (
    <div>
      HomePage
    {/* <TeamsContainer /> */}
    </div>
  )
}

export default HomePage