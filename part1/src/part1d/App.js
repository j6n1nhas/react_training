import React, {useState} from 'react';
import './App.css';

/*
The application must display the total number of collected feedback for each category
*/

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);
    const [avgClicks, setAvgClicks] = useState(0);
    const [positiveClicks, setPositiveClicks] = useState(0);
    const [selected, setSelected] = useState(0);

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ];

    const [points, setPoints] = useState(() => new Array(anecdotes.length).fill(0));
    const [mostVoted, setMostVoted] = useState(0);

    const goodClicks = () => {
        setGood(good + 1);
        setTotalClicks(totalClicks + 1);
        setAvgClicks(
            (good+((-1)*bad))/totalClicks
        );
        setPositiveClicks(
            (good*100)/totalClicks
        );
    }
    const neutralClicks = () => {
        setNeutral(neutral + 1);
        setTotalClicks(totalClicks + 1);
        setAvgClicks(
            (good+((-1)*bad))/totalClicks
        );
        setPositiveClicks(
            (good*100)/totalClicks
        );
    }
    const badClicks = () => {
        setBad(bad + 1);
        setTotalClicks(totalClicks + 1);
        setAvgClicks(
            (good+((-1)*bad))/totalClicks
        );
        setPositiveClicks(
            (good*100)/totalClicks
        );
    }

    const changeSelected = () => {
        setSelected(Math.floor(Math.random()*anecdotes.length))
    }

    const votar =  () => {
        const pontos = [...points];
        pontos[selected] += 1;
        setPoints(pontos);
        const maximo = (pontos) => {
            const max_points = Math.max(...pontos);
            const index = pontos.findIndex(p => p === max_points);
            return index;
        }
        setMostVoted(maximo(points));
    }

    return(
        <div className='app'>
            <h1>Give feedback</h1>
            <div className='botoes'>
                <Button handleClick={goodClicks} text="Good" />
                <Button handleClick={neutralClicks} text="Neutral" />
                <Button handleClick={badClicks} text="Bad" />
            </div>
            <h2>Feedback</h2>
            <div className='feedback'>
                <FeedBack text={'Good'} result={good} />
                <FeedBack text={'Neutral'} result={neutral} />
                <FeedBack text={'Bad'} result={bad} />
            </div>
            <h2>Estatística</h2>
            {totalClicks>0 ? 
            <div className='estatistica'>
                <table>
                    <tbody>
                        <Statistic text="Total de votos" value={totalClicks} />
                        <Statistic text="Média" value={avgClicks} />
                        <Statistic text="Votos positivos" value={positiveClicks} />
                    </tbody>
                </table>
            </div>
            : 'No feedback given'}
            <div className='frases'>
                <Button text="Muda a frase" handleClick={changeSelected} />
                <p>{anecdotes[selected]}</p>
                <p>Votos: {points[selected]}</p>
                <Button text={"Votar"} handleClick={votar} />
                <h3>A frase com mais votos:</h3>
                <FeedBack text={["Tem", points[mostVoted], "votos"].join(' ')} result={anecdotes[mostVoted]} />
            </div>
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const FeedBack = ({text, result}) => (
    <p>{text}: {result}</p>
);

const Statistic = ({text, value}) => (
    <tr><td>{text}</td><td>{value}{text === 'Votos positivos' ? '%' : ''}</td></tr>
)

export default App;