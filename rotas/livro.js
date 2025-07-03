const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    try{
        res.send('Olá mundo Puta que o paril, me livrei da maldição')
    }catch(error){
        res.status(500)
        res.send(error.message) 
    }
  });

router.patch('/', (req, res) => {
    res.send('você fez uma requisição PATCH')});

router.post('/', (req, res) => {
    res.send('você fez uma requisição POST')});  
    
router.delete('/', (req, res) => {
    res.send('você fez uma requisição DELETE')});


module.exports = router;