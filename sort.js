function ArrayList() {
  this.array = []
}
ArrayList.prototype = {
  constructor: ArrayList,
  insert(item) {
    this.array.push(item);
  },
  toString() {
    return this.array.join();
  },
  swap(i, j) {
    var temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp; 
  },
  //冒泡
  bubbleSort() {
    var len = this.array.length;
    for(var i = 0; i < len; i++) {
      for(var j = 0; j < len - 1 - i; j++) {
        if (this.array[j] > this.array[j+1]) {
          this.swap(j, j+1);
        }
      }
    }
  },
  // 选择
  selectSort() {
    var len = this.array.length;
    var min = 0;
    for(var i = 0; i < len; i++) {
      min = i;
      for(var j = i; j< len; j++) {
        if (this.array[min] > this.array[j]) {
          min = j;
        }
      }
      if(min !== i) {
        this.swap(min, i);
      }
    }
  },
  // 插入
  insertSort(array) {
    array = array || this.array;
    var len = array.length;
    for(var i = 1; i < len; i++) {
      var j = i;
      var temp = array[i];
      while(j > 0 && array[j-1] > temp) {
        array[j] = array[j-1];
        j--;
      }
      array[j] = temp;
    }
  },
  // 快排
  quickSort() {
    function sort(arr) {
      if(arr.length <=1) {
        return arr;
      }
      var mid = Math.floor(arr.length /2);
      var m = arr.splice(mid, 1)[0];
      var left = [];
      var right = [];
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] > m) {
          right.push(arr[i])
        } else {
          left.push(arr[i])
        }
      }

      return sort(left).concat(m, sort(right));
    }
    this.array = sort(this.array);
  },
  // 桶排序
  bucketSort() {
    var arr = this.array;
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    var bucketSize = 5;
    var arr2 = [];
    var bucketCount = Math.floor((max - min ) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for(var i = 0; i < buckets.length; i++) {
      buckets[i] = [];
    }
    for(var i = 0; i < arr.length; i++) {
      buckets[Math.floor((arr[i] - min)/bucketSize)].push(arr[i]);
    }
    for(var i = 0; i < buckets.length; i++) {
      this.insertSort(buckets[i])
      for(var j = 0; j<buckets[i].length; j++) {
        arr2.push(buckets[i][j]);
      }
    }
    this.array = arr2;
  },
  // 基数排序
  radixSort() {
    var max = Math.max.apply(null, this.array);
    var arr = [];
    var maxDigit = max.toString().length;
    var counter = [];
    var mod = 10;
    var dev = 1;
    for(var i = 0; i < maxDigit; i++) {
      for(var j = 0; j < arr.length; j++) {
        var bucket = parseInt((arr[j] % mod) /dev);
        if(counter[bucket]) {
          counter[bucket].push(arr[j])
        } else {
          counter[bucket] = [];
        }
      }
      var pos = 0;
      for(var j  = 0; j < counter.length; j++) {
        if(counter[j]) {
          while(counter[j].length) {
            arr[pos] = counter[j].shift();
            pos++;
          }
        }
      }
      mod*=10;
      dev*=10;
    }
    return arr;
  }, 
  // 计数排序
  countSort() {
    var arr = this.array;
    var max = Math.max.apply(null, arr);
    var arr2 = [];
    var bucket = new Array(max + 1);
    for(var i = 0; i < arr.length; i++) {
      if(bucket[arr[i]]) {
        bucket[arr[i]]++;
      } else {
        bucket[arr[i]] = 0;
      }
    }
    for(var j = 0; j<bucket.length; j++) {
      while(bucket[j]) {
        arr2.push(j);
        bucket[j]--;
      }
    }
    return arr2;
  },
  // 希尔排序
  shellSort() {
    var arr = this.array;
    for(var step = Math.floor(arr.length /2); step > 0; step = Math.floor(step /2)) {
      for(var i = step; i < arr.length; i++) {
        temp = arr[i];
        for(var j = i - step; j >=0 && arr[j] > temp ; j-=step) {
          arr[j + step] = arr[j]
        }
        arr[j+step] = temp;
      }
    }
    return this.array;
  },
  // 归并排序
  mergeSort() {
    function mergeSortRec(arr) {
      var len = arr.length;
      if (len <=1 ) {
        return arr;
      }
      var mid = Math.floor(len /2);
      var left = arr.slice(0, mid);
      var right = arr.slice(mid);
      return mergeArray(mergeSortRec(left), mergeSortRec(right));
    }
    function mergeArray(left, right) {
      var result = [];
      var lp = 0;
      var rp = 0;
      while(lp < left.length && rp < right.length) {
        if(left[lp] < right[rp]) {
          result.push(left[lp]);
          lp++;
        } else {
          result.push(right[rp]);
          rp++;
        }
      }

      while(lp < left.length) {
        result.push(left[lp]);
        lp++;
      }
      while(rp < right.length) {
        result.push(right[rp]);
        rp++;
      }
      return result;
    }
    this.array = mergeSortRec(this.array)
  }
}