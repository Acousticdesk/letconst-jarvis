import { useState } from 'react'

import { getApiEndpoint } from '../../config'

const DEFAULT_RECIPE_QUERY = ''

export default () => {
  const [recipeQuery, setRecipeQuery] = useState(DEFAULT_RECIPE_QUERY)

  const handleRecipeQueryChange = e => setRecipeQuery(e.target.value)

  const fetchRecipes = () => getApiEndpoint(recipeQuery)

  return {handleRecipeQueryChange}
}
