const express=require ("express");
const router = express.Router();
const jwtMiddleware= require('../components/jwtMiddleWare');
const listaNom= [
    "ACERO GARCIA, SAMUEL",
    "ALJURI MARTINEZ, DAREK",
    "CEPEDA URIBE, JUAN FELIPE",
    "CHAVES PEREZ, ANA MARIA"
  ];

  router.use(jwtMiddleware);

  router.get("/",(req,res) => {

    res.send(listaNom);

  });


module.exports = router;
