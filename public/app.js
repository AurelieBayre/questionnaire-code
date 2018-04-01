const mainDiv = document.getElementById('main')

const render = html => {
    mainDiv.innerHTML = html
}

const highlightTrue = () => {
    const right = document.getElementsByClassName('right')
    Array.from(right).forEach(item => {
        item.style.color = "green"
        item.style.background = "#ccffcc"
        item.style.fontSize = "larger";
    })
}
// const highlightFalse = () => {
//     const right = document.getElementsByClassName('right')
//     Array.from(right).forEach(item => {
//         item.style.color = "green"
//         item.style.background = "#ccffcc"
//         item.style.fontSize = "larger";
//     })
// }
const makeQuestion = item => `
    <h2>${item.question}</h2>
    <ul class="list-group">
        <li class="list-group-item ${item.propositions[0][1]}">${item.propositions[0][0]}</li>
        <li class="list-group-item ${item.propositions[1][1]}">${item.propositions[1][0]}</li>
        <li class="list-group-item ${item.propositions[2][1]}">${item.propositions[2][0]}</li>
    </ul>
`

const controllers = {
    '/': () => {
        console.log("coucou je suis le console log du controller pour le path /")
        fetch('/tests')
        .then(res => {
            console.log("dans le fetch, on s'occupe de la res")
             return res.json()
        })
        .then(tests => tests.reduce((carry, test) => carry + makeQuestion(test), ''))
        .then(question => {render(
            `
            <div>
            ${question}
            </div>
            `
        )
        const rightAnswers = document.getElementsByClassName("right")
        Array.from(rightAnswers).forEach(answer => answer.addEventListener('click', highlightTrue))
      
    })
        
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