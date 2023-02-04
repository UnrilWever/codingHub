// origin：https://leetcode.cn/problems/unique-paths/

// dp
// const uniquePaths = function (m, n) {
//   let dp = new Array(m).fill(1).map(item => new Array(n).fill(1))
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//     }
//   }
//   return dp[m - 1][n - 1]
// }

//数论排列组合
// 从一共 m+n-2 步中 选出 m-1 往下
// 或 m+n-2 选出 n-1 往右，当然他们计算结果一样
const uniquePaths = function (m, n) {
  let top = m + n - 2
  let bottom = m - 1
  let res = 1
  for (let i = 0; i < m - 1; i++) {
    res *= top-- / bottom--
  }
  return res
}

console.log(uniquePaths(3, 7))
