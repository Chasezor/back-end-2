const express = require('express')
const control = require('./controller')
const cors = require('cors')


const app = express();

app.use(express.json())
app.use(cors())


app.get('/api/houses', control.getAllHouses)
app.post('/api/houses', control.createHouse)
app.put('/api/houses/:id', control.updateHouse)
app.delete('/api/houses/:id', control.deleteHouses)


app.listen(4004)
console.log("running on port 4004") 