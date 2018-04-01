const express = require('express')
const app = express()
const tests = require('./public/tests.json')

app.use(express.static('public'))

const html = `
<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <title>Quiz Programmation</title>
    <link rel="stylesheet" href="bootstrap.min.css" />
  </head>
  <body>
    <header>
        <h1>Greetings, young padawan!</h1>
        <p>Have fun and test your skills.</p>
    </header>
    <div id="main">

    </div>
    <script src="page.js"></script>
    <script src="app.js"></script>
  </body>
</html>`

app.get('/tests', (req, res) => {
    res.json(tests)
    res.end()
})

app.get('*', (req, res) => {
    res.send(html)
    res.end()
  })
  
  app.listen(8000)