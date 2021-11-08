import h from './mysnabbdom/h.js'

var myVnode1 = h('div', {}, [
    h('p',{}, '哈哈'),
    h('p',{}, '嘻嘻'),
    h('p',{}, 
        h('span', {}, 'A')
    )
])
const myVnode2 = h('ul',{}, [
    h('div',{},[]),
    h('li', {},'苹果'),
    h('li',{}, '西瓜'),
    h('li', {},[
        h('div',{},[
            h('p',{},'小西瓜1'),
            h('p',{},'小西瓜2'),
        ]),
        h('div',{},[
            h('p',{},'大西瓜1'),
            h('p',{},'大西瓜2'),
        ])
    ]),
    h('li', {},[h('p',{},'火龙果'), h('p',{},'榴莲')]),
])

console.log(myVnode2);