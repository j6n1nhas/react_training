import React from "react";

const App = () => {
  const course = {
    nome: "Half Stack application development",
    parts: [
      {
        nome: "Fundamentals of React",
        exercises = 10,
      },
      {
        nome: "Using props to pass data",
        exercises = 7,
      },
      {
        nome: "State of a component",
        exercises = 14,
      },
    ],
  };
  return(
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
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
