const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true })); // para acceder al body
router.use(express.json());

const jwtMiddleware= require('../components/jwtMiddleWare');

router.use(jwtMiddleware);

router.post("/", (req,res) =>{
    try{
      const text=req.body.text;

    // Validar que se proporcionen los parámetros obligatorios
      if (!text) {
        return res.status(400).json({ error: "Faltan parámetros obligatorios: text" });
      }

    // Devuelve el mismo texto que se recibió
      res.json({ text });

  

      } catch (error) {
        console.error(error)
        res.status(500).send(error)
      }
    
  });

module.exports = router;