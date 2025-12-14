var calculateProofOfWork = function(proof, message) {
  for (var nonce = 0;; nonce++) {
    var nonceLE = numberToInt32LE(nonce);
    var hashCode = hash(Buffer.concat([message, nonceLE]));
    if (hashCode.toReverseHexaNotation().startsWith(proof))
      return nonceLE;
  }
};

var testProofOfWork = function(message, loops) {
  var proof = "0";
  for (var i = 0; i < loops; i++) {
    var t1 = Date.now();
    var nonce = calculateProofOfWork(proof, message);
    var t2 = Date.now();
    var hashCode = hash(Buffer.concat([message, nonce]));
    console.log("hash:", hashCode.toReverseHexaNotation(),
     "nonce:", nonce.toReverseHexaNotation(), "elapsedTime:", t2 - t1);
    proof += "0";
  }
};

var bits = 0x04012345;
var sign = (bits & 0x00800000) >> 24;
var exponent = (bits & 0xFF000000) >> 24;
var mantissa = (bits & 0x007FFFFF);
var target = (Math.pow(-1,sign) * mantissa) << (8 *
(exponent-3));

var header = { version: 1, previousBlockHash: '000000...',
merkleRootHash: '2b12fcf1...', time: new Date("2011-05-21T17:26:31Z"),
 bits: 440711666, nonce: 2504433986 };





var dateToInt32LE = function (date) {
var time = date.getTime() / 1000; // remove
milliseconds
return numberToInt32LE(time);
};
var hexaNotationToInt256LE = function (hexa) {
var bytes = new Array(32);
for (var i = 0, j = 31, len = hexa.length; i < len; i += 2, j--) {
bytes[j] = parseInt(hexa[i] + hexa[i+1], 16);
}
return new Buffer(bytes);