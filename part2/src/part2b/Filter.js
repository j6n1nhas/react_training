import React from "react";

const Filter = (props) => {
    return(
        <div>
            <p>Filtrar por:
				<input defaultValue={''} onChange={props.onChange} />
			</p>
        </div>
    )
}
export default Filter;