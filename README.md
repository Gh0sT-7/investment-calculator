# Investment Calculator 📈

- 📘 A small investment calculator to help produce some quick numbers to help with asset analysis.

# Usage
```shell
$ npm install
$ npm run dev
```

## How it works? 🚀
- 1) Add your initial starting capital in the **Initial Investment** field.
- 2) Add the amount you'll continually invest in the **Annual Investment** field.
- 3) Average out the assumed return in **Expected Return**.
- 4) Finally, dertermine the length of time you will hold this investment with the **Duration**.

This will then show you the the value of your investment each year, the interest it attracted based on the **Expected Return** and the total intrest from the range of each previous year. This also includes the amount invested at the end of each year taking into account your initial investment.

🎯 **Note: this is for making very rough analysis and will still require further due dilligence on the asset or security you're interested in.


### 🛠️ **Optional**

If you wish to see the the generated investment in a different currency you can change this by setting a different locale in `util/investment.js`. By default this is set to 'en-GBP', however, a list of alternatives can be found in `util/locales.js`.