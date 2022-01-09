// Lifting state
// http://localhost:3000/isolated/final/03.js

import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => onNameChange(event.target.value)} />
    </div>
  )
}

function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={event => onAnimalChange(event.target.value)} />
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

function App() {
  const [animal, setAnimal] = React.useState('')
  const [name, setName] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={name => setName(name)} />
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={animal => setAnimal(animal)}
      />
      <Display name={name} animal={animal} />
    </form>
  )
}

export default App
