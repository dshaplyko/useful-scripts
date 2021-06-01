/**
 * A way to avoid forEach inside of forEach
 * Before:
 */
let decisionPccs = [];
responseWithLP.decisions.forEach(decision => {
  decision.proxyClaimChains.forEach(chain => {
    decisionPccs.push(chain.pccId);
  });
});

/**
 * After
 */
decisionPccs = responseWithLP.decisions.reduce((result, item) => {
  const chainsIds = item.proxyClaimChains.map(chain => chain.pccId);
  result = result.concat(chainsIds);
  return result;
}, []);

/**
 * Check if there are duplicates
 */
const hasDuplicates = array => (new Set(array)).size !== array.length;

/**
 * Calculate the number of occurences in the given string
 */
const count = (main_str, sub_str) => {
  main_str += '';
  sub_str += '';

  if (sub_str.length <= 0) {
    return main_str.length + 1;
  }
  subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
};

/**
 * Remove duplicates from the array
 * ids - array with duplicates
 */
const arr = [1, 2, 3, 4, 1, 4, 1, 5, 1, 6];
const filtered = [...new Set(arr)];

/**
 * Get unique items by providing the key
 */

const getUnique = (arr, comp) => {

  const unique = arr
    .map(e => e[comp])
    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

  return unique;
};