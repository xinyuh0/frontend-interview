function romanToInt(s: string): number {
    const symbolToNumMap: Map<string, number> = new Map();

    symbolToNumMap.set('I', 1);
    symbolToNumMap.set('V', 5);
    symbolToNumMap.set('X', 10);
    symbolToNumMap.set('L', 50);
    symbolToNumMap.set('C', 100);
    symbolToNumMap.set('D', 500);
    symbolToNumMap.set('M', 1000);

    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let currSymbol = s.charAt(i);
        let nextSymbol = s.charAt(i + 1);

        if (currSymbol === "I") {
            // @ts-ignore
            sum += ((nextSymbol === "V" || nextSymbol === "X") ? -symbolToNumMap.get(currSymbol) : symbolToNumMap.get(currSymbol));
            continue;
        }

        if (currSymbol === "X") {
            // @ts-ignore
            sum += ((nextSymbol === "L" || nextSymbol === "C") ? -symbolToNumMap.get(currSymbol) : symbolToNumMap.get(currSymbol));
            continue;
        }

        if (currSymbol === "C") {
            // @ts-ignore
            sum += ((nextSymbol === "D" || nextSymbol === "M") ? -symbolToNumMap.get(currSymbol) : symbolToNumMap.get(currSymbol));
            continue;
        }

        // @ts-ignore
        sum += symbolToNumMap.get(currSymbol);
    }

    // @ts-ignore
    sum += symbolToNumMap.get(s.charAt(s.length - 1));

    return sum;
};


console.log(romanToInt("MCMXCIV"));