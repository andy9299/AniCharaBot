const shortenDescription = (desc) => {
    if (desc == null) {
        return "";
    }
    if (desc.length > 400) {
        return desc.slice(0,400) + "..."
    }
    else {
        return desc
    }
}

module.exports = {shortenDescription};