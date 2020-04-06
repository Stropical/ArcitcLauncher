const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();

var user = window.localStorage.getItem("user");
var pass = window.localStorage.getItem("pass");
var uuid = window.localStorage.getItem("uuid");
var email = window.localStorage.getItem("email");
var java_ver = window.localStorage.getItem("java_version");

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


setTimeout(function(){
    document.getElementById("avatar").src = "https://crafatar.com/renders/head/" + uuid;
    document.getElementById("user-name").innerHTML = user;
    document.getElementById("jver").innerHTML = java_ver;
  },20);









  function test(pack) {
    console.log("Minecraft Being Launched")
    //document.getElementById('main').style = "filter: blur(" + smoothFade (5) + ")";
    var user = window.localStorage.getItem("email");
    var pass = window.localStorage.getItem("pass");
    var ram =  document.getElementById("ram").value; //document.getElementById('ram').value;
   
    console.log("Username: " + user + " Password: " + pass + " with RAM: " + ram)
  
    launchPack(user, pass, ram, pack)
  }
  
  function closeApp() {
    process.exit();
    indx.getApp().quit();
  }
  
  
  
  function launchPack(username, password, ram, pack) {
  
    console.log("Launching!");
    console.log(json.packs);
    let opts = {
        clientPackage: null,
        clientPackage: json.packs[pack].url,
        // For production launchers, I recommend not passing 
        // the getAuth function through the authorization field and instead
        // handling authentication outside before you initialize
        // MCLC so you can handle auth based errors and validation!
        authorization: Authenticator.getAuth(username, password),
        root: json.packs[pack].root,
        os: "windows",
        javaPath: "",
    
        url: {
            meta: "https://launchermeta.mojang.com", // List of versions.
            resource: "https://resources.download.minecraft.net", // Minecraft resources.
            mavenForge: "http://files.minecraftforge.net/maven/", // Forge resources.
            defaultRepoForge: "https://libraries.minecraft.net/", // for Forge only, you need to redefine the library url
                                                                 // in the version json.
            fallbackMaven: "https://search.maven.org/remotecontent?filepath="
        },
    
        version: {
            number: json.packs[pack].version,
            type: "release",
        },
    
        forge: json.packs[pack].forge,
    
        memory: {
            max: ram,
            min: ram,
        }
        
    }
  
    launcher.launch(opts);
  
    launcher.on('debug', (e) => {
      console.log(e)
      //document.getElementById('log').innerHTML = e
    });
    launcher.on('data', (e) => {
      console.log(e)
      //document.getElementById('log').innerHTML = e
    });
  
  }