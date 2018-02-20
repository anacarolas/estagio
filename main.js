var eSamantha = document.getElementById("email");
var websiteContainer = document.getElementById("websites");
var hemiSulContainer = document.getElementById("hemiSul");

var dados = [];

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
ourRequest.onload = function(){
	dados = JSON.parse(ourRequest.responseText);
	renderHTML(dados);
	mostrarHTML(dados);
	showHTML(dados);
};
ourRequest.send();


function renderHTML(wsite){
	var allWebsites = "";
	
	for (i = 0; i < wsite.length; i++){
		allWebsites += '<tr>';
		allWebsites += '<td>' + wsite[i].name + '</td>'; 
		allWebsites += '<td>' + wsite[i].website + '</td>'; 
		allWebsites += '</tr>';
	}
	
	websiteContainer.innerHTML = allWebsites;
	
}


function mostrarHTML(samantha){
	var emailSa = "";
	
	for(i = 0; i < samantha.length; i++){
		if(i == 2){
			emailSa += samantha[i].email;
		}
	}
	
	eSamantha.innerHTML = emailSa;
}


function showHTML(total){
	
	var qtd = 0;
	
	for (i = 0; i < total.length; i++){
			if((total[i].address.geo.lat <= 0) && (total[i].address.geo.lat >= -90)){
				qtd++;
			}
		
	}
	
	hemiSulContainer.innerHTML = qtd;

}
