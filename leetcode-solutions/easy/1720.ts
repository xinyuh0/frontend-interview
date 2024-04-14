function decode(encoded: number[], first: number): number[] {
  // encode[i] = arr[i] XOR arr[i+1] => x = a ^ b
  // b = a ^ x => arr[i+1] = arr[i] ^ encode[i]

  let array: number[] = [first];
  for (let i = 0; i < encoded.length; i++) {
    array.push(array[i] ^ encoded[i]);
  }

  return array;
}
