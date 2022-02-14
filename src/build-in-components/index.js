import {option} from './Button/option'

export const componentList = [ option ];

export const options = componentList.reduce((acc, next) => {
    acc[next.key] = next;
    return acc
}, {})