import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

//instanciar la clase Server
const server = new Server()

//agregar las rutas
server.app.use('/api', router)

// escuchar el puerto correspondiente
server.listen()