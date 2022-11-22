const Total = ({exercises}) => {
  const sum = exercises.map(item => item.exercises).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return <b><p>total of {sum} exercises</p></b>
}

export default Total
