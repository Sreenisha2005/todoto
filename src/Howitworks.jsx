import add from  './assets/icons/add.svg';
import flag from  './assets/icons/flag.svg';
import tick from  './assets/icons/tick.svg';
import "./App.css";
import React from 'react';

function Howitworks() {
    return (
        <section className="how-it-works">
            <div className="hiw-container">
                <h1 className="hiw-h1">How it works?</h1>
                <div className="ptrs-container">
                    <div className="ptr">
                        <img src={add} alt="add" />
                        <h3>Add your tasks in the Tasks page</h3>
                    </div>
                    <div className="ptr">
                        <img src={tick} alt="tick" />
                        <h3>Mark tasks as completed once done</h3>
                    </div>
                    <div className="ptr">
                        <img src={flag} alt="flag" />
                        <h3>Keep track of your progress easily</h3>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Howitworks;