import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";


function App() {
    const [userInvestmentInput, setUserInvestmentInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });
    // const [investmentResults, setInvestmentResults] = useState([]);


    /**
     * @handleInputChange
     * Handle the value change of the Investment input fields.
     *
     * @params inputName, newValue
     */
    function handleInputChange(inputName, newValue) {
        setUserInvestmentInput((prevUserInvestmentInput) => {
            return {
                ...prevUserInvestmentInput,
                [inputName]: +newValue
            }
        });
        // console.log(event);
        // console.log(event.target.value);
        // onChange(event.target.name, event.target.value)
    }


    return (
        <>
            <Header title="Investment Calculator" />

            <UserInput userInput={userInvestmentInput} onChange={handleInputChange} />

            <ResultsTable investmentResults={userInvestmentInput} />
        </>
    );
}

export default App
