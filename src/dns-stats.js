const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getAllSubDomains = function getAllSubDomains(names) {

  if (!names.includes('.')) {
    return names;
  }

  return [names].concat(getAllSubDomains(names.substring(0, names.indexOf('.'))));
}

const reverseDomainName = (name) => name.split('.').reverse().join('.');

function getDNSStats(domains) {
  const appearances = {};
  const allSubdomains = domains.map((domain) => getAllSubDomains(reverseDomainName(domain))).flat();
  allSubdomains.forEach((subDomain) => {    
    appearances[`.${subDomain}`] = domains.filter((domain) => domain.includes(reverseDomainName(subDomain))).length;
  });
  
  return appearances;
}

module.exports = {
  getDNSStats
};
