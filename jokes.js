const display = document.getElementsByClassName("container");
const content = document.getElementById("joke");
const btn = document.getElementById("random");
let count = 0;
  btn.onclick = () => {
    count++;
      fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((json) => {
        content.innerHTML = `<p>${json.setup}</p>
                        <p>${json.punchline}<p>`;
                        console.log(json)
      });
  };
