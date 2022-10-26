async function sleep(delay) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

async function fun() {
  await sleep(3000).then((res) => {
    console.log('3秒执行绿灯')
  })
  await sleep(2000).then((res) => {
    console.log('2秒执行黄灯')
  })
  await sleep(1000).then((res) => {
    console.log('1秒执行红灯')
  })
  fun()
}

// fun()
