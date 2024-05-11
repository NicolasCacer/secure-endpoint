const express=require ("express");

const router = express.Router();

const jwtMiddleware= require('../components/jwtMiddleWare');

router.use(jwtMiddleware);

router.get("/", async (req,res) => {
    try {
        const name = "Darek";
        const lastName = "Aljuri";
        const email = "darekaljuri@gmail.com";
        const birthday ="31/03/2005"

        const usuarioNuevo = {
            name,
            lastName,
            email,
            birthday
          };

        res.send(usuarioNuevo);

        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;