import React, { useState, useEffect } from 'react'
import { data } from 'react-router-dom'


function GitHub() {
  const [data, setData] = useState([])
  useEffect(() => {
   fetch('https://api.github.com/users/hiteshchoudhary ')
   .then(reponse => reponse.json())
   .then(data => {
    console.log(data);
    setData(data)
   })
  }, [])
  
  return (
    <div className='bg-amber-500 p-4 text-3xl text-center'>GitHub followers : {data.followers}
    <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default GitHub