<!-- Manipulador de peticiones, determina las distintas respuestas en base a las distintas peticiones //-->
<!--En funcion al tipo de peticion requerida servir datos en formato html o JSON se responde de una manera u otra //-->


<!--Este función sirve los datos en formato html cuando la URL recibida sea localhost:8898/shtml //-->
function servirHTML(response,postData) {
  console.log("Manipulador de peticiones 'servirHTML' fue llamado.");

    var fs=require('fs');
    var texto=" ";
fs.readFile('ec.datos','utf8',
function(err,datos){
		if(err) {
			return console.log(err);
		};
		var filas=datos.split("\n");
		var array=new Array(15);
		for(var f in filas){
			var posicion=filas[f].split(" ");
			   var cadena=" Equipo: "+ posicion[0]+" "+posicion[1]+","
						+" Victorias: "+posicion[2]+","+
						" Derrotas: "+posicion[3]+","
						" Porcentaje de victorias: "+posicion[4];
		 array[f]=cadena;
		}
		for(var j=0;j<f;j++){
			texto=texto+"<P>"+array[j];
		}

     var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html;  charset=UTF-8" />'+
    '</head>'+  
    '<body>'+ '<h2>Clasificación de la conferencia este </h2>'+
    texto+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

	});





}
<!--Este función sirve los datos en formato JSON cuando la URL recibida sea localhost:8898/shtml //-->


function servirJSON(response,dataPosteada) {
  console.log("Manipulador de peticiones 'servirJSON' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  var fs=require('fs');
fs.readFile('ec.datos','utf8',
function(err,datos){
		if(err) {
			return console.log(err);
		};
		var filas=datos.split("\n");
		var array=new Array(15);
		for(var f in filas){
			var posicion=filas[f].split(" ");
			   var cadena=" Equipo: "+ posicion[0]+" "+posicion[1]+","
						+" Victorias: "+posicion[2]+","+
						" Derrotas: "+posicion[3]+","
						" Porcentaje de victorias: "+posicion[4];
		 array[f]=cadena;
		}
		var oJSON={"Posicion 1":array[0],"Posicion 2":array[1],"Posicion 3":array[2],"Posicion 4":array[3],"Posicion 5":array[4],"Posicion 6":array[5],
		"Posicion 7":array[6],"Posicion 8":array[7],"Posicion 9":array[8],"Posicion 10":array[9],"Posicion 11":array[10],"Posicion 12":array[11],
		"Posicion 13":array[12],"Posicion 14":array[13],"Posicion 15":array[4]};
		console.log(oJSON);

    response.writeHead(200, {"Content-Type": "text/html"});
  
    var texJSON=JSON.stringify(oJSON);
   
    texJSON="Clasificación de la Conferencia Este de la NBA  <P> "+texJSON;
    response.write(texJSON);
  
  response.end();


	});

  }

exports.servirHTML = servirHTML;
exports.servirJSON = servirJSON;



