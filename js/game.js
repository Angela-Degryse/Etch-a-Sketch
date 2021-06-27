

function init(){
    const gridDiv = document.getElementById('main');

    for(let i=1; i<=2500; i++){
    const divEl = document.createElement('div');
        divEl.id = `div${i}`;
        divEl.className = `divClear`;
        divEl.innerHTML="";
        gridDiv.appendChild(divEl);

        divEl.onmouseover = ()=>{
            divEl.className = "divColored"
        }
    }

    document.getElementById('reset').onclick = ()=>{
        const divs = [...document.getElementsByClassName('divColored')];
        divs.map(d=>d.className="divClear");
    }
}

window.onload = init;