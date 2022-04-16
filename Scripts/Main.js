var x = false;
const navbar = document.querySelector('.ChangeColor');
document.getElementById("myVideo").play();
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

ShowAccountMenu();
function ShowAccountMenu(){
    document.getElementById("NavbarId").style.display = "none";

    const collection2 = document.querySelectorAll('[id=EditProfile]');
    for (let index = 0; index < collection2.length; index++) {
        collection2[index].style.display = "none";
        
    }
}

function ShowHomePage(){
    if(x)ToggleEditPage();
    else{
        document.getElementById("NavbarId").style.display = "block";
        document.getElementById("AcountOverlay").style.display = "none";

    }


}
var y = false;
function ToggleEditPage(){
    y = !y;
    if (y){
        document.getElementById("EditProfileOverlay").style.display = "block";

    } else
        document.getElementById("EditProfileOverlay").style.display = "none";     
}

function ModifyAcount(){

    EditMode();
}


function EditMode(){
    x = !x;
    
    const collection = document.getElementsByClassName("ProfileImg");
    const collection2 = document.querySelectorAll('[id=EditProfile]');
    console.debug(collection[0]);
    for (let index = 0; index < collection.length; index++) {
       
        if (x)
        collection[index].classList.add('ChangeOpacity');
        else
        collection[index].classList.remove('ChangeOpacity');
    }

    for (let index = 0; index < collection2.length; index++) {
        if (x)
        collection2[index].style.display = "block";
        else
        collection2[index].style.display = "none";
        
    }
    if(x){

        document.getElementById("EditProfiletext").innerHTML = "Done";
        document.getElementById("HeaderInfo").innerHTML = "Manage Profiles:";
    }
    else{
        document.getElementById("EditProfiletext").innerHTML = "Profiel beheren";
        document.getElementById("HeaderInfo").innerHTML = "Wie kijkt er?";

    }
  
   
}