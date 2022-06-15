const params = new URLSearchParams();
    params.append('q', 'Hello, world');
    params.append('source', 'en');
    params.append('target', 'es');
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

const options = {
	method: 'POST',
	headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
	},
	body: params
};

fetch('https://libretranslate.com/translate', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
