const maxProfit = function (prices) {
  const len = prices.length
  const dp = new Array(len).fill(0).map(item => new Array(3))
  dp[0][0] = -prices[0] //买入
  dp[0][1] = 0 //卖出或持有
  dp[0][2] = 0 //冷冻
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    dp[i][2] = dp[i - 1][1]
  }

  return Math.max(dp[len - 1][1], dp[len - 1][2])
}
let res = maxProfit([1])
console.log(res)
