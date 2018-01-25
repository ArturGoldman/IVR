 var config = {
    apiKey: "AIzaSyBsFPcD1c9_c7pVaQCrAuLN6xJg6UAnS_o",
    authDomain: "incase-13595.firebaseapp.com",
    databaseURL: "https://incase-13595.firebaseio.com",
    projectId: "incase-13595",
    storageBucket: "incase-13595.appspot.com",
    messagingSenderId: "13492183513"
  };
  firebase.initializeApp(config);
  
 

 var dbRefObject = firebase.database().ref().child('Cases');
 
 dbRefObject.on('child_added', function(snapshot) {
	var addPost = snapshot.val();
	
	$("#cont_body").append("<div class = " + '"panel panel-default"' +
	"><div class = "
	+'"panel-heading"'+" ><h2><a data-toggle = "+'"collapse"'+" href = "+'"'+
	"#uslov"+addPost.Номер+'"'+">"+ addPost.Название +"</a></h2></div><div id = "+
	'"'+"uslov"+addPost.Номер+'"'+" class = "+'"panel-collapse collapse"'+
	"><div class = "+'"panel-body"'+"><h4>Условие: </h4><p> "+addPost.Условие+
	"</p><h4>Область познания: </h4>"+addPost.Область+"<h4> Проблема: </h4>"+ addPost.Проблема+"<div class = "+
	'"panel panel-default"'+ "><div class="+'"panel-heading"'+" ><h4 class = "+'"panel-title"'+"> <a data-toggle = "+'"collapse"'+" href = "+'"'+"#anse"+addPost.Номер+'"'+
	">Указания / решение:</a></h4></div> <div id = "+'"'+"anse"+addPost.Номер+'"'+" class = "+'"panel-collapse collapse"'+"><div class = "+'"panel-body"'+"> "
	+addPost.Ответ+"</div></div></div></div></div>");
	
 });