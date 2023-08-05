import React, { useState } from "react";
import Company from "./Company";

function Example() {
    const pageState = useState(1);
    const pageNumber = pageState[0];
    const setPageNumber = pageState[1];

    let companiesData = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ];

    let [companies, setCompanies] = useState(companiesData);

    const addPage = () => setPageNumber(pageNumber + 1);

    return (
        <div>
            <p>You are on page number {pageNumber}</p>
            <button onClick={addPage}>Next page</button>
            <div>{companies.map(c => <Company name={c.name} revenue={c.revenue}/>)}</div>
        </div>
    );
}

export default Example;