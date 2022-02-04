import React from "react";

const Form = (props) => {
    return(
        <form onSubmit={props.onSubmit}>
            <div>
                Name: <input value={props.name} onChange={props.handleName} />
            </div>
            <div>
                Number: <input value={props.number} onChange={props.handleNumber} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}
export default Form;