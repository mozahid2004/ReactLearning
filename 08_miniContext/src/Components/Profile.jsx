import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
// import User from '../../../07_ReactRouteDOM/src/Components/User/User'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div className="">please login</div>

  return (
   <div className="">welCome {user.username}</div>
  )
}

export default Profile