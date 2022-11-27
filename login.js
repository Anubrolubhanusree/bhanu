function validate(){
      var username=document.getElementById("username").nodeValue;
      var passcode=document.getElementById("passcode").nodeValue;
      if(username=="admin"&&passcode=="user")
      {
        alert("login succesfully");
        return false;
      }
      else{
        alert("login failed");
      }
}
