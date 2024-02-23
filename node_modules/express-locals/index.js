var utils = require('lodash');

module.exports = function( locals, options ){
  options = utils.defaults( options || {}, {
    cloneDeep: true
  });

  options.cloneDeep = !!options.cloneDeep;

  return function( req, res, next ){
    utils.extend( res.locals, ({
      true:   utils.cloneDeep( locals )
    , false:  locals 
    })[ options.cloneDeep ] );

    return next();
  };
};