import { useState } from 'react'

import { getApiEndpoint } from '../../config'

const DEFAULT_RECIPE_QUERY = ''
const DEFAULT_FETCHED_RECIPES = []
const DEFAULT_IS_LOADING = false
const FETCHED_RECIPES_FALLBACK = [
  {
    label: '',
    ingredients: [
      {
        text: '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
        weight: 640,
      },
    ]
  }
]

export default () => {
  const [recipeQuery, setRecipeQuery] = useState(DEFAULT_RECIPE_QUERY)
  const [fetchedRecipes, setFetchesRecipes] = useState(DEFAULT_FETCHED_RECIPES)
  const [isLoading, setIsLoading] = useState(DEFAULT_IS_LOADING)

  const handleRecipeQueryChange = e => setRecipeQuery(e.target.value)

  const fetchRecipes = () => {
    setIsLoading(true)

    fetch(getApiEndpoint(recipeQuery))
      .then(res => res.json())
      .then(res => {
        console.log(res.hits)
        setFetchesRecipes(res.hits.map(hit => hit.recipe))
      })
      .catch(() => setFetchesRecipes(FETCHED_RECIPES_FALLBACK))
      .finally(() => setIsLoading(false))
  }

  return {
    handleRecipeQueryChange,
    fetchRecipes,
    fetchedRecipes,
    isLoading,
  }
}
