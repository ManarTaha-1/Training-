//regular expression input form vaildation   
document.getElementById("register").onsubmit = function(){
    let phonInput= document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; //(1234) 567-4910
    let vaildationResult = phoneRe.test(phonInput);
    if(vaildationResult===true){
        window.alert("Succesful Input");
        return true;
    }
    else {
        window.alert("failed Input");
        return false;
    }
}