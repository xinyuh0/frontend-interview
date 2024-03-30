const maxNumberOfBalancedShipments = (weights: number[]): number => {
  let ans = 0;

  const splitPoint: number[] = [0];
  // backtrace the spliting point
  const backtrace = (index: number) => {
    const lastSplitPoint = splitPoint[splitPoint.length - 1];

    // must split here, because it is the last parcel
    if (index === weights.length) {
      if (index >= lastSplitPoint + 2) {
        const shipment = weights.slice(lastSplitPoint, index);
        const maxWeight = Math.max(...shipment);
        if (shipment[shipment.length - 1] !== maxWeight) {
          ans = Math.max(ans, splitPoint.length);

          const shipments: number[][] = [];
          // log current solution
          for (let i = 1; i < splitPoint.length; i++) {
            shipments.push(weights.slice(splitPoint[i - 1], splitPoint[i]));
          }
          shipments.push(weights.slice(lastSplitPoint, weights.length));
          console.log(shipments);
        }
      }
      return;
    }

    // each shipment should contain more than one shipments
    if (index < lastSplitPoint + 2) {
      backtrace(index + 1);
      return;
    }

    // split at current position
    const shipment = weights.slice(lastSplitPoint, index);
    const maxWeight = Math.max(...shipment);
    if (shipment[shipment.length - 1] !== maxWeight) {
      splitPoint.push(index);
      backtrace(index + 1);
      splitPoint.pop();
    }

    // skip
    backtrace(index + 1);
  };

  backtrace(0);

  return ans;
};

console.log("answer:", maxNumberOfBalancedShipments([4, 3, 6, 5, 3, 4, 7, 1]));
