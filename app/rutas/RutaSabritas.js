const { Router } = require('express');
const router = Router();
const ControladorSabritas = require('../controlador/ControladorSabritas');

router.get('/',ControladorSabritas.indexSa )
       .post('/',ControladorSabritas.agregarSa)
       .get('/:key/:value',ControladorSabritas.buscarSa,ControladorSabritas.mostrarSa)
       .put('/:key/:value',ControladorSabritas.buscarSa,ControladorSabritas.actualizarSa)
       .delete('/:key/:value',ControladorSabritas.buscarSa,ControladorSabritas.eliminarSa);

module.exports=router;