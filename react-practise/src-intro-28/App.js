
import "./App.css";

// function App() {
//     let text = "dynamically";
//     return (
//         <div className="App">
//             <h1>Going to display some text...{text}</h1>
//         </div>
//     );
// }


// function App() {
//     const getStuff = () => "Mila";

//     return (
//         <div>
//             <div className="ex-space">
//                 <h4 className="ex-title">Spot-check 1</h4>
//                 <div className="exercise" id="spotcheck-1">
//                     <h1>{getStuff()}</h1>
//                 </div>
//             </div>
//         </div>
//     );
// }


// function App() {
//     const personContainer = (name, email) => {
//         let greatName = `The Great ${name}`;

//         return (
//             <div className="person">
//                 <h4>{greatName}</h4>
//                 <p>
//                     Contact at: <a href={email}>email</a>
//                 </p>
//             </div>
//         );
//     };

//     return personContainer("Louisa", "l@elo.com");
// }



// function App() {
//     const getMorningGreeting = () => <div>Good morning</div>;
//     const getEveningGreeting = () => <div>Good evening</div>;;

//     let isMorning = new Date().getHours() < 12;

//     return (
//         <div>
//             <div className="ex-space">
//                 <h4 className="ex-title">Spot-check 2</h4>
//                 <div className="exercise" id="spotcheck-2">
//                     {isMorning ? getEveningGreeting() : getEveningGreeting()}
//                 </div>
//             </div>
//         </div>
//     );
// }


// function App() {
//     const getMorningGreeting = () => <div>Good morning</div>;
//     const getEveningGreeting = () => <div>Good evening</div>;;

//     return [
//       getMorningGreeting(),
//       getEveningGreeting(),
//       <p>Text</p>
//     ]
// }


//exercise1
// function App() {
//     const showCompany = (name, revenue) => <div id={name}>
//         {name} makes {revenue} every year
//     </div>;

//       let companies = [
//           { name: "Tesla", revenue: 140 },
//           { name: "Microsoft", revenue: 300 },
//           { name: "Google", revenue: 600 },
//       ];

//     return (
//         <div className="ex-space">
//             <h4 className="ex-title">Exercise 1</h4>
//             <div className="exercise" id="ex-1">
//                 {companies.map(c => showCompany(c.name, c.revenue))}
//             </div>
//         </div>
//     );
// }

function App() {
    const getClassName = (temperature) => {
      if (temperature < 15) {
      return 'freezing';
      } if (temperature > 15 && temperature < 30) {
        return 'fair';
      } else {
        return 'hell-scape';
      }
    };

    let t = 10;

    return (
        <div className="ex-space">
            <h4 className="ex-title">Exercise 2</h4>
            <div className="exercise" id="ex-2">
                <div id="weatherBox" className={getClassName(t)}></div>
            </div>
        </div>
    );
}

export default App;