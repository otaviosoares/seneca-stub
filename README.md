# seneca-stub
A utility for stubbing seneca.js patterns

*This is a WIP*

# Getting Started

```js
const Seneca = require('seneca')();
require('seneca-stub')(Seneca);
```

```js
const stub = Seneca.stub('role:test,cmd:stub', { foo: 'bar' });
await Seneca.act('role:test,cmd:stub', { herp: 'derp' }); // { foo: 'bar' }

stub.data(); // { role: 'test', cmd: 'stub', herp: 'derp' }
```

If value provided to `Seneca.stub` is an `Error`, then it will be thrown instead
of being returned.