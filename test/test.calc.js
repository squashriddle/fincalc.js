var calc = require('../fincalc')
var assert = require('assert')

describe('finCalc', function() {
  describe('simpleInt', function() {
    it('should return if solved', function() {
      var solution = calc.simpleInt({
        interest : 420,
        principle : 500,
        rate : .07,
        time : 12
      })
      assert.strictEqual(solution.interest, 420)
      assert.strictEqual(solution.principle, 500)
      assert.strictEqual(solution.rate, .07)
      assert.strictEqual(solution.time, 12)
    })
    it('should solve I = PRT', function() {
      var solution = calc.simpleInt({
        principle : 500,
        rate : .07,
        time : 12
      })
      assert.strictEqual(solution.interest, 420)
      assert.strictEqual(solution.principle, 500)
      assert.strictEqual(solution.rate, .07)
      assert.strictEqual(solution.time, 12)
    })
    it('should solve P = I / (RT)', function() {
      var solution = calc.simpleInt({
        interest : 420,
        rate : .07,
        time : 12
      })
      assert.strictEqual(solution.interest, 420)
      assert.strictEqual(solution.principle, 500)
      assert.strictEqual(solution.rate, .07)
      assert.strictEqual(solution.time, 12)
    })
    it('should solve R = I / (PT)', function() {
      var solution = calc.simpleInt({
        interest : 420,
        principle : 500,
        time : 12
      })
      assert.strictEqual(solution.interest, 420)
      assert.strictEqual(solution.principle, 500)
      assert.strictEqual(solution.rate, .07)
      assert.strictEqual(solution.time, 12)
    })
    it('should solve T = I / (PR)', function() {
      var solution = calc.simpleInt({
        interest : 420,
        principle : 500,
        rate : 0.07
      })
      assert.strictEqual(solution.interest, 420)
      assert.strictEqual(solution.principle, 500)
      assert.strictEqual(solution.rate, .07)
      assert.strictEqual(solution.time, 12)
    })
  })
})
