import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    // data is an object, which is the convesion of "currency" to other currencies, the keys of the object are the currencies to which 
    // "currency" can be converted to and the values of the object are the conversion rates
    const [data, setData] = useState({}); 

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
        // logs each time the data changes i.e forever as the data is real-time and keeps changing 
        console.log(`Some amount of ${currency} converted to: ` ,data); 
    }, [data, currency]);
    return data;
}  

export default useCurrencyInfo;