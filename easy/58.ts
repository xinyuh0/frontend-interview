function lengthOfLastWord(s: string): number {
    s = s.trim();
    let array = s.split(' ');

    return array[array.length - 1].length;
};