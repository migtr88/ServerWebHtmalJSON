<!--Archivo main en el que se ejecuta node.js //-->
<!-- Arrancamos nuestro servidor HTTP desde aqui, aunque el codigo este en el archivo server.js //-->


<!--Importamos la funcion inciar() del archivo server.js para arrancar el servidor HTTP desde este archivo principal //-->
var server=require("./servidor");
<!--Inyectamos la funcion de ruteo en el servidor  //-->
var router=require("./router");
<!--Pasamos la lista de requestHandlers como un objeto inyectando en objeto en route() //-->
var peticionesHandle=require("./handlePeticiones")

var handle={}
handle["/"]=peticionesHandle.servirHTML;
handle["/sjson"]=peticionesHandle.servirJSON;
handle["/shtml"]=peticionesHandle.servirHTML;

server.inicio(router.route,handle);
