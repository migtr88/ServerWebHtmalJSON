var http=require("http");
var url=require("url");
	
<!--Para exportar la funcionalidad del servidor HTTP creada, se ha creado la funcion iniciar, la cual se exportara a otro archivo //--> 

function inicio(route, handle){
	function onRequest(request,reponse){
		var datosPosteados="";
		<!--Extraemos las diferentes partes de la URL que nos hacen falta //-->
  	    <!-- De esta manera podemos distinguir peticiones basadas en la ruta URL requerida //-->
  	    var pathname=url.parse(request.url).pathname;
  	     <!--Definimos que la informacion recibida este codificada en este formato  //-->
    	request.setEncoding("utf8");
    	 <!--Se añade un listener de eventos para el evento data cada vez que un trozo de informacion POST llega //-->
    	 request.addListener("data",function(fragPosteado){
    	 	datosPosteados+=fragPosteado;
    	 	console.log("Se ha recibido este trozo' "+fragPosteado+"'.");
    	 });
    	     <!--Pasamos la informacion POST al router cuando la hayamos obtenido toda y respondemos al navegador con el contenido que el handler ha devuelto via router //-->
    	      <!--Respondemos al navegador con el contenido que el handler ha devuelto via router //-->

    	     request.addListener("end",function(){
    	     	route(handle,pathname,reponse,datosPosteados);
    	     });
	}
	http.createServer(onRequest).listen(8898);
	console.log("Servidor en marcha");
}
<!--Exportamos la funcion inciar  //-->
exports.inicio=inicio;




