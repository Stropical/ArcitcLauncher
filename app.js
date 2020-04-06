const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();

var uuid = null;

var json = {
  "packs": {
      1 : {
          "url" : "https://www.dropbox.com/s/mfr71wywtiin7f8/%5BARTK%5D%20-%20ArtikCraft.zip?dl=1",
          "root" : "./minecraft/[ARTK]  - ArtikCraft",
          "version" : "1.12.2",
          "forge" : "./minecraft/[ARTK]  - ArtikCraft/forge/forge-1.12.2-14.23.5.2847-universal.jar"
      },
      2 : {
          "url" : "www",
          "root" : "./minecraft/[ARTK]  - SolarPack",
          "version" : "1.12.2",
          "forge" : "./minecraft/[ARTK]  - SolarPack/forge/forge-1.12.2-14.23.5.2847-universal.jar"
      },
      3 : {
          "url" : "www",
          "root" : "./minecraft/[ARTK]  - LightWave",
          "version" : "1.12.2",
          "forge" : "./minecraft/[ARTK]  - ArtikCraft/forge/forge-1.12.2-14.23.5.2847-universal.jar"
      },
  }
}

start();
console.log("App.js loaded")


function start() {
  console.log("Starting");
}

function setUUID(value) {
  uuid = value;
}

function getUUID() {
  return uuid;
}

var getDefinitions = function() {
  return new Promise(function(resolve) {
      resolve(ContactManager.request("definition:entities"));
  });
}

var definitions = getDefinitions()

function smoothFade(max) {
  console.log("fading")
  var i = 0;
  
  while (i < max) {
    console.log("while")
    setTimeout(
      i = add(i), 1000);
  }
}

function add(i) {
  console.log("add")
  return i = i + 1
  
}

function loginTest() {
    
  var loginOK = false;

    var user = document.getElementById('exampleInputEmail1').value;
    var pass = document.getElementById('exampleInputPassword1').value;
    var prom = Authenticator.getAuth(user, pass);
    console.log("Promise: ");
    prom.then(function(value) {
      console.log(value);
      if (value == null) {
        console.log("Null vlaue");
        
      } else {
        console.log("Filled Value " + value.uuid + " " + user);
        localStorage.setItem("uuid", value.uuid);
        localStorage.setItem("user", value.name);
        localStorage.setItem("email", user);
        localStorage.setItem("pass", pass);
        loginOK = true;
      }
      // expected output: "Success!"
    });

    setTimeout(function(){
      
      if(loginOK){
        console.log("Login Good!")
        window.location.href = "index.html";
        
      } else {
        console.log("Login Bad!")
      }

    },1000);

    
    
}


