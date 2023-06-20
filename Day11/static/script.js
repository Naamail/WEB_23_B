console.log(document.cookie);

function displayForm() {
    if (document.cookie !="") {
        document.getElementById('SignInForm').style.display="none";
        document.getElementById('FormB').style.display='block   ';
        document.getElementById('userName').innerHTML=document.cookie;
    } else {
        document.getElementById('SignInForm').style.display="block";
        document.getElementById('FormB').style.display='none';
    }
    
};

displayForm();