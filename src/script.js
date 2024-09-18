function displayPoem(response){
    let poemElement = document.querySelector("#poem");
    // poemElement.innerHTML=response.data.answer;

alert(response.data.answer);
}

function getPoem(event){
    event.preventDefault();

let apiKey ="a3460f11d3801ff9feb7c65d8btoaadb";
let context="you are an AI assistant that generates the most beautiful poems about every topic in life based on the request of the user";
let prompt="Generate a beautiful poem based on the requested topic entered by the user";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);

}

let submitTopic = document.querySelector("#generate-poem");
submitTopic.addEventListener("submit", getPoem)