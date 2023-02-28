import React from "react";

interface FilterProps {
  searchName: string
  handleSearchName: (event: React.FormEvent<HTMLInputElement>) => void
}

const Filter = (props: FilterProps) => {
  return (
    <div>
      <span>filter shown with</span> <input value={props.searchName} onChange={props.handleSearchName}/>
    </div>
  )
}

export default Filter
