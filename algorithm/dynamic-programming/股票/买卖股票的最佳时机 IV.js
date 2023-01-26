const maxProfit = function (k, prices) {
  const len = prices.length
  const dp = dpInit(k, prices)
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    for (let j = 1; j < k; j++) {
      dp[i][j * 2] = Math.max(dp[i - 1][j * 2], dp[i - 1][j * 2 - 1] - prices[i])
      dp[i][j * 2 + 1] = Math.max(dp[i - 1][j * 2 + 1], dp[i - 1][j * 2] + prices[i])
    }
  }

  //取得结果
  let res = 0
  for (let i = 0; i < k; i++) {
    res = Math.max(res, dp[len - 1][i * 2 + 1])
  }
  return res
}

const dpInit = function (k, prices) {
  const len = prices.length
  const dp = new Array(len).fill(0).map(item => new Array(2 * k))
  for (let i = 0; i < k; i++) {
    dp[0][i * 2] = -prices[0]
    dp[0][i * 2 + 1] = 0
  }
  return dp
}

const prices = [3, 2, 6, 5, 0, 3]
console.log(maxProfit(2, prices))
