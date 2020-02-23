var my_super_secret_api_key = "password"
document.addEventListener("DOMContentLoaded", function(event) {
    var input = document.getElementById('text')
    var button = document.getElementById('button')
    var main = document.getElementById('main')
    var img = document.getElementById('pokemon')
    console.log(input)
    console.log(button)
    button.addEventListener('click', function(event) {
        fetch("/test/" + input.value)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            img.setAttribute('src', json.results.sprites.front_default)
        })

        // fetch("/grabsomething", {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({"input": input.value})
        // }).then(function(response) {
        //     return response.json();
        // }).then(function(json) {
        //     img.setAttribute('src', json.results.sprites.front_default)
        // })
    })
});