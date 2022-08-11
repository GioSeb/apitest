//const { response } = require('express')
const express = require('express')
const app = express()
const http = require('http')

app.use(express.json())

let personas = [{
    id: 1,
    nombre: "sebastian",
    edad: 25,
    dni: 40513823,
    mail: "sebastiangioiose@gmail.com"
},
{
    id: 2,
    nombre: "hugo",
    edad: 73,
    dni: 6151023,
    mail: "hugogioiose@gmail.com"
},
{
    id: 3,
    nombre: "romina",
    edad: 42,
    dni: 28945213,
    mail: "rominagioiose@gmail.com"
},
{
    id: 4,
    nombre: "carmen",
    edad: 52,
    dni: 213057869,
    mail: "carmendasilva@gmail.com"
}]

//const app = http.createServer((req, res) => {
//    res.writeHead(200, {'Content-Type': 'application/json'})
//    res.end(JSON.stringify())
//})

/* GET */

app.get('/api/personas', (req, res) => {
    res.json(personas)
})

app.get('/api/personas/:id', (req, res) => {
    const id = Number(req.params.id)
    const persona = personas.find(persona => persona.id === id)


    if (persona) {
        res.json(persona)
    } else {
        res.status(404).end()
    }
})

/* DELETE */

app.delete('/api/personas/:id', (req, res) => {
    const id = Number(req.params.id)
    personas = personas.filter(persona => persona.id !== id)
    res.status(204).end()
})

/* ADD */ 

//app.post('/api/personas', (req, res) => {
//    const persona = req.body
//    const ids = personas.map(persona => persona.id)
//    const newPersona = {
//        id: 
//    }
//    
//    res.json(personas)
//})

const PORT = 3000
app.listen(PORT , () => {
    console.log(`server running on port ${PORT}`);
})
