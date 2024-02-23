var assert  = require('assert');
var express = require('express');
var agent   = require('supertest');
var elocals = require('../');

var setup = function(){
  var app = express.Router();

  app.get( '/locals', function( req, res ){
    res.send( res.locals );
  });

  return app;
}

describe('Express Locals', function(){
  it('Should add locals', function( done ){
    var app = express();

    app.use( elocals({
      testing: 123
    }));

    app.use( setup() );

    agent( app )
      .get('/locals')
      .expect(200)
      .end( function( error, res ){
        assert( !error );
        assert.equal( typeof res.body, 'object' );
        assert.equal( res.body.testing, 123 );
        done();
      });
  });

  it('Should clone object', function( done ){
    var app = express();

    var locals = {
      testing: {
        a: 123
      }
    };

    app.use( elocals( locals ) );

    app.use( function( req, res, next ){
      res.locals.testing.a = 321;
      return next();
    });

    app.use( setup() );

    agent( app )
      .get('/locals')
      .expect(200)
      .end( function( error, res ){
        assert( !error );
        assert.equal( typeof res.body, 'object' );
        assert.equal( res.body.testing.a, 321 );
        assert.equal( locals.testing.a, 123 );
        done();
      });
  });

  it('Should not clone object', function( done ){
    var app = express();

    var locals = {
      testing: {
        a: 123
      }
    };

    app.use( elocals( locals, {
      cloneDeep: false
    }));

    app.use( function( req, res, next ){
      res.locals.testing.a = 321;
      return next();
    });

    app.use( setup() );

    agent( app )
      .get('/locals')
      .expect(200)
      .end( function( error, res ){
        assert( !error );
        assert.equal( typeof res.body, 'object' );
        assert.equal( res.body.testing.a, 321 );
        assert.equal( locals.testing.a, 321 );
        done();
      });
  });
});