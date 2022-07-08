import React from "react";

function Input(props) {

    return (
        <div>
            <form className="add-team">
                <input className="name" type="text" placeholder="New team"/>
                <button className='btn' type="submit">Add</button>
            </form>
        </div>
    );
}

export default Input;
