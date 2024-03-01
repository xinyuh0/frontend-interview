// 2024.1.29 #4
function minWindow(s: string, t: string): string {
    if (t.length > s.length) return '';

    // The frequency of characters in the template.
    const m1: Map<string, number> = new Map<string, number>();
    // The frequency of characters in the window.
    const m2: Map<string, number> = new Map<string, number>();

    // Initialization
    for (let i = 0; i < t.length; i++) {
        const char: string = t.charAt(i);

        if (m1.has(char)) {
            // @ts-ignore
            const n: number = m1.get(char);
            m1.set(char, n + 1);
        } else {
            m1.set(char, 1);
        }

        if (m2.has(char)) {
            // Do nothing
        } else {
            m2.set(char, 0);
        }
    }

    // needCnt: number of characters needed to satisfy the requirement
    let l = 0, r = 0, needCnt = t.length, minLen = Number.MAX_SAFE_INTEGER, ans = '';
    while (r < s.length) {

        const cr = s.charAt(r);
        if (m1.has(cr)) {
            const cnt1 = m1.get(cr);
            const cnt2 = m2.get(cr);

            // @ts-ignore
            if (cnt1 > cnt2) {
                needCnt--;
            }

            // @ts-ignore
            m2.set(cr, cnt2 + 1);
        }

        if (needCnt === 0) {
            while (l <= r) {
                const cl = s.charAt(l);
                if (!m1.has(cl)) {
                    l++;
                } else {
                    const cnt1 = m1.get(cl);
                    const cnt2 = m2.get(cl);

                    // @ts-ignore
                    // Redundant character
                    if (cnt1 < cnt2) {
                        // @ts-ignore
                        m2.set(cl, cnt2 - 1);
                        l++;
                    } else {
                        // Find an answer
                        if (minLen > r - l + 1) {
                            minLen = r - l + 1;
                            ans = s.substring(l, r + 1);
                        }

                        needCnt++;
                        // @ts-ignore
                        m2.set(cl, cnt2 - 1);
                        l++;
                        break;
                    }
                }
            }
        }

        r++;
    }

    return ans;
};

// minWindow("cabwefgewcwaefgcf", "cae");