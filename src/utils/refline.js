// 初始化辅助线

let lines = {
    xt : null,
    xc : null,
    xb : null,
    yl : null,
    yc : null,
    yr : null
}

export function initRefLines () {
    for(let l in lines) {
        const node = lines[l] = document.createElement('div')
        node.classList.add('ref-line',l)
        node.style.cssText = `
        display:none,
        background:steelblue,
        opacity: 0.7,
        position: absolute,
        ${l[0] === 'x' ? 'width:100%,height:1px,left:0' : ' width:1px,height:100%,top:0'}
        `
        node.show = function(){
           this.style.display = 'block'
        }
        node.hidden = function(){
            this.style.display = 'none'
        }
        document.body.appendChild(node)
    }

}

export class RefLine {
    constructor(options = {}){
        this.options = {
            ...{ gap : 6 },
            ...options
        }
    }
    check(draging,othersClsStr,parent = document.body){
        console.log('draging',draging)  
    }
}