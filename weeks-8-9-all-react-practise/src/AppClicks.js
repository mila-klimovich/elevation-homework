import { useState } from "react";
import ClickReminder from "./components/ClickReminder";

function App() {
    const [shouldRemove, setShouldRemove] = useState(false);

    const clickHandler = () => {
        setShouldRemove(true);
    };

    return (
        <div>
            <button onClick={clickHandler}>Remove</button>
            {shouldRemove ? null : <ClickReminder />}
        </div>
    );
}

export default App;
