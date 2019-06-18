import React from 'react'
import useRecipeContext from './RecipeSearch/useRecipeContext'

export default () => {
  const {isLoading, fetchedRecipes} = useRecipeContext()

  return isLoading ? 'Loading...' : (
    <>
      {fetchedRecipes.length ? <h3>Here you go, sir!</h3> : null}
      <ul>{fetchedRecipes.map(recipe => (
        <li key={recipe.label}>
          {recipe.label}
          :
          {' '}
          {recipe.ingredients.map(ingredient => <p style={{ opacity: 0.3 }} key={ingredient.text}>{ingredient.text}</p>)}
        </li>
      ))}</ul>
    </>
  )
}
