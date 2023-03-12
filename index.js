const ln1 = ('./package-lock.json')
const ln2 = ('./package.json')
const ln3 = ('./schema.json')
const ln4 = ('./index.yml')
const lnlist = [...new Set(ln1, ln2, ln3, ln4)];
print("lnlist")
const langNames = {
    h5: 'html',
    ts: 'typescript',
    l: 'lua',
    c: 'css',
    js: 'javascript',
    a: 'arduino',
    cc: 'C',
    jsn: 'JSON',
    v: 'VisualBasic'
}

function IdentifyLangs(langNames, h5) {
    const LangH = langNames.html(h5[i])
    const LangT = langNames.typescript(ts[i])
    const LangL = langNames.lua(l[i])
    const LangC = langNames.css(c[i])
    const LangJ = langNames.javascript(js[i])
    const LangA = langNames.arduino(a[i])
    const LangB = langNames.batch(b[i])
    const LangCC = langNames.C(CC[i])
    const LangJSN = langNames.json(JSN[i])
    const V = langNames.VisualBasic(V[i])
    const LangALL = "html, typescript, lua, css, javascript, arduino, batch, C, JSON, VisualBasic"
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
