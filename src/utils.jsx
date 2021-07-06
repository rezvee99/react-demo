
const isArrayEmpty = (arr) => {
    if(arr !== undefined && arr !== null && arr.length >0)
    {
        return false;
    }
    return true;
}
const dumplogs = (m) => {
    console.log(m);
}

export {isArrayEmpty,dumplogs}