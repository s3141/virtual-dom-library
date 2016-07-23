import {traverseMediator} from './traversing'

let vdom = {
  init : init,
  diff : diff,
  vtree : {},
  rtree : {}
}

function init(root){
  let result
  result = traverseMediator({init:true, root:root, handler:initRdom, handlerResult:{}})
  vdom.vtree = result.vdom
  vdom.rtree = result.handlerResult.root
  return vdom.rtree
}

function parentInit(node,index){
  if (index > 0) {
    node = buildNode(node)
  }
  return node
}


function initRdom(options){
  let domNode
  let {node} = options
  if (node.root) {
    this.root = node.create()
    this.parent = this.root
    node.ref = this.root
  } else {
    domNode = node.create()
    node.parent.ref.appendChild(domNode)
    node.ref = domNode
  }
}

function diff(oldTree, newTree, patch){
  patch = []
  diffPipe(oldTree, newTree);
}

function diffPipe(oldTree, newTree){
  console.log(oldTree, newTree);
}



export {vdom}
