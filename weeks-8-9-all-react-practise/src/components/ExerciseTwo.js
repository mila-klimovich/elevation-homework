import React, { useState, useEffect } from "react";

export default function ExerciseTwo() {
    const [posts, setPosts] = useState([]);
    const [isSingleColumn, setIsSingleColumn] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                const firstTenPosts = data.slice(0, 10);
                setPosts(firstTenPosts);
            });

        // Add a resize event listener to handle layout change
        const handleResize = () => {
            setIsSingleColumn(window.innerWidth <= 800); // Adjust the threshold as needed
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check for layout

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <h1>Top Posts</h1>
            <div
                className={`post-container${
                    isSingleColumn ? " single-column" : ""
                }`}
            >
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
