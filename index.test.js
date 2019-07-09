const { encrypt, decrypt } = require(".");
const cryp = require("crypto");
const { TextDecoder } = require("util");

describe("aes-gcm", () => {
  it("should encrypt and decrypt", async () => {
    const SHARED_KEY = Uint8Array.from([
      64, 196, 127, 247, 172,   2,  34,
      159,   6, 241,  30, 174, 183, 229,
      41, 114, 253, 122, 119, 168, 177,
      243, 155, 236, 164, 159,  98,  72,
      162, 243, 224, 195
    ]);
    const plaintext = "Hello world";
    const encoded = await encrypt(SHARED_KEY, plaintext);
    const plain = await decrypt(SHARED_KEY, encoded);
    expect(new TextDecoder().decode(plain)).toBe(plaintext);
  });
});
