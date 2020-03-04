export const updateObject = (obj, key, value) => {
    console.log(obj)
    Object.keys(obj).forEach(k => {
        console.log(k,key)
        if(k === key) {
            console.log(obj[key])
            obj[key] = value
        }
    })
    console.log(obj)
    return obj;
}