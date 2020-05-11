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


