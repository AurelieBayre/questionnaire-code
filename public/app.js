const mainDiv = document.getElementById('main')

const render = html => {
    mainDiv.innerHTML = html
}


const makeQuestion = item => `
        <h2>${item.question}</h2>
        <ul class="list-group">
            <li class="list-group-item">${item.propositions[0]}</li>
            <li class="list-group-item">${item.propositions[1]}</li>
            <li class="list-group-item">${item.propositions[2]}</li>
        </ul>`

const controllers = {
    '/': () => {
        console.log("coucou je suis le console log du controller pour le path /")
        fetch('/tests')
        .then(res => {
            console.log("dans le fetch, on s'occupe de la res")
             return res.json()
        })
        .then(tests => tests.reduce((carry, test) => carry + makeQuestion(test), ''))
        .then(question => render(
            `
            <div>
            ${question}
            </div>
            `
        ))
    }
}

const route = pathname => {

}
(() => {
    ['/'].forEach(
        path => page(path, controllers[path])
    )
    page()
// route()
})()