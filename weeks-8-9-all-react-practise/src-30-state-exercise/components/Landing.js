import React from "react";

function Landing({user, store}) {
    return <div>Welcome, {user}. The hottest item is {store[2].item} for ${store[2].price}</div>;
}

export default Landing;