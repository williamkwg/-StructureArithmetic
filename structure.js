//顺序表
var a = [3,4,7,11, 77, 88, 99];
var b = [2,6,7, 9, 18, 22];

function mergeList(a, b) {
  var c = [];
  var pA = 0;
  var pB = 0;
  while(pA < a.length && pB < b.length) {
    if(a[pA] <= b[pB]) {
      c.push(a[pA])
      pA++;
    } else {
      c.push(b[pB])
      pB++;
    }
  }
  while(pA < a.length) {
    c.push(a[pA]);
    pA++;
  }
  while(pB < b.length) {
    c.push(b[pB]);
    pB++;
  }
  return c;
}
mergeList(a,b)


var a = {0: 0, 1: 1, 2:2, 3:3, 4:4, 5:5};
a.length = 6;

function insert(a, i, el) {
  if (!el) {
    return;
  }
  if (i < 0) {
    return;
  }
  var len = a.length;
  if (i >= len) {
    while(len < i) {
      a[len] = undefined;
      len++;
      a.length++;
    }
    a[i] = el;
  } else {
    while(i<len) {
      a[len] = a[len-1];
      len--;
    }
    a[i] = el;
  }
  a.length++;
}

insert(a, 3, 8);
insert(a, 10, 10);
console.log(a);



del(a, 3);
del(a, 10);
del(a, 33);

function del(a, i) {
  if (i >= a.length) {
    return;
  }
  var len = a.length;
  while(len > i) {
    a[i] = a[i+1];
    i++;
  }
  a.length--;
  delete a[len-1];
}

// 单链表
function linkedList() {
  let Node = function(ele) {
    this.ele = ele;
    this.next = null;
  }

  var  length = 0;
  let head = null;
  this.append = function(ele) {
    let node = new Node(ele);
    let current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }
  this.insert = function(i, ele) {
    if (i >0 && i <=length) {
      let node = new Node(ele),
      current = head,
      pre, 
      index = 0;

      if (i === 0) {
        node.next = current;
        head = node;
      } else {
        while(index < i) {
          pre = current;
          current = current.next;
          index++;
        }
        node.next = current;
        p.next = node;
      }
      length++;
      return true;

    } else {
      return false;
    }
  }
  this.removeAt = function(i) {
    if (i > -1 && i < length) { 
      let current = head;
      pre,
      index = 0;
      if (i === 0) {
        head = current.next;
      } else {
        while(index <i) {
          pre = current;
          current = current.next;
          index++:
        }
        pre.next = current.next
      }
      length--;
      return current.ele;
    }
    return null;
  } 

  this.indexOf = function(ele) {
    let cur = head,
    index = 0;
    while(cur) {
      if (ele !== cur.ele) {
        cur = cur.next;
        index++;
      } else {
        return index;
      }
    }
    return -1;
  }

  this.remove = function(ele) {
    let index = this.indexOf(ele);
    return this.removeAt(index);
  }

  this.isEmpty = function() {
    return length ===0;
  }
  this.size = function() {
    return length;
  }
  this.getHead = function() {
    return head;
  }
  this.toString = function() {
    let current = head;
    var str = "";
    while(current) {
      str += current.ele + (current.next ? ', ' : '');
      current = current.next;
    }
    return str;
  }
  this.print = function() {
    console.log(this.toString())
  }
}


//双向链表
function DoubleLinkedList() {
  let Node = function(ele) {
    this.ele  = ele;
    this.next = null;
    this.prev = null;
  }
  let length = 0;
  let head = null;
  let tail = null;

  this.append = function(ele) {
    let node = new Node(ele);
    if (head === null) {
      head = node;
      tail = node;
      return;
    }
    tail.next = node;
    node.prev = tail;
    tail = node;
    length++;
  }
  this.insert = function(i, ele) {
    let node = new Node(ele);
    if(i >=0 && i <=length) {
      let current = head,
        prev,
        index = 0;
      if (i === 0) {
        if(!head) {
          head = node;
          tail = node;

        }else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (i === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while(index < i) {
          prev = current;
          current = current.next;
        }
        node.next = current;
        current.prev = node;
        prev.next = node;
        node.prev = prev;
      }
      length++;
      return true;
    } else {
      return false;
    }
  }

  this.removeAt= function(i) {
    if (i > -1 && i < length) {
      let current = head,
      prev, index = 0;
      if (i === 0) {
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if(i === length-1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while(index < i) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
        current.next.prev = prev;
      }
      length--;
      return current.length;
    } else {
      return false;
    }
  } 
}


//栈
function Stack() {
  this.items = [];
}

Stack.prototype = {
  constructor: Stack,
  push(ele) {
    this.items.push(ele);
  },
  pop() {
    return this.items.pop();
  },
  peek() {
    return this.items[this.items.length - 1]
  },
  isEmpty() {
    return this.items.length === 0;
  },
  clear() {
    this.items = [];
  },
  size() {
    return this.items.length;
  },
  print() {
    return this.items.toString();
  }
}

function divideBy2(decNumber) {
  var decS = new Stack();
  var rem;
  var decStr = "";
  while(decNumber > 0) {
    rem = decNumber % 2;
    decS.push(rem);
    decNumber = Math.floor(decNumber /2);
  }
  while(!decS.isEmpty()) {
    decStr += decStack.pop().toString();
  }
  return decString
}

//队列
function Queue() {
  this.items = [];
}

Queue.prototype = {
  constructor: Queue,
  enqueue(ele) {
    this.items.push(ele);
  },
  dequeue() {
    return this.items.shift();
  },
  front() {
    return this.items[0];
  },
  isEmpty() {
    return this.items.length === 0;
  },
  size() {
    return this.items.length
  },
  clear() {
    this.items = [];
  },
  print() {
    return this.items.toString();
  }
}


// 优先队列 
function pQueue() {
  Queue.call(this)
}

pQueue.prototype = new Queue();
pQueue.prototype.constructor = pQueue;
pQueue.prototype.enqueue = function(ele, p) {
  function QE(ele, p) {
    this.ele = ele;
    this.p = p;
  }
  var qe = new QE(ele, p);
  if (this.isEmpty()) {
    this.items.push(qe);
  } else {
    var added = false;
    for(var i = 0; i < this.size(); i++) {
      if (this.items[i].p > qe.p) {
        this.items.splice(i, 0, qe);
        added = true;
        break;
      }
    }

    if(!added) {
      this.items.push(qe);
    }

  }
}

pQueue.prototype.print = function() {
  var result = "";
  for(var i = 0; i < this.items.length; i++) {
    result += JSON.stringify(this.items[i]);
  }
  return result;
}

//集合
function Set() {
  this.items = {};
}

Set.prototype = {
  constructor: Set, 
  has(value) {
    return value in this.items;
  },
  add(value) {
    if(this.has(value)) {
      return false;
    }
    this.items[value] = value;
    return true;
  },
  remove(val) {
    if (this.has(val)) {
      delete this.items[value];
      return true;
    }
    return false;
  },
  clear() {
    this.items = {};
  },
  size() {
    return Object.keys(this.items).length;
  },
  values() {
    return Object.keys(this.items)
  },
  union(set) {
    var newSet = new Set();
    var valuess = this.values();
    for(var i = 0; i < valuess.length; i++) {
      newSet.add(valuess[i]);
    }
    values = set.values();
    for(var i = 0; i < values.length;i++) {
      newSet.add(values[i]);
    }
    return newSet;
  },
  intersection(set) {
    var iset = new Set();
    var values = this.values();
    for(var i = 0; i< values.length; i++) {
      if (set.has(values[i])) {
        iset.add(values[i])
      }
    }
    return iset;
  },
  difference(set) {
    var dset = new Set();
    var values = this.values();
    for(var i = 0; i< values.length; i++) {
      if (!set.has(values[i])) {
        dset.add(values[i])
      }
    }
    return dset;
  },
  subset(oset) {
    if(this.size() > oset.size()) {
      return false;
    } else {
      var values = this.values();
      for(var i = 0; i< values.length; i++) {
        if (!oset.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  }
}

//字典
function Dictionary() {
  this.items = {};
}
Dictionary.prototype = {
  constructor: Dictionary,
  has(key) {
    return key in this.items;
  },
  set(key, value) {
    this.items[key] = value;
  },
  remove(key) {
    if(!this.has(key)) {
      return false;
    }
    delete this.items[key];
    return true;
  },
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  },
  values() {
    //return Object.values(this.items);
    var values = [];
    for(var key in this.items) {
      if (this.has(key)) {
        values.push(key);
      }
    }
    return values;
  },
  clear() {
    this.items = {};
  },
  size() {
    return Object.keys(this.items).length;
  },
  keys() {
    return Object.keys(this.items);
  },
  getItems() {
    return this.items;
  }
}


//散列表
//散列函数hash
function loseHashCode(key) {
  var hash = 0;
  for(var i = 0; i < key.length; i++) {
    hash += key.charCodeAr(i)
  }
  return hash % 22;
}

function HashTable() {
  this.table = [];
}

HashTable.prototype = {
  constructor: HashTable,
  put(key, value) {
    var pos = loseHashCode(key);
    this.table[pos] = value;
  },
  get(key) {
    var pos = loseHashCode(key);
    return this.table[pos];
  },
  remove(key) {
    var pos = loseHashCode(key);
    this.table[pos] = undefined;
  }
}

// 分离链接版 散列表
// 散列节点
function valuePair(key, value) {
  this.key = key;
  this.value = value;
  this.toString = function() {
    return `[${this.key}-${this.value}]`;
  }
}

function hashTable() {
  this.table = [];
  if((typeof this.put !== 'function') && typeof this.put !== 'string') {
    hashTable.prototype.put = function(key, value) {
      var pos = loseHashCode(key);
      if (this.table[pos] === undefined) {
        this.table[pos] = new linkedList()
      }
      this.table[pos].append(new valuePair(key, value));
    }
    hashTable.prototype.get = function(key) {
      var pos = loseHashCode(key);
      if(this.table[pos] !== undefined) {
        var current = this.table[pos].getHead();
        while(current.next) {
          if(current.ele.key === key) {
            return current.ele.value;
          }
          current = current.next;
        }

        if(current.ele.key === key) {
          return current.ele.value
        }
      } else {
        return undefined;
      }
    }

    hashTable.prototype.remove = function(key) {
      var pos = loseHashCode(key);
      if (this.table[pos] === undefined) {
        return false;
      }
      var current = this.table[pos].getHead();
      while(current.next) {
        if (current.ele.key === key) {
          this.table[pos].remove(current.ele);
          if (this.table[pos].isEmpty()) {
            this.table[pos] = undefined;
          }
          return true;
        }
        current = current.next;
      }

      if (current.ele.key === key) {
        this.table[pos].remove(current.ele);
        if (this.table[pos].isEmpty) {
          this.table[pos] = undefined;
        }
        return true;
      }
      return false;
    }
  }
}


//线性探查版散列表
function hashLTable() {
  this.table = [];
  if ((typeof this.put !== 'function') && (typeof this.put !== 'string')) {
    hashLTable.prototype.put = function(key, value) {
      var pos = loseHashCode(key);
      if (this.table[pos] === undefined) {
        this.table[pos] = new valuePair(key, value)
      } else {
        var index = pos + 1;
        while(this.table[index] !== undefined) {
          index++;
        }
        this.table[index] = new valuePair(key, value);
      }
    } 
    hashLTable.prototype.get = function(key) {
      var pos = loseHashCode(key);
      if (this['table'][pos] !== undefined) {
        if (this.table[pos].key === key) {
          return this.table[pos].value;
        } else {
          var index = pos + 1;
          while(this.table[index] === undefined || (this.table[index].key !== key ) && index < this.table.length) {
            index++;
          }
          if (this.table[index] && this.table[index].key === key) {
            return this.table[index].value;
          } else {
            return false
          }
        }
      } else {
        return false;
      }
    }

    hashLTable.prototype.remove = function(key) {
      var pos = loseHashCode(key);
      if (this.table[pos] !== undefined) {
        if (this.table[pos].key === key) {
          this.table[pos] = undefined;
          return true
        } else {
          var index = pos + 1;
          while(this.table[index] === undefined || (this.table[index].key !== key ) && index < this.table.length) {
            index++;
          }
          if (this.table[index] && this.table[index].key === key) {
            this.table[index] = undefined;
            return true;
          } else {
            return false
          }
        }
      } else {
        return false;
      }
    }
  }
}