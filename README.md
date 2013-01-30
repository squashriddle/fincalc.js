# finCalc

A collection of javascript financial calculators. Works in browsers and Node.

## Example

Here is an example of calculating simple interest, I = PRT.

```javascript
var solution = finCalc.simpleInt({
  principle : 520,
  rate : .07,
  time : 12
})

console.log(solution.interest) // Outputs 436.8
```
Note that the returned object contains all the variables to the equation.

Here is another example, but this time we'll be solving T = I / (PR).

```javascript
var solution = finCalc.simpleInt({
  interest : 436.80,
  principle : 520,
  rate : .07
})

console.log(solution.time) // Outputs 12
```

## Usage

### finCalc.simpleInt([values])

Calculates simple interest

- `values` - Object
  - interest - Number
  - principle - Number
  - rate - Number
  - time - Number

---

## License
MIT
