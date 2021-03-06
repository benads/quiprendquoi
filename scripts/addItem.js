let partyUrlId = document.querySelector("#btn").getAttribute("data-url");

const url = `https://quiprendquoi-api.benjaminadida.fr/party/${partyUrlId}`;

document.querySelector("#btn").addEventListener("click", function(e) {
	fetch(`${url}/items`, {
		method: "post",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: document.querySelector("#name").value,
			user: document.querySelector("#user").value,
		}),
	})
		.then(() => {
			document.querySelector(".lds-ellipsis").classList.remove("none");
			document.querySelector(".lds-ellipsis").classList.add("isVisible");
		})
});
