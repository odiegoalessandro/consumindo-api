var category = []
var spending = []

async function getData(){
    const categoryAPI = await fetch('https://desafio-it-server.herokuapp.com/categorias')
    const categoryJSON = await categoryAPI.json()
    const lauchAPI = await fetch('https://desafio-it-server.herokuapp.com/lancamentos')
    const lauchJSON = await lauchAPI.json()
    

    for(let i = 0; categoryJSON.length >= i; i++){
        category.push(categoryJSON[i])
    }

    for(let i = 0; lauchJSON.length >= i; i++){
        spending.push(lauchJSON[i])
    }

    function createTd(text){
        var td = document.createElement('td')
        td.innerText = text
    
        return td
    }
    //category[spending[0].categoria].nome
    function createTr(index){
        var tbody = document.querySelector('tbody')
        var tr = document.createElement('tr')
        tr.appendChild(createTd(spending[index].origem))
        tr.appendChild(createTd(spending[index].valor))
        tr.appendChild(createTd(category[spending[index].categoria].nome))
        tr.appendChild(createTd(spending[index].mes_lancamento))
        tbody.appendChild(tr)
    }

    for(let i = 0; i <= spending.length; i++){
        createTr(i)
    }
}

getData()