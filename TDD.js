
function getAngle () {
  let getAngle_twoPoints = require('./common_dataviz_funcs').getAngle_twoPoints

  let up = getAngle_twoPoints(0, 0, 0, -100)
  let left = getAngle_twoPoints(0, 0, -100, 0)
  let right = getAngle_twoPoints(0, 0, 100, 0)
  let down = getAngle_twoPoints(0, 0, 0, 100)

  let expected_up = -90
  let expected_left = 180
  let expected_right = 0
  let expected_down = 90

  let isOk = up === expected_up && left === expected_left && right === expected_right && down === expected_down
  log(up + ' up ')
  log(left + ' left')
  log(right + ' right ')
  log(down + ' down')
  verdict(isOk, 'getAngle() (Remember! Y/height is flipflopped!)')//  flipflopped from normal intuitions ( i.e., I would otherwise want this to be 90)
}

function findAngle () {
  let findXY_givenAngle_andDistance = require('./common_dataviz_funcs').findXY_givenAngle_andDistance
  let distance = 100
  let location = {}
  location.x = 0
  location.y = 0

  let angle_up = -90
  let angle_left = 180
  let angle_right = 0
  let angle_down = 90

  let u = findXY_givenAngle_andDistance(location.x, location.y, angle_up, distance)
  let l = findXY_givenAngle_andDistance(location.x, location.y, angle_left, distance)
  let r = findXY_givenAngle_andDistance(location.x, location.y, angle_right, distance)
  let d = findXY_givenAngle_andDistance(location.x, location.y, angle_down, distance)
  let isOk = d.x == 0 && d.y == 100

  verdict(isOk, 'findAngle from X and Y')
}

function _display (map) {
  let result = ''
  for (var key in map) {
    result += key + ':' + map[key] + '     '
  }
  return result
}

function verdict (result, msg) {
  let x = result ? 'PASS' : 'FAIL'
  console.log(x + ' |' + msg)
}
function log (msg) {
  console.log(msg)
}

const delimit = '+ ------------------------------------------------------------------ +'
console.log(delimit)
getAngle()
findAngle()
console.log(delimit)
console.log('\n\n\n')
