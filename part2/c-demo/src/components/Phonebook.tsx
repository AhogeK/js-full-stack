import React, {useState} from "react";
import Filter from "./Filter";
import './Phonebook.css'
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const Phonebook = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Jonah Shi',
      number: '123456789'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setNewName(event.currentTarget.value)
  }
  const handleNumberChange = (event: React.FormEvent<HTMLInputElement>) => {
    setNewNumber(event.currentTarget.value)
  }
  const handleSearchName = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchName(event.currentTarget.value)
  }

  const addPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const nameArr = persons.map(person => person.name)
    const numberArr = persons.map(person => person.number)
    if (!newName) {
      alert(`Name is empty`)
    } else if (nameArr.findIndex(name => name === newName) != -1) {
      alert(`Name ${newName} is already added to phonebook`)
    } else if (!newNumber) {
      alert(`Number is empty`)
    } else if (numberArr.findIndex(number => number === newNumber) != -1) {
      alert(`Number ${newNumber} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }
  }
  return (
    <>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName}/>
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}/>
      <h3>
        Numbers
      </h3>
      <Persons persons={persons} searchName={searchName}/>
    </>
  )
}

export default Phonebook
