const crypto = require("crypto");

function deterministicHash(input) {
  const hash = crypto.createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

module.exports = deterministicHash;
