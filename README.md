# seneca-stub
A utility for stubbing seneca.js patterns using [Sinon.JS](https://github.com/sinonjs/sinon)

*This is based on Denis Luchkin-Zhou's stub utility from [seneca-as-promised](https://github.com/jluchiji/seneca-as-promised)*

# Install

```bash
npm install seneca-stub
```

# Getting Started

```js
const Seneca = require('seneca')();
require('seneca-stub')(Seneca);
```

### Return static data

```js
const stub = Seneca.stub('role:test,cmd:stub', { foo: 'bar' });
await Seneca.act('role:test,cmd:stub', { herp: 'derp' }); // { foo: 'bar' }

stub.data(); // { role: 'test', cmd: 'stub', herp: 'derp' }
```

### Use custom function

```js
const stub = Seneca.stub('role:test,cmd:stub', function(args, done) {
	var result = {greeting: 'hello '+ args.name }
	done(null, result)
});
await Seneca.act('role:test,cmd:stub', { name: 'john' }); // { greeting: 'hello john' }

stub.data(); // { role: 'test', cmd: 'stub', name: 'john' }
```

If value provided to `Seneca.stub` is an `Error`, then it will be thrown instead
of being returned.