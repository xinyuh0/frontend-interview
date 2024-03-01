// Connectivity of the graph
function minMutation(startGene: string, endGene: string, bank: string[]): number {
    function isConnect(gene1: string, gene2: string): boolean {
        // Number of different gene
        let n = 0;
        // It is garanteed all genes have the same length
        for (let i = 0; i < gene1.length; i++) {
            if (gene1[i] !== gene2[i]) {
                n++;
            }
        }

        return n === 1;
    }

    const _bank: string[] = [startGene, ...bank];

    let adjacentList: number[][] = [];
    for (let i = 0; i < _bank.length; i++) {
        adjacentList.push([]);
    }

    for (let i = 0; i < _bank.length; i++) {
        for (let j = i + 1; j < _bank.length; j++) {
            const gene1 = _bank[i], gene2 = _bank[j];

            if (isConnect(gene1, gene2)) {
                adjacentList[i].push(j);
                adjacentList[j].push(i);
            }
        }
    }

    let arrived: boolean[] = new Array(_bank.length).fill(false);
    let depth = 0, found = false;
    let tmp: number[] = [0];
    arrived[0] = true;

    while (tmp.length > 0) {
        const n = tmp.length;

        for (let i = 0; i < n; i++) {
            const idx: number = tmp[i];

            if (_bank[idx] === endGene) {
                found = true;
                break;
            }

            for (let j = 0; j < adjacentList[idx].length; j++) {
                if (!arrived[adjacentList[idx][j]]) {
                    tmp.push(adjacentList[idx][j]);
                    arrived[adjacentList[idx][j]] = true;
                }
            }
        }

        if (found) break;

        depth++;
        tmp.splice(0, n);
    }

    return found ? depth : -1;
};

// console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"]));