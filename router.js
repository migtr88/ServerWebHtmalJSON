
<!--Modulo que en base a las peticiones que recibe decide que código ejecutar  //-->

function route(handle,pathname,response,postData){
	console.log("Encaminado una peticion para "+pathname);
	<!--Necesitamos examinar la peticion HTTP recibida y extraer la URL requerida y los parametros GET/POST para ver que respuesta dar//-->
	if(typeof handle[pathname] === 'function'){
		  	<!-- Le pasamos al handler los datos posteados //-->

		return handle[pathname](response,postData);
	}else{
		response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
	}
}
exports.route=route;









