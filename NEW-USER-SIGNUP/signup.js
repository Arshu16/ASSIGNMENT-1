// firstname
function validfname(){
    const fnameinput=document.getElementById('fname').value;
    const  regexfname=/^[A-Za-z]{5,15}$/;
    if(regexfname.test(fnameinput)){
        document.getElementById("Errfn").style.display="none";
        document.getElementById('fname').style.border='2px solid green';
    }
    else{
        document.getElementById("Errfn").style.display="block";
        document.getElementById('fname').style.border='2px solid red';
    }
}
// username
function validuname(){
    const unameinput=document.getElementById('uname').value;
    const  regexuname=/^[A-Za-z0-9]{5,12}$/;
    if(regexuname.test(unameinput)){
        document.getElementById("Errun").style.display="none";
        document.getElementById('uname').style.border='2px solid green';
    }
    else{
        document.getElementById("Errun").style.display="block";
        document.getElementById('uname').style.border='2px solid red';
    }
}
// email
function validemail(){
    const emailinput=document.getElementById('email').value;
    const  regexemail=/^[A-Za-z0-9]+@[A-Za-z.]+$/;
    if(regexemail.test(emailinput)){
        document.getElementById("ErrE").style.display="none";
        document.getElementById('email').style.border='2px solid green';
    }
    else{
        document.getElementById("ErrE").style.display="block";
        document.getElementById('email').style.border='2px solid red';
    }
}
//password
function validpassword(){
    const passwordinput=document.getElementById('password').value;
    const  regexpassword=/^(?=.*[A-Z])(?=.*[a-b])(?=.*[0-9])(?=.*[!@#$%&*-_+.,])[A-Za-z0-9-_!@#$%^*,.]{8,20}$/;
    if(regexpassword.test(passwordinput)){
        document.getElementById("ErrP").style.display="none";
        document.getElementById('password').style.border='2px solid green';
    }
    else{
        document.getElementById("ErrP").style.display="block";
        document.getElementById('password').style.border='2px solid red';
    }
}
// telephone number
function validtelph(){
    const telnoinput=document.getElementById('telephone').value;
    const  regextelno=/^[6-9]\d{9}$/;
    if(regextelno.test(telnoinput)){
        document.getElementById("ErrTno").style.display="none";
        document.getElementById('telephone').style.border='2px solid green';
    }
    else{
        document.getElementById("ErrTno").style.display="block";
        document.getElementById('telephone').style.border='2px solid red';
    }
}
//pancard number
function validpanCard(){
    const paninput=document.getElementById('panCard').value;
    const  regexpan=/^[A-Z]{5}\d{4}[A-Z]$/;
    if(regexpan.test(paninput)){
        document.getElementById("ErrPC").style.display="none";
        document.getElementById('panCard').style.border='2px solid green';
    }
    else{
        document.getElementById("ErrPC").style.display="block";
        document.getElementById('panCard').style.border='2px solid red';
    }
}