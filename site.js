//VAriaveis que referenciam a exibição do formulário
var appForm = document.querySelector("#app form");
var listaEl = document.querySelector("#app ul");

//Fazer a requisição uitlizando o objeto XMLHttpRequest
var xhttp = new XMLHttpRequest();
var url_base = 'https://api.github.com/';

var lista = [];

appForm.onsubmit = buscarRepo;

function buscarRepo(e){
	e.preventDefault();

	var user = document.getElementById("input_user").value;
	if(user.length === 0) {
		alert("Por favor, preencha o nome do usuário");
		return;
	}

	var url = url_base + 'users/' + user + '/repos';
	xhttp.open('GET', url);
	xhttp.send();

	xhttp.onreadystatechange = function(){
		if(xhttp.readyState === 4){
			if(xhttp.status === 200){
				var result = JSON.parse(xhttp.responseText);
				//console.log(result);

				lista = result.map(function(item){
					return { 
						name: item.name,
						open_issues_count: item.open_issues_count, 
						description: item.description,
						html_url: item.html_url,
						created_at: item.created_at,
						language: item.language
					};
				});
				renderLista();
			}
			else{
				alert('Falha ao buscar usuário. Tente novamente mais tarde.');
			}
		}
	}
}

function renderLista(){
	listaEl.innerHTML = '';

	for(item of lista){
		var nameEl = document.createElement('strong');
		nameEl.appendChild(document.createTextNode(item.name));

		var descriptionEl = document.createElement('p');
		descriptionEl.appendChild(document.createTextNode(item.description));

		var urlEl = document.createElement('a');
		urlEl.setAttribute('href', item.html_url);
		urlEl.setAttribute('target', '_blank');
		urlEl.appendChild(document.createTextNode(item.html_url));

		var createdEl = document.createElement('small');
		createdEl.appendChild(document.createTextNode(item.created_at));

		var openEl = document.createElement('small');
		openEl.appendChild(document.createTextNode(item.open_issues_count));

		var languageEl = document.createElement('small');
		languageEl.appendChild(document.createTextNode(item.language));

		var itemEl = document.createElement('li');
		itemEl.appendChild(nameEl);
		itemEl.appendChild(descriptionEl);
		itemEl.appendChild(urlEl);
		itemEl.appendChild(createdEl);
		itemEl.appendChild(openEl);
		itemEl.appendChild(languageEl);

		listaEl.appendChild(itemEl);
	}
}