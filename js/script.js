document.getElementById('send-request').addEventListener('click', function () {
    var selectedApi = document.getElementById('api-select').value;
    var url = '';
    var requestBody = null;

    if (selectedApi === 'get') {
        url = 'https://f3232543-1862-4342-8b81-3a9e20aeae12.mock.pstmn.io/cars/1';
    } else if (selectedApi === 'post') {
        url = 'https://f3232543-1862-4342-8b81-3a9e20aeae12.mock.pstmn.io/cars';
        requestBody = JSON.stringify({
            "carBrand": "Audi",
            "carModel": "TT"
        });
    }

    var xhr = new XMLHttpRequest();
    xhr.open(selectedApi.toUpperCase(), url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                var responseText = xhr.responseText;
                document.getElementById('response').textContent = responseText;
            } else {
                document.getElementById('response').textContent = 'Помилка запиту: ' + xhr.status;
            }
        }
    };

    xhr.send(requestBody);
});