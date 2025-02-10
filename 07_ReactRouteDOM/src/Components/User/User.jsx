import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div className='bg-amber-600 text-amber-100 text-3xl p-4 text-center'>User : {userId}</div>
  )
}

export default User