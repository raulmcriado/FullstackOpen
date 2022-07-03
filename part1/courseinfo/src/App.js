

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  
  return(
    <div>
      <p>{props.part1} {props.numEx1} </p>
      <p>{props.part2} {props.numEx2} </p>
      <p>{props.part2} {props.numEx3} </p>
    </div>
  )
}

const Total = (props) => {
  
  return (
    <p>
      Number of exercises {props.numEx1+props.numEx2+props.numEx3}
    </p>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} numEx1={exercises1}
        part2={part2} numEx2={exercises2}
        part3={part3} numEx3={exercises3}
      />
      <Total numEx1={exercises1} numEx2={exercises2} numEx3={exercises3} />
    </div>
  )
}

export default App