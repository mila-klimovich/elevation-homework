import React, { useState } from "react";

const Hudini = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(show == false ? true : false);
    }

    return (
        <div className="hudini">
            {show == false ? <p>Now you dont see me</p> : <p>Now you see me</p>}
            <button onClick={toggleShow}>Change state!</button>
        </div>
    );
}

export default Hudini;