// 2024.1.29 #3
function longestPalindrome(s: string): string {
    // The length of the answer can be odd or even

    if (s.length === 1) return s;

    if (s.length === 2) return s[0] === s[1] ? s : s.substring(0, 1);

    let maxLen = 1, ans = s.substring(0, 1);
    for (let i = 1; i < s.length - 1; i++) {
        // test for odd
        let l = i - 1, r = i + 1, len = 1;
        while (l >= 0 && r <= s.length - 1) {
            if (s[l] === s[r]) {
                l--;
                r++;
                len += 2;
            }
            else break;
        }

        if (len > maxLen) {
            maxLen = len;
            ans = s.substring(l + 1, r);
        }
    }

    for (let i = 0.5; i < s.length - 1; i += 1) {
        let l = Math.floor(i), r = Math.ceil(i), len = 0;
        while (l >= 0 && r <= s.length - 1) {
            if (s[l] === s[r]) {
                l--;
                r++;
                len += 2;
            }
            else break;

            if (len > maxLen) {
                maxLen = len;
                ans = s.substring(l + 1, r);
            }
        }
    }

    // console.log(maxLen);
    return ans;
};

// console.log(longestPalindrome('ccc'));
