import React, { useState } from 'react'

const DEFAULT_GREETING = ''

export default () => {
  const [greetings, setGreeting] = useState(DEFAULT_GREETING)

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
