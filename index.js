const express = require("express")//require es unicamente de Node.js

const servidor = express()

const puerto = 80

//configuraciones de respuestas
//servidor.get( ACA VOY A CONFIGURAR QUE REPONDER ANTE UNA PETICIÓN GET )
//servidor.get("RUTA", acción)
servidor.get("/", function(request, response){
	
	response.send("index.html")

})
//servidor.post()
//sevidor.put()
//servidor.delete()

servidor.listen( puerto )

//sudo index.js
//como devolver el index.html que está en la carpeta docs
//como NO apagar y prender de nuevo el servidor ante cada cambio

