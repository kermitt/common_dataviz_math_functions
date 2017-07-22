
function findXY_givenAngle_andDistance (x, y, angle, distance) {
  var result = {}
  result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x)
  result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y)
  return result
}

function getAngle_twoPoints (x1, y1, x2, y2) {
  // REMEMBER! Flipflop your intuitions! Screen 'more Y' = 'lower'
  // TODO! Maybe flip the sign of ( y2 - y1 ) to better match human intuitions?
  var angle_in_degrees = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI
  return angle_in_degrees
}

function getDistance_twoPoints (x1, y1, x2, y2) {

}

module.exports.getAngle_twoPoints = getAngle_twoPoints
module.exports.findXY_givenAngle_andDistance = findXY_givenAngle_andDistance
