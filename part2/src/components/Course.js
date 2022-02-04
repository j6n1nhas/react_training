import React from 'react';

const Course = ({course}) => {
	const total = course.parts.reduce((s, p) => s.exercises + p.exercises);
	console.log(total);
	return(
		<div>
		<h1>{course.name}</h1>
		<ul>
			{course.parts.map(part =>
				<li key={part.id}>{part.name} {part.exercises}</li>
			)}
		</ul>
		<p>Total de exercícios: {total}</p>
		</div>
	);
}

export default Course;