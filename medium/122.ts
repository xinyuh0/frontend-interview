let max: number = 0;

function maxProfit_1(prices: number[]): number {
    // Solution 1: DFS

    // for everyday, there are 5 situations:
    // 1. hold one stock, continue to hold
    // 2. hold one stock, decide to sell
    // 3. doesn't hold, buy a stock and hold it
    // 4. doesn't hold, buy a stock and sell it
    // 5. doesn't hold, decide not to buy

    max = 0;

    let maxPrices: number[] = [];
    for (let i = prices.length - 1; i >= 0; i--) {
        if (maxPrices.length == 0) {
            maxPrices.push(prices[i]);
        } else {
            if (prices[i] > maxPrices[maxPrices.length - 1]) {
                maxPrices.push(prices[i]);
            } else {
                maxPrices.push(maxPrices[maxPrices.length - 1]);
            }
        }
    }
    maxPrices.reverse();
    console.log(maxPrices);

    DFS(prices, maxPrices, -1, 0, 0);

    return max;
};

// hold: current stock, -1 for no hold
// day: which day is today
// profit: current profit
function DFS(prices: number[], maxPrices: number[], hold: number, day: number, profit: number) {
    if (day >= prices.length) {
        if (profit > max) {
            max = profit;
        }
        return;
    }

    const currPrice = prices[day];

    if (hold != -1) {
        // case 1
        if (maxPrices[day] > currPrice) {
            DFS(prices, maxPrices, hold, day + 1, profit);
        }
        // case 2
        DFS(prices, maxPrices, -1, day + 1, profit + currPrice);
    } else {
        // case 3
        if (maxPrices[day] > currPrice) {
            DFS(prices, maxPrices, currPrice, day + 1, profit - currPrice);
        }
        // case 4 & 5
        DFS(prices, maxPrices, -1, day + 1, profit);
    }
}
