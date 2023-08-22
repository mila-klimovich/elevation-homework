import React from "react";
import { useState } from "react";

const SpotCheck5 = () => {
    const [likes, setLikes] = useState(0)
    const increaseLike = () => {
      setLikes(likes+1);
    }
    return (
      <div className="like-counter">
        <div>{likes}</div>
        <button onClick={increaseLike}>Like! 👍</button>
      </div>
    );
};

export default SpotCheck5;
