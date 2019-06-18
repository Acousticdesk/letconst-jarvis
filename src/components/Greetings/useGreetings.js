import { useState } from 'react'

const DEFAULT_GREETING = ''

export default () => {
  const [greetings, setGreeting] = useState(DEFAULT_GREETING)

  const handleGreetingsChange = e => setGreeting(e.target.value)

  return {greetings, handleGreetingsChange}
}
