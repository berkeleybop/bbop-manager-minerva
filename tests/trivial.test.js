////
//// This is just a test to test the testing environment.
////

// Prefer Chai assert. We're (somehow, it does not work for "assert")
// passing in "should" from the gulp-defined globals.
var assert = require('chai').assert;
var should = require('chai').should();

describe('our testing environment is sane', function(){

    // State.
    var thingy = null;

    // Pre-run.
    before(function() {
	thingy = 1;
    });

    // Trivially works two ways.
    it('works at all (assert thingy)', function(){
	assert.typeOf(thingy, 'number');
        assert.equal(thingy, 1);
    });

    // Trivially works two ways.
    it('works at all (thingy should)', function(){
	thingy.should.equal(1);
    });

    // Can I pull in things as expected from node_modules, etc.?
    it('I can see bbop-rest-manager from my porch', function(){
	var model = require('..');
	assert.typeOf(model, 'function');
    });

    // Post-run.
    after(function(){
	thingy = null;
    });
});
