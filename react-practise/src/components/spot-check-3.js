import React from "react";
import { useState } from "react";
import Calendar from "./Calendar";
import Register from "./Register";

const SpotCheck3 = () => {
    const [reservations, setReservations] = useState([
        { day: "Monday", time: 2000, name: "Earl" },
        { day: "Monday", time: 1845, name: "Ella" },
        { day: "Tuesday", time: 1930, name: "Linda" },
        { day: "Wednesday", time: 2015, name: "Anni" }
    ]);

    return (
        <div className="ex-space">
        <h4 className="ex-title">Spotcheck 5</h4>
        <div className="exercise" id="spotcheck-5">
          <div>
            <Calendar reservations={reservations} />
            <Register reservations={reservations} />
        </div>  
        </div>
        
         </div>
    )
}

export default SpotCheck3;