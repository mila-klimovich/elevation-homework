import React from "react";
import Contact from "./Contact";

export default function List({ contacts, display }) {
    return (
        <div>
            {contacts.map((c) => (
                <Contact name={c} key={c} display={display} />
            ))}
        </div>
    );
}