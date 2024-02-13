import { LANGUAGE_BY_LOCALE } from "./locales";


/**
 * @calculateInvestmentResults
 * Calculate the investment results from the following inputs:
 * on the chosen input locale.
 * 
 * initialInvestment: The initial investment amount
 * annualInvestment: The amount invested every year
 * expectedReturn: The expected (annual) rate of return
 * duration: The investment duration (time frame) 
 *
 * @params initialInvestment, annualInvestment, expectedReturn, duration
 */
export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const annualData = [];
    // let investmentValue = initialInvestment;
    let investmentValue = parseFloat(initialInvestment); // Parse the initial investment as a float

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i + 1, // year identifier
            interest: interestEarnedInYear, // the amount of interest earned in this year
            valueEndOfYear: investmentValue, // investment value at end of year
            annualInvestment: annualInvestment, // investment added in this year
        });
    }

  return annualData;
}


/**
 * @getCurrencyForLocale
 * Grabs the takes the supplied locale and pulls out the currency code based
 * on the chosen input locale. 
 *
 * @params locale
 */
function getCurrencyForLocale(locale) {
    // Check if the locale exists in the LANGUAGE_BY_LOCALE object
    if (locale in LANGUAGE_BY_LOCALE) {
        return LANGUAGE_BY_LOCALE[locale].currency_code;
    }

    // If the exact locale is not found, try with just the language code
    const languageCode = locale.split('-')[0];
    if (languageCode in LANGUAGE_BY_LOCALE) {
        return LANGUAGE_BY_LOCALE[languageCode].currency_code;
    }

    // Default to GBP if no matching currency is found
    return alert('Not a valid locale.');
};


/**
 * @formatter
 * Formats the investment results to a more readable format, this object offers
 * a "format()" method that can be used to format the output.
 *
 * @usage see below:
 */

const locale = 'en-GB'; // Define the locale you want to use from LANGUAGE_BY_LOCALE
const currencyCode = getCurrencyForLocale(locale); // Get the currency code for the specified locale

export const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});


/* 
    Initial idea, expanded on above.

    // The browser-provided Intl API is used to prepare a formatter object
    // This object offers a "format()" method that can be used to format numbers as currency
    // Example Usage: formatter.format(1000) => yields "$1,000"
    export const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
*/