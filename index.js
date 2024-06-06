/*var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        console.log(request.responseText);
    }
}
// Initialize a request
request.open('get', 'https://github.com/AliensoftGames/AwesomeCurlRequest')
// Send it
request.send()*/
import { Octokit, App } from "octokit";
const octokit = new Octokit({ 
    auth: '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'
  });

  await octokit.request("POST /repos/{owner}/{repo}", {
    headers:{
      "content-type": "text/plain"
    },
    owner: "AliensoftGames",
    repo: "AwesomeCurlRequest",
    title: "Created with the REST API",
    body: "This is a test issue created by the REST API",
  });