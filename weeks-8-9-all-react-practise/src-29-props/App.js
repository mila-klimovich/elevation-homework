import Company from "./components/Company";
import "./App.css";
import Wardrobe from "./components/Wardrobe";
import Wardrobe2 from "./components/Wardrobe2";

function App() {
    let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 },
    ];

    const upperCase = name => name.toUpperCase();

    // function generateCompanyTags(companies) {
    //     let companyTags = []

    //     for (let c of companies) {
    //         companyTags.push(<Company name={c.name} revenue={c.revenue}/>)
    //     }
    //     return companyTags;
    // }

    return (
        <div className="app">
            {companies.map((c) => (
                <Company
                    name={upperCase(c.name)}
                    revenue={c.revenue}
                    key={c.name}
                />
            ))}
            <Wardrobe/>
            <Wardrobe2/>
            {/* {generateCompanyTags(companies)} */}
        </div>
    ); 
    
} 

export default App;