/**
 * index.js
 *
 * @author  Otávio Augusto Soares <otaviokk@gmail.com>
 * Based on seneca-as-promised by Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */


module.exports = function (seneca) {
  require('./lib/stub').call(seneca);

};