# Express Locals

> Mixin properties into the `res.locals` object for each request

__Usage__

```javascript
app.get('/my-route'
, require('express-locals')({
    hello: 'world'
  , objects: [{ a: 1 }, { a: 2 }, a: 3 }]
  })
, function( req, res ){
    res.send( res.locals.hello );
  }
);
```

__Install__

```
npm i -S express-locals
```

__Test__

```
npm test
```

## Options

```javascript
{
  // Deep clones the passed in object at each request
  cloneDeep: true // (default)
}
```

__usage:__

```javascript
app.get('/my-route'
, require('expresss-locals')({ a: 1 }, { cloneDeep: false })
, myHandler
);
```