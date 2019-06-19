import React from 'react'
import useGreetingsContext from './useGreetingsContext'

export default () => {
  const {greetings, handleGreetingsChange} = useGreetingsContext()

  return (
    <div>
      {/*  */}
      <h3>Say "Hi, Jarvis!" or "Bueno, Jarvis!" to activate Jarvis</h3>
      -
      <input
        value={greetings}
        onChange={handleGreetingsChange}
        type="text"
        name="greetings"
      />
    </div>
  )
}
