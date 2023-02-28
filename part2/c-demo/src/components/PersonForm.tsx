import React from "react";

interface PersonFormProps {
  addPerson: (event: React.FormEvent<HTMLFormElement>) => void
  newName: string
  newNumber: string
  handleNameChange: (event: React.FormEvent<HTMLInputElement>) => void
  handleNumberChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const PersonForm = (props: PersonFormProps) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        <div>
          <div className="label">name:</div>
          <input value={props.newName} onChange={props.handleNameChange}/></div>
        <div>
          <div className="label">number:</div>
          <input value={props.newNumber} onChange={props.handleNumberChange}/></div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
