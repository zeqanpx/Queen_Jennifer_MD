function Bold(text) {
    const out_put = "*" + text + "*"
    return out_put
}

function Italic(text) {
    const out_put = "_" + text + "_"
    return out_put
}

function Monospace(text) {
    const out_put = "```" + text + "```"
    return out_put
}

function Cut(text) {
    const out_put = "~" + text + "~"
    return out_put
}

function Print(text) {
    console.log(text)
}

module.exports = {
    Bold,
    Italic,
    Monospace,
    Cut,
    Print
}