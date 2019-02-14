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

// 二叉树
// 树节点
function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function insertNode(node, newN) {
  if (node.key > newN.key) {
    if (node.left === null) {
      node.left = newN;
    } else {
      insertNode(node.left, newN)
    }
  } else {
    if(node.right === null) {
      node.right = newN;
    } else {
      insertNode(node.right, newN);
    }
  }
}
function printNode(node) {
  console.log(node.key)
}
BinarySearchTree.prototype = {
  constructor: BinarySearchTree,
  insert(key) {
    var newN = new Node(key);
    if(this.root === null) {
      this.root = newN;
    } else {
      inserNode(this.root, newN);
    }
  },
  inOrder(printFunc) {
    function inOrderTree(node,printFunc) {
      if (node !== null) {
        inOrderTree(node.left, printFunc);
        printFunc(node);
        inOrderTree(node.right, printFunc);
      }
    }
    inOrderTree(this.root, printFunc);
  },
  preOrder(printFunc) {
    function preOrderTree(node, printFunc) {
      if(node) {
        printFunc(node);
        preOrderTree(node.left);
        preOrderTree(node.right);
      }
    }
    preOrderTree(this.root, printFunc)
  },
  afterOrder(printFunc) {
    function afterOrderTree(node, printFunc) {
      if(node) {
        afterOrderTree(node.left);
        afterOrderTree(node.right);
        printFunc(node);
      }
    }
    afterOrderTree(this.root, printFunc)
  },
  min() {
    function findMin(node) {
      if(node.left) {
        return findMin(node.left);
      } else {
        return node.key;
      }
    }
    if (this.root) {
      return findMin(this.root);
    }
    return null; 
  },
  max() {
    function findMax(node) {
      if(node.right) {
        return findMax(node.right)
      } else {
        return node.key;
      }
    }
    if (this.root) {
      return findMax(this.root);
    }
    return null;
  },
  search(key) {
    function searchNode(node, key) {
      if(!node) {
        return null;
      }
      if(key > node.key) {
        return searchNode(node.right, key);
      }
      if(key < node.key) {
        return searchNode(node.left, key)
      }
      if (key === node.key) {
        return node;
      }
    }
    return searchNode(this.root, key);
  },
  remove(key) {
    function removeNode(node, key) {
      if(!node) {
        return null;
      }
      if(key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
      } else if(key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }
        var aux = findMin(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
      }
    }
    this.root = removeNode(this.root, key);
  }
}

// 图 
function Graph(v) {
  this.vertices = v; // 顶点个数
  this.edges = 0 //边条数
  this.adj = []
  this.marked = []; //存储某顶点是否被标记
  this.edgeTo = []//存储某顶点对应的边信息
  function init() {
    for(var i = 0; i < this.vertices; i++) {
      this.adj[i] = [];// 二维数据 第一个存储顶点编号， 第二个存储相连顶点编号
      this.marked[i] = false;
    }
  }
  init.apply(this);
}

Graph.prototype = {
  constructor: Graph,
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  },
  showGraph() {
    var str = '';
    for(var i = 0; i < this.vertices; i++) {
      str = i + '-->';
      for(var j = 0; j < this.vertices; j++) {
        if (this.adj[i][j]) {
          str += this.adj[i][j] + " ";
        }
      }
    }
    console.log(str);
  },
  dfs(v) { //深度优先遍历的起始顶点
    this.marked[v] = true;
    var adj = this.adj[v], 
      nextAdj;
      if (adj) { // 如果是顶点则打印
        console.log(`visited vertex: ${v}`);
      }
      for(var w in adj) { //是顶点集合
        var nextAdj = this.adj[v][w];
        if(!this.marked[nextAdj]) {
          this.dfs(nextAdj);
        }
      }
  },
  bfs(s) { //广度优先搜索
    var queue = [], adj = this.adj[s], nextAdj;
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0) {
      var v = queue.shift();
      if (v) {
        console.log(`visited vertex: ${v}`);
      }
      adj = this.adj[v];
      for(var w in adj) {
        var nextAdj = this.adj[v][w];
        if(!this.marked[nextAdj]) {
          this.marked[nextAdj] = true;
          this.edgeTo[nextAdj] = v; //表示 顶点nextAdj 和 v相连
          queue.push(nextAdj);
        }
      }
    }
  },
  minPathTo(s,v) {//s to v的最短路径
    this.bfs(s); //广度优先遍历过程中，存储顶点对应边信息
    if(!this.hasPathTo(v)) { //如果没有被标记过，表名v属于游离节点，没有路径
      return undefined;
    }
    var path = [];
    for(var i = v; i!=s; i = this.edgeTo[i]) { // 从v沿着边的关系向上找s
      path.push(i); //一路存储途径节点信息
    }
    path.push(s);
    this.printPath(path);
  },
  hasPathTo(v) {
    return this.marked(v);
  },
  printPath(paths) {
    var str = "";
    while(paths.length > 0) {
      if(paths.length > 1) {
        str += paths.pop() + "-"
      } else {
        str += paths.pop();
      }
    }
    console.log(str);
  }
}

// 图的实现
function Graph() {
  this.vertices = []; //顶点数组
  this.adjList = new Dictionary()
}

Graph.prototype = {
  constructor: Graph,
  addVertex(v) { // 添加节点
    this.vertices.push(v);
    this.adjList.set(v, []); // 给节点v设置一个空数组存储相连顶点集合
  },
  addEdge(v, w) { //添加边
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  },
  bfs(v, cb) { //广度优先遍历 v表示 遍历的起点
    var markedList = this.marked();
    var queue = new Queue(); //存储待访问的节点
    queue.enqueue(v);
    while(!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = this.adjList.get(u); // 获取与u相邻的节点列表
      markedList[u] = 'grey'; // 标记u节点被访问过的状态
      for(var i = 0; i < neighbors.length; i++) {
        // 依次将u相邻节点 入队列
        var w = neighbors[i];
        if(markedList[w] === 'white') {
          markedList[w] = 'grey';
          queue.enqueue(w);
        }
      }
      markedList[u] = 'black'; //黑色标识 u的所有节点都被访问过
      if(cb) {
        cb(u);
      }
    }
  },
  dfs(cb) { // 深度优先遍历
    var markedList = this.marked();
    var vertices = this.vertices;
    function dfsVisit(u, markedList, cb) {
      markedList[u] = 'grey';
      if (cb) {
        cb(u);
      }
      var neighbors = this.adjList.get(u);
      for(var i = 0; i<neighbors.length;i++) {
        var w = neighbors[i];
        if(markedList[w] === 'white') {
          dfsVisit(w, markedList, cb);
        }
      }
      markedList[u] = 'black';
    }
    for(var i = 0; i< vertices.length; i++) {
      if(markedList[vertices[i]] === 'white') {
        dfsVisit.call(this, vertices[i], markedList, cb);
      }
    }
  },
  marked() { 
    var color = []
    for(var i  = 0; i < this.vertices; i++ ) {
      color[this.vertices[i]] = 'white'
    }
    return color;
  }
}
