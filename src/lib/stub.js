/**
 * stub.js
 *
 * @author  Otávio Augusto Soares <otaviokk@gmail.com>
 * Based on seneca-as-promised by Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

const _            = require('lodash');
const sinon        = require('sinon');


function stub() {
  const Seneca = this;

  Seneca.stub = function(pattern, value) {

    const _stub = sinon.spy(function(args, done) {
      if (value instanceof Error) {
        done(value, null);
      } else if (typeof value === 'function') {
        value(args, done);
      } else {
        done(null, value);
      }
    })
    Seneca.add(pattern, _stub);

    _stub.data = function(i) {
      if (!this.called) {
        console.warn('Expected Seneca stub to be called once')
        return {}
      }
      return _.omit(this.getCall(i || 0).args[0], 'meta$', 'tx$');
    };

    return _stub;
  };

}
module.exports = stub;
