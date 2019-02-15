var arr = [17, 19, 21, 3, 5, 7, 9, 10, 11 , 13, 18];

function binaryRotateFind(arr) {
  var low = 0;
  var high = arr.length -1;
  while(low<=high) {
    var mid = Math.floor((high + low)/2);
    if(arr[mid] <arr[high]) { // 右侧有序
      high = mid;
    } else if(arr[mid] > arr[high]){//左侧有序
      low = mid +1;
    } else {
      high--;
    }
  }
  return arr[low]
}

binaryRotateFind(arr, 19);


function rotate(arr, k) {
   k = k % arr.length;
  while(k > 0) {
    var temp = arr[arr.length -1]
    for(var i = arr.length -1; i > 0; i--) {
      arr[i] = arr[i-1];
    }
    arr[0] = temp;
    k--;
  }
}

function rotateArr(arr, k) {
  k = k % arr.length;
  return (arr.slice(0, k).reserve().concat(arr.slice(k).reserve())).reserve();
}

function binaryFind(arr, key) {
  var low = 0,
      high = arr.length -1;
  while(high >= low) {
    var mid = Math.floor((low + high) /2);
    if (key === arr[mid]) {
      return mid;
    }
    if (arr[mid] > key) {
      high = mid - 1;
    } else if(arr[mid] < key) {
      low = mid + 1;
    } else {
      return -1;
    }
  }
}


function binarySearch(arr, key) {
  function binaryFind(arr, low, high, key) {
    if(low > high) {
      return -1;
    }
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] > key) {
      return binaryFind(arr, low, mid -1, key)
    } else if (arr[mid] < key) {
      return binaryFind(arr, mid + 1, high, key)
    } else {
      return -1;
    }
  } 
  binaryFind(arr, 0, arr.length -1, key)
}

function hasSubTree(root1, root2) {
  var result = false;
  if (!(root1 && root2)) {
    return result;
  }
  if (root1.val === root2.val) {
    result = isSameTree(root1, root2);
  }
  if (!result) {
    result = isSameTree(root1.left, root2)
  }
  if (!result) {
    result = isSameTree(root1.right, root2);
  }
  return result;
}

function isSameTree(root1, root2) {
  if (!(root1  && root2)) {
    return false;
  }
  if(root1.val !== root2.val) {
    return false;
  }
  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}


function mirror(root) {
  if(!(root && root.left && root.right)) {
    return;
  }
  var temp = root.left;
  root.left = root.right;
  root.right = temp;

  mirror(root.left);
  mirror(root.right)
}


function isPopOrder(pushV, popV) {
  var i = 0;
  var j = 0;
  var len = popV.size();
  var arr = [];
  while(j < len) {
    if(i < len) {
      arr.push(pushV[i]);
      if(pushV[i] === popV[j]) {
        arr.pop();
        j++;
      }
      i++;
    } else {
      if(arr.pop() !== popV[j]) {
        return false;
      } else {
        j++;
      }
    }
  }
}


function findPath(root, expectNum) {
  var result = [];
  dfsFind(root, expectNum, [], result);
  return result;
}

function dfsFind(root, expectNum, path, result) {
  path.push(root.val);
  expectNum -= root.val;
  var isleaf = root.left==null && root.right==null;
  if(expectNum === 0 && isleaf) {
    result.push(path.slice(0));
  }
  if(root.left !=null) {
    dfsFind(root.left, expectNum, path, currentSum, result);
  }
  if(root.right != null) {
    dfsFind(root.right, expectNum, path, currentSum, result);
  }
  path.pop();
}


