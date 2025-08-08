function getLivros(req, res){
    try{
        res.send('Olá mundo Puta que o paril, me livrei da maldição')
    }catch(error){
        res.status(500)
        res.send(error.message) 
    }
  }

  module.exports = {
    getLivros
};