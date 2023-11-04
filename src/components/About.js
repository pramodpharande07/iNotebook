import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'


const About = () => {
  //use contextapi
  const a = useContext(noteContext)
  
  //It calls the update function present in NoteState.js
  useEffect(()=>{
      a.update()
  }, [])
  
  return (
    <div>
      This is about He is in {a.state.name} and in {a.state.class}
    </div>
  )
}

export default About
