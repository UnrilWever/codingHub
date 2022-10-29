//归并排序
const mergeSort = (nums) => {
  if (!nums.length) return nums
  const process = (nums, l, r) => {
    if (l < r) {
      let m = l + ((r - l) >> 1)
      process(nums, l, m)
      process(nums, m + 1, r)
      merge(nums, l, m, r)
    }
  }
  const merge = (nums, l, m, r) => {
    let temp = []
    let p1 = l
    let p2 = m + 1

    while (p1 <= m && p2 <= r) {
      temp.push(nums[p1] < nums[p2] ? nums[p1++] : nums[p2++])
    }

    while (p1 <= m) {
      temp.push(nums[p1++])
    }

    while (p2 <= r) {
      temp.push(nums[p2++])
    }

    for (let i = 0, len = temp.length; i < len; i++) {
      nums[l + i] = temp[i]
    }
  }
  process(nums, 0, nums.length - 1)
  return nums
}

//快速排序
const quickSort = (nums) => {
  const swap = (nums, a, b) => {
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }

  const quickSort = (nums, l, r) => {
    if (l < r) {
      //随机选择一个数与最后一位交换
      swap(nums, l + ((Math.random() * (r - l + 1)) | 0), r)

      //p是返回回来的等于区
      let p = partition(nums, l, r)

      //把最低位到等于区前面一位进行quickSort
      quickSort(nums, l, p[0] - 1)

      //把等于区后面一位到最高位进行quickSort
      quickSort(nums, p[1] + 1, r)
    }
  }

  const partition = (nums, l, r) => {
    let less = l - 1
    let more = r
    while (l !== more) {
      if (nums[l] < nums[r]) {
        swap(nums, l++, ++less)
      } else if (nums[l] > nums[r]) {
        swap(nums, l, --more)
      } else {
        l++
      }
    }

    swap(nums, more, r)
    return [less + 1, more]
  }

  quickSort(nums, 0, nums.length - 1)
  return nums
}

//堆排序
const heapSort = (nums) => {
  const swap = (nums, a, b) => {
    let t = nums[a]
    nums[a] = nums[b]
    nums[b] = t
  }

  const heapInsert = (nums, i) => {
    while (i > 0 && nums[i] > nums[(i - 1) >> 1]) {
      swap(nums, i, (i - 1) >> 1)
      i = (i - 1) >> 1
    }
  }

  const heapify = (nums, i, heapSize) => {
    while (i * 2 + 1 < heapSize) {
      let largest = nums[i * 2 + 1]
      let index = i * 2 + 1
      if (i * 2 + 2 < heapSize) {
        largest = nums[i * 2 + 1] > nums[i * 2 + 2] ? nums[i * 2 + 1] : nums[i * 2 + 2]
        index = nums[i * 2 + 1] > nums[i * 2 + 2] ? i * 2 + 1 : i * 2 + 2
      }
      if (nums[i] < largest) {
        swap(nums, i, index)
        i = index
      } else {
        break
      }
    }
  }

  // let heapSize = 0
  // for (let i = 0, len = nums.length; i < len; i++, heapSize++) {
  //   heapInsert(nums, i)
  // }
  //优化后这部分的时间复杂度从O(NlogN)加速到O(N)，但是下面那个循环的时间复杂度还是O(NlogN)，
  //所以总体时间复杂度不变
  let heapSize = nums.length
  for (let i = nums.length - 1; i >= 0; i--) {
    heapify(nums, i, heapSize)
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    swap(nums, 0, --heapSize)
    heapify(nums, 0, heapSize)
  }
  return nums
}
