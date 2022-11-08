const Total = (props) => {
  let sum = 0;
  props.exercises.forEach(part => sum += part.exercises)
  return <p>Number of exercises {sum}</p>
}

export default Total
