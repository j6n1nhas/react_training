import React, {useState} from 'react';

const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const handleLeftClicks = () => {
        setAll(allClicks.concat('L'));
        setLeft(left + 1);
    }

    const handleRightClicks = () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1);
    }

    return (
        <div>
            <h1>Greetings</h1>
            <Display counter={left} text="Esquerda" />
            <Display counter={right} text="Direita" />
            <Button handleClick={handleLeftClicks} text="Esquerda" />
            <br/>
            <Button handleClick={handleRightClicks} text="Direita" />
            <br/>
            <History allClicks={allClicks} />
        </div>
    );
}

const History = (props) => {
    if(props.allClicks.length === 0)
        return(
            <div>
                The app is used by pressing the buttons
            </div>
        );
    return(
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    );
}

const Display = ({counter, text}) => (
    <div>{text}: {counter}</div>
);

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

export default App;