import Part from "./Part";

const Content = (props) => {
  console.log(props)
  const parts = props.parts.map((object, index) => {
    const values = Object.values(object);
    return <Part key={index} part={values[0]} exercise={values[1]}/>
  })
  return <div>{parts}</div>
}

export default Content
