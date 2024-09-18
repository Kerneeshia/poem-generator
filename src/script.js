function displayPoem(response) {

    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",

    });
}

function getPoem(event){
    event.preventDefault();

let apiKey ="a3460f11d3801ff9feb7c65d8btoaadb";
let userInstruction = document.querySelector("#user-instruction");
let context="you are a creative and romantic poet that writes the most beautiful poems about every topic in life or abstract. Make sure to adhere to user prompts. Make sure to put the title of the poem in its own line at the top of the poem and the poem should consist of a maximum of three stanzas";
let prompt=`Generate a beautiful poem based on the ${userInstruction.value} entered`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);

}

let submitTopic = document.querySelector("#generate-poem");
submitTopic.addEventListener("submit", getPoem)