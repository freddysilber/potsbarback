import React from "react"
import './About.scss'
import axios from 'axios'

const About: () => JSX.Element = () => {

  const getUsers: () => void = () => {
    axios.get('/api/users/getUsers')
      .then(res => console.log(res))
      .catch(err =>
        console.error(err)
      )
  }

  const newUser: () => void = () => {
    axios.post('/api/users/newUser')
      .then(res => console.log(res))
      .catch(err =>
        console.error(err)
      )
  }


  return (
    <>
      <div>This is the About Component</div>

      <button onClick={getUsers}>Get Users</button>
      <button onClick={newUser}>Create dummy user</button>
    </>
  )
}

export default About