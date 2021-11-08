import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

// 创建出patch函数
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

// 创建虚拟节点
var myVnode1 = h(
  "a",
  {
    props: {
      href: "http://www.atguigu.com",
      target: "_blank",
    },
  },
  "尚硅谷"
);

const myVnode2 = h("div", "我是一个盒子");
const myVnode3 = h('ul', [
    h('div'),
    h('li', {},'苹果'),
    h('li', '西瓜'),
    h('li', [
        h('div',[
            h('p','小西瓜1'),
            h('p','小西瓜2'),
        ]),
        h('div',[
            h('p','大西瓜1'),
            h('p','大西瓜2'),
        ])
    ]),
    h('li', [h('p','火龙果'), h('p','榴莲')]),
])

console.log(myVnode3);
// 让虚拟节点上树
const container = document.getElementById("container");
patch(container, myVnode3);
