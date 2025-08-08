const { Router } = require("express");
const { getLivros } = require("../controladores/livro");

const router = Router();

router.get('/', getLivros);

router.patch('/', (req, res) => {
    res.send('você fez uma requisição PATCH')});

router.post('/', (req, res) => {
    res.send('você fez uma requisição POST')});  
    
router.delete('/', (req, res) => {
    res.send('você fez uma requisição DELETE')});


module.exports = router;