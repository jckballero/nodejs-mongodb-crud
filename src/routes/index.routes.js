const { Router } = require('express');
const router = Router();

const { renderIndex, renderAbout } = require('../controllers/index.controller') //importando las rutas renderizadas de index y about

router.get('/', renderIndex);

router.get('/about', renderAbout);

module.exports = router;