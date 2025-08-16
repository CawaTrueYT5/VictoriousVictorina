NovationsAmount = document.getElementById("NovationsSection").children.length

for (let s = 1; s <= NovationsAmount; s++) {
    let Div = document.getElementById(String(s));
    document.getElementById(String(s)).remove();
    document.getElementById("NovationsSection").prepend(document.getElementById(String(s)))
}