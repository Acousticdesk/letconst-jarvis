import { useState } from 'react'

const DEFAULT_GREETING = ''

export default () => {
  const [greetings, setGreeting] = useState(DEFAULT_GREETING)

  return [greetings, setGreeting]
}
