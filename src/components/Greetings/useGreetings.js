import { useState } from 'react'

const DEFAULT_GREETING = ''

const GREETINGS_TO_JARVIS_REGEXP = /^\w+, Jarvis/

export default () => {
  const [greetings, setGreeting] = useState(DEFAULT_GREETING)

  const handleGreetingsChange = e => setGreeting(e.target.value)

  const hasGreetingsToJarvis = () => GREETINGS_TO_JARVIS_REGEXP.test(greetings)

  return {
    greetings,
    hasGreetingsToJarvis,
    handleGreetingsChange,
  }
}
