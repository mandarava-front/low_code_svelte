// 初始化辅助线

import { query_selector_all } from "svelte/internal"

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
        node.hide = function(){
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
        const allOtherClsNode = query_selector_all(othersClsStr)
        const dragingRect = draging.getBoundingClientRect()
        const parentRect = parent.getBoundingClientRect()
//Array.from() 把为数组转换成数组
        Array.from(allOtherClsNode).forEach( item => {
            item.classList.remove('.ref-line-active')
            if(item == draging) return;

            const { top, right, bottom , left, width, height} = item.getBoundingClientRect()

            let dragWidthHalf = dragingRect.width / 2
            let dragingHeightHalf = dragingRect.height / 2
            let itemWidthHalf = width / 2
            let itemHeightHalf = height / 2
            

            let conditions = {
                top: [
                  // xt-top
                  {
                    isNearly: this.__isNearly(dragRect.top, top),
                    lineNode: lines.xt,
                    lineValue: top,
                    dragValue: top
                  },
                  // xt-bottom
                  {
                    isNearly: this.__isNearly(dragRect.bottom, top),
                    lineNode: lines.xt,
                    lineValue: top,
                    dragValue: top - dragRect.height
                  },
                  // cx
                  {
                    isNearly: this.__isNearly(dragRect.top + dragHeightHalf, top + itemHeightHalf),
                    lineNode: lines.xc,
                    lineValue: top + itemHeightHalf,
                    dragValue: top + itemHeightHalf - dragHeightHalf
                  },
                  // xb-top
                  {
                    isNearly: this.__isNearly(dragRect.bottom, bottom),
                    lineNode: lines.xb,
                    lineValue: bottom,
                    dragValue: bottom - dragRect.height
                  },
                  // xb-bottom
                  {
                    isNearly: this.__isNearly(dragRect.top, bottom),
                    lineNode: lines.xb,
                    lineValue: bottom,
                    dragValue: bottom
                  }
                ],
                left: [
                  {
                    isNearly: this.__isNearly(dragRect.left, left),
                    lineNode: lines.yl,
                    lineValue: left,
                    dragValue: left
                  },
                  {
                    isNearly: this.__isNearly(dragRect.right, left),
                    lineNode: lines.yl,
                    lineValue: left,
                    dragValue: left - dragRect.width
                  },
                  {
                    isNearly: this.__isNearly(dragRect.left + dragWidthHalf, left + itemWidthHalf),
                    lineNode: lines.yc,
                    lineValue: left + itemWidthHalf,
                    dragValue: left + itemWidthHalf - dragWidthHalf
                  },
                  {
                    isNearly: this.__isNearly(dragRect.right, right),
                    lineNode: lines.yr,
                    lineValue: right,
                    dragValue: right - dragRect.width
                  },
                  {
                    isNearly: this.__isNearly(dragRect.left, right),
                    lineNode: lines.yr,
                    lineValue: right,
                    dragValue: right
                  }
                ]
              }
                
        } )
    }

    uncheck(){
        Object.values(lines).forEach( item => item.hide())

    }
}