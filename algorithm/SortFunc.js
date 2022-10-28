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
      swap(nums, l + ((Math.random() * (r - l + 1)) | 0), r)
      let p = partition(nums, l, r)
      quickSort(nums, l, p[0] - 1)
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
const heapSort = (nums) => {}
