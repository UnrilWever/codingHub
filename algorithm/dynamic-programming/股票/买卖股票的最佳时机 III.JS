const maxProfit = function (prices) {
  let len = prices.length
  let dp = new Array(len).fill(0).map(item => new Array(4).fill(0))
  dp[0][0] = 0 //第一次未持有
  dp[0][1] = -prices[0] //第一次持有
  dp[0][2] = 0 //第二次未持有
  dp[0][3] = -prices[0] //第二次持有
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][3] + prices[i])
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][0] - prices[i])
  }
  return Math.max(dp[len - 1][0], dp[len - 1][2])
}
let res = maxProfit([2, 1, 2, 0, 1])
console.log(res)
