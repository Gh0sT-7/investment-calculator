import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";


function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '',
        duration: ''
    });
    // const [investmentResults, setInvestmentResults] = useState([]);
    const [durationTouched, setDurationTouched] = useState(false);

    const inputIsValid = userInput.duration >= 1;

    /**
     * @handleInputChange
     * Handle the value change of the Investment input fields.
     *
     * @params inputName, newValue
     */
    function handleInputChange(inputName, newValue) {
        setUserInput((prevUserInput) => {
            return {
                // Copy old values into new object to keep track of what currently changed.
                ...prevUserInput,
                [inputName]: +newValue
            }
        });
        // console.log(event);
        // console.log(event.target.value);
        // onChange(event.target.name, event.target.value)

        if (inputName === 'duration') {
            setDurationTouched(true);
        }
    }

    return (
        <>
            <Header title="Investment Calculator" />

            <UserInput userInput={userInput} onChange={handleInputChange} />

            {durationTouched && !inputIsValid && (
                <p className="center">Please enter a duration greater than zero.</p>
            )}
            {inputIsValid && <ResultsTable investmentResults={userInput} />}
        </>
    );
}

export default App
