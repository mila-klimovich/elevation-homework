import SubCompany from "./SubCompany";

function Company(props) {

    return (
        <div>
            <SubCompany name={props.name} />
        </div>
    );
}

export default Company;