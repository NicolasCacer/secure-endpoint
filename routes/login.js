const express=require ("express");
const jwt = require('jsonwebtoken');

const router = express.Router();

router.use(express.urlencoded({ extended: true })); // para acceder al body
router.use(express.json());

router.post("/", (req,res) =>{
    try{
      const email=req.body.email;
      const password=req.body.password;

    // Validar que se proporcionen los parámetros obligatorios
      if (!email || !password ) {
        return res.status(400).json({ error: "Faltan parámetros obligatorios: email, password" });
      }

      if (email === "admin@admin.com" && password === "admin") {
        // Generar un token JWT con una clave secreta
        const token = jwt.sign({ email }, 'tu_secreto', { expiresIn: '1h' }); // Cambia 'tu_secreto' por tu clave secreta

        // Retornar el token en la respuesta
        return res.status(200).json({ message: 'Inicio de sesión exitoso', token });
      }
      // Crear objeto de usuario con los datos proporcionados
      const usuarioNuevo = {
        email,
        password
      };

      users.push(usuarioNuevo)
    
      // Retornar el objeto JSON con la información del usuario creado
      res.status(201).json(usuarioNuevo);

      } catch (error) {
        console.error(error)
        res.status(500).send(error)
      }
    
  });

module.exports = router;