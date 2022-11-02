const Total = (props) => {
  let sum = 0;
  props.exercises.forEach(i => sum += i)
  return <p>Number of exercises {sum}</p>
}

export default Total
