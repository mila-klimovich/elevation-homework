import React from "react";

function Calendar (props) {
    return (
        <div>
            <h2>Calendar</h2>
            {props.reservations.map(r => {return <div key={r.name}>{r.name} has a reservation on {r.day} @ {r.time}</div>})}
        </div>
    )
}

export default Calendar;
