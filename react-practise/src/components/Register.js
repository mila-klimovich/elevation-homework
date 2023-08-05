import React from "react";

const Register = ({reservations}) => {

    return (
        <div>
            <h2>You cant reserve during this time:</h2>
            {reservations.map(r => { return <div key={r.name}>{r.day} @ {r.time}</div>})}
        </div>
    )
}

export default Register;