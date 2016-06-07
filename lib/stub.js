/**
 * stub.js
 *
 * @author  Otávio Augusto Soares <otaviokk@gmail.com>
 * Based on seneca-as-promised by Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

const _            = require('lodash');


function stub() {
  const Seneca = this;

  if (!global.Sinon) { return; }


  Seneca.stub = function(pattern, value) {

    const _stub = global.Sinon.spy(function(args, done) {
      if (value instanceof Error) {
        done(value, null);
      } else {
        done(null, value);
      }
    });
    Seneca.add(pattern, _stub);

    _stub.data = function() {
      if (!this.calledOnce) {
        throw new Error('Expected Seneca stub to be called once');
      }
      return _.omit(this.firstCall.args[0], 'meta$', 'tx$');
    };

    return _stub;
  };

}
module.exports = stub;
