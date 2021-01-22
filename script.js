
async function getCategory(callback){
    const categoryAPI = await fetch('https://desafio-it-server.herokuapp.com/categorias')
    const categoryJSON = await categoryAPI.json()
    
    categoryJSON.map((category) => {
        var categoryName = category.nome
        var categoryID = category.id
        
        callback(categoryName, categoryID)
    })
}

async function getData(){
    const lauchAPI = await fetch('https://desafio-it-server.herokuapp.com/lancamentos')
    const lauchJSON = await lauchAPI.json()
    const month = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ]


    function createTd(text){
        var td = document.createElement('td')
        td.innerText = text
        return td
    }
    function createTr(origin, value, category, date){
        var tbody = document.querySelector('tbody')
        var tr = document.createElement('tr')
        tr.appendChild(createTd(origin))
        tr.appendChild(createTd(value))
        tr.appendChild(createTd(category))
        tr.appendChild(createTd(month[date]))
        tbody.appendChild(tr)
    }  


    lauchJSON.map((data) => {
        var value = data.valor
        var origin = data.origem
        var category = data.categoria
        var date = data.mes_lancamento
        var name = undefined
    
        getCategory((categoryName, categoryID) => {
            if(category == categoryID){
                name = categoryName
                createTr(origin, value, name, date)
            }
            else{
                return false
            }
        })
    })
}

getData()