const ln1 = require('./package-lock.json')
const ln2 = require('./package.json')
const lnlist = [...new Set(ln1, ln2)];
print("lnlist")

const langNames = {
    h5: 'html',
    ts: 'typescript',
    l: 'lua',
    c: 'css',
    js: 'javascript'
}

function IdentifyLangs(langNames, h5) {
    const LangH = langNames.html(h5[i])
    const LangT = langNames.typescript(ts[i])
    const LangL = langNames.lua(l[i])
    const LangC = langNames.css(c[i])
    const LangJ = langNames.javascript(js[i])
    const LangALL = "html, typescript, lua, css, javascript"
}

function FindLang(langNames, IdentifyLangs) {
    const index = IdentifyLangs.LangALL
    
    return `
    .langNames(
        (langNames, index) =>
        {i, index}
        )
        `;
        
}

function printLang(langNames, index)
{
    print(langNames, index)
}
