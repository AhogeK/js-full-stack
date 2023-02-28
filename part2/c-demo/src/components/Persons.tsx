import React from "react";

interface PersonsProps {
  persons: Array<{ name: string, number: string }>
  searchName: string
}

const Persons = (props: PersonsProps) => {
  return (
    <ul>
      {props.persons.filter(person => person.name.toLowerCase().indexOf(props.searchName.toLowerCase()) != -1).map(person => (
        <li key={person.name}>
          <b>{person.name}</b> | <b>{person.number}</b>
        </li>
      ))}
    </ul>
  )
}

export default Persons
