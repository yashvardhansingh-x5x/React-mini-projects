import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.result === "success") {
                    setData(res.rates);
                    console.log("Rates:", res.rates);
                } else {
                    console.error("API Error:", res);
                }
            })
            .catch((err) => console.error("Fetch Error:", err));

    }, [currency]);

    return data;
}

export default useCurrencyInfo;