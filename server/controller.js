const houses = require('./db.json')
let houseID = 4

module.exports = {

getAllHouses: (req, res) =>{
    res.status(200).send(houses)
    },

  createHouse: (req, res) =>{
    const {address, price, imageURL} = req.body
    newHouse ={
        address,
        price,
        imageURL,
        id: houseID
    }
    houses.push(newHouse)
    res.status(200).send(houses)
    houseID++
    },
    
    updateHouse: (req, res) =>{

        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex(ele => +ele.id === +id)

        if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        }
        else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }else{
            res.status(400).send('Something went wrong')
        }
    },

    deleteHouses: (req, res) =>{
        let index = houses.findIndex(ele => ele.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
}