
import "./App.css";

// function App() {
//     let text = "dynamically";
//     return (
//         <div className="App">
//             <h1>Going to display some text...{text}</h1>
//         </div>
//     );
// }

// export function Sum() {
//     let num1 = 5;
//     let num2 = 2;

//     return <div>The sum is {num1 + num2}</div>;
// }

// function AboutUs() {
//     return <p>This is an example of an about us page~</p>;
// }


// function Nav() {
//     return (
//         <div id="nav">
//             <span>Home</span>
//             <span>About</span>
//         </div>
//     );
// }

// function LandingPage() {
//     return <h1>Welcome!</h1>;
// }

// function App() {
//     let isUserLoggedIn = localStorage.getItem("loggedIn");
//     let componentToDisplay = isUserLoggedIn ? <LandingPage /> : <AboutUs />;
//     // to change this we can just copy paste this directly in your browser's console: localStorage["loggedIn"] = true

//     return (
//         <div className="app">
//             <Nav />
//             {/* <div>Welcome!</div> */}
//             {/* <LandingPage/> */}
//             {componentToDisplay}
//         </div>
//     );
// }


function SignUp() {
    return <div>Sign up here</div>
}

function Blurb() {
    return <div>This is Blurb</div>
}

function About() {
    return (<>
    <p>This is an example of an about us page~</p>
    <SignUp/>
    <Blurb/>
    </>
    )
}

function NavBar() {
    return (
        <div id="nav">
            <span>Home</span>
            <span>About</span>
        </div>
    );
}

function LandingPage() {
    return <h1>Welcome!</h1>;
}

function App() {
    return (
      <div className="app">
        <NavBar />
        <About />
        <LandingPage />
      </div>
    )
}

export default App;