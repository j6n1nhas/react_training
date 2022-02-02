import React from "react";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return(
    <div>
      <Header course={course}/>
      <Content courses={[
        {'nome': part1, 'exercicios': exercises1, },
        {'nome': part2, 'exercicios': exercises2, },
        {'nome': part3, 'exercicios': exercises3, },
      ]}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

//Header trata de mostrar o nome do curso
const Header = (props) => (
  <h1>{props.course}</h1>
);

/*
//Content mostra as parts e o número de exercícios
const Content = (props) => {
  return(
    <div>
      {props.courses.map(curso => {
         return <p>{curso.nome}: {curso.exercicios}</p>
      })}
    </div>
  );
}
*/

//Como desafio foi proposto alterar o componente Content para renderizar componentes Part
const Content = (props) => {
  return(
    <div>
    {props.courses.map(curso => {
      return <Part curso={curso.nome} exercicios={curso.exercicios}/>
    })}
    </div>
  );
}

const Part = (props) => {
  const {curso, exercicios} = props;
  return(
    <p>{curso}: {exercicios}</p>
  );
}

//Total mostra o total de exercícios
const Total = (props) => (
    <p>Total de exercícios: {props.total}</p>
);

export default App;
