import React from 'react'

import useGreetingsContext from './Greetings/useGreetingsContext'

export default () => {
  const [greetings] = useGreetingsContext()

  return greetings && <p>- Good day, mr Stark! How can I help you?</p>

}
