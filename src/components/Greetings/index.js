import React from 'react'
import useGreetingsContext from './useGreetingsContext'

export default () => {
  const [greetings, setGreeting] = useGreetingsContext()
  const handleGreetingChange = e => setGreeting(e.target.value)

  return (
    <div>
      -
      <input
        value={greetings}
        onChange={handleGreetingChange}
        type="text"
        name="greetings"
      />
      <button type="button">Say</button>
    </div>
  )
}
