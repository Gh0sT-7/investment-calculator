import { useState } from 'react';
import './UserInput.scss';

export default function UserInput({ userInput, onChange, onSubmit }) {
    function handleSubmit(event) {
        event.preventDefault();
        onSubmit();
    };

    return (
        <div id="scopedUserInput">
            <form id="user-input" onSubmit={handleSubmit}>
                <div className="input-group">
                    <div>
                        <label>Initial Investment</label>
                        <input
                            type="number"
                            name="initialInvestment"
                            value={userInput.initialInvestment}
                            onChange={(event) => 
                                onChange('initialInvestment', event.target.value)
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Annual Investment</label>
                        <input
                            type="number"
                            name="annualInvestment"
                            value={userInput.annualInvestment}
                            onChange={(event) =>
                                onChange('annualInvestment', event.target.value)
                            }
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <div>
                        <label>Expected Return</label>
                        <input
                            type="number"
                            name="expectedReturn"
                            value={userInput.expectedReturn}
                            onChange={(event) =>
                                onChange('expectedReturn', event.target.value)
                            }
                            required
                        />
                    </div>
                
                    <div>
                        <label>Duration</label>
                        <input
                            type="number"
                            name="duration"
                            value={userInput.duration}
                            onChange={(event) =>
                                onChange('duration', event.target.value)
                            }
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}