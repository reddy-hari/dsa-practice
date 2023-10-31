const emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();
  emails.forEach((e, i) => {
    const domain = e.split("@")[1];
    const localString = e.split("@")[0];
    const localStringNoPlus = localString.split("+")[0];
    const localName = localStringNoPlus.split(".").join("");
    if (!uniqueEmails.has(`${localName}@${domain}`)) {
      uniqueEmails.add(`${localName}@${domain}`);
    }
  });
  return uniqueEmails.size;
};

console.log(numUniqueEmails(emails));
