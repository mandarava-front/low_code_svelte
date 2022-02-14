let id = 0
export const hash = () => ++id
export const deepCopy = ( target) => {
    if(target&& typeof(target) === 'object') {
        const result = Array.isArray(target) ? [] : {}
        for(const k in target) {
            if(typeof(k) === 'object'){
                result[k] = deepCopy(k)
            }else{
                result[k] = target[k]
            }
        }
        return result
    }
    return target
}