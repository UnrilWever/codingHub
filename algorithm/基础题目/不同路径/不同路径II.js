// var uniquePathsWithObstacles = function (obstacleGrid) {
//   let m = obstacleGrid.length
//   let n = obstacleGrid[0].length
//   let dp = new Array(m).fill(1).map(item => new Array(n).fill(0))

//   //初始化
//   for (let i = 0; i < m; i++) {
//     if (obstacleGrid[i][0]) break
//     dp[i][0] = 1
//   }
//   for (let i = 0; i < n; i++) {
//     if (obstacleGrid[0][i]) break
//     dp[0][i] = 1
//   }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (obstacleGrid[i][j] === 1) continue
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//     }
//   }
//   return dp[m - 1][n - 1]
// }

//滚动数组，省空间
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = new Array(n).fill(0)

  //初始化
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i]) break
    dp[i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //当前位置有障碍物，直接跳过
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0
        continue
      }
      if (j !== 0) {
        dp[j] = dp[j] + dp[j - 1]
      }
    }
  }
  return dp[n - 1]
}
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
)
// console.log(uniquePathsWithObstacles([[0, 1]]))
