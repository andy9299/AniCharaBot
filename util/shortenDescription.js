const shortenDescription = (desc) => {
    let result = desc.slice(0, 400)
    if (desc.indexOf("~!") != -1){
        result = desc.slice(0, desc.indexOf("~!"))
    }        
    console.log(result);
    return result;
}

module.exports = {shortenDescription};