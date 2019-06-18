import React from 'react'
import useGreetingsContext from './useGreetingsContext'

export default () => {
  const {greetings, handleGreetingsChange} = useGreetingsContext()

  return (
    <div>
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
