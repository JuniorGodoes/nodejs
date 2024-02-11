const express = require('express')
router = express.Router()
const services = require('../services/services');


router.get('/teste', async (req, res) => {
    const testes = await services.getallteste()
    res.send(testes)
});


router.get('/', async (req, res) => {
    const users = await services.getallusers()
    res.send(users)
});

router.get('/:id', async (req, res) => {
    const user = await services.getuserid(req.params.id)
    if(user.length == 0){
        res.status(404).json('no record with given id: ' + req.params.id)
    }else{
        res.send(user)
    }
});

router.delete('/:id', async (req, res) => {
    const user = await services.deleteuserid(req.params.id)
    console.log(user)
    res.send('delete successfully')
    
});

router.post('/', async (req, res) => {
    await services.adduser(req.body)
    res.send('created successfully')
});

router.put('/:id', async (req, res) => {
    await services.updateuser(req.body, req.params.id)
    res.send('updated successfully')
});



module.exports = router;