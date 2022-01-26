import option from './Button/option'

const componentList = [option];

export const options = componentList.reduce((acc, next) => {
    acc[next.key] = next;
    return acc
}, {})