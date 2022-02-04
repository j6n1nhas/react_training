import React, {useState} from "react";
import Person from "./part2b/Person";
import Filter from "./part2b/Filter";
import Form from "./part2b/Form";

const App = () => {
	/*
	const [persons, setPersons] = useState([
		{name: 'Arto Hellas'},
	]);
	*/

	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	]);

	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [searchStr, setSearchStr] = useState('');
	const [showAll, setShowAll] = useState(true);

	const addPerson = (event) => {
		event.preventDefault();
		let personExist = false;
		for(let p of persons)
		{
			if(p.name === newName)
			{
				personExist = true;
				break;
			}
		}
		if(personExist)
			alert(`${newName} já existe na agenda`);
		else
		{
			const pessoas = [...persons];
			const pessoa = {
				name: newName,
				number: newNumber,
				id: persons.reduce((p, c) => Math.max(p.id, c.id))+1,
			};
			setPersons(pessoas.concat(pessoa));
		}
		setNewName('');
		setNewNumber('');
	}

	const pepleToShow = showAll ? persons : persons.filter(
		person => {
			let str = searchStr.toLowerCase();
			return person.name.toLowerCase().match(str);
		}
	);

	const searchPerson = (event) => {
		setSearchStr(event.target.value);
		event.target.value !== '' ? setShowAll(false) : setShowAll(true);
	}

	const handleName = (event) => setNewName(event.target.value);
	const handleNumber = (event) => setNewNumber(event.target.value);

	return(
		<div>
			<h2>Phonebook</h2>
			<Filter onChange={searchPerson} />
			<Form name={newName} number={newNumber} handleName={handleName} handleNumber={handleNumber} onSubmit={addPerson} />
			<h2>Numbers</h2>
			<div>
				{pepleToShow.map(person =>
					<Person key={person.name} person={person} />
				)}
			</div>
		</div>
	)
}
export default App;
/*
import React, {useState} from 'react';
import Note from './part2b/Note';

const App = (props) => {
	const [notes, setNotes] = useState(props.notes);
	const [newNote, setNewNote] = useState('a new note...');
	const [showAll, setShowAll] = useState(true);

	const addNote = (event) => {
		event.preventDefault();
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			id: notes.length + 1,
		};
		setNotes(notes.concat(noteObject));
		setNewNote('');
	}

	const handleNoteChange = (event) => {
		console.log(event.target.value);
		setNewNote(event.target.value);
	}

	const notesToShow = showAll ? notes : notes.filter(note => note.important);

	return (
		<div>
			<h1>Notes</h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					Show {showAll ? 'important' : 'all'}
				</button>
			</div>
			<ul>
				{notesToShow.map(note =>
					<Note key={note.id} note={note} />
				)}
			</ul>
			<form onSubmit={addNote}>
				<input value={newNote} onChange={handleNoteChange} />
				<button type='submit'>Save</button>
			</form>
		</div>
	)
}
export default App;
*/

/*
import React from 'react';
import Course from './components/Course';

const App = () => {
  const courses = [
		{
			id: 1,
			name: 'Half Stack application development',
			parts: [
				{
					name: 'Fundamentals of React',
					exercises: 10,
					id: 1,
				},
				{
					name: 'Using props to pass data',
					exercises: 7,
					id: 2,
				},
				{
					name: 'State of a component',
					exercises: 14,
					id: 3,
				},
				{
					name: 'Redux',
					exercises: 11,
					id: 4,
				},
			],
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1,
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2,
				},
			],
		},
	];

	return(
		<div>
			{courses.map(course => 
				<Course key={course.id} course={course} />
			)}
		</div>
	)
}

export default App;
*/