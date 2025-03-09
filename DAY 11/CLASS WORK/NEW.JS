let from=document.getElementById("UserFrom");

from.addEventListener("submit",(e)=>{
    e.preventDefault();

     let name=document.getElementById("name").value;
     let Email=document.getElementById("email").value;
     let phoneNumber=document.getElementById("PhoneNumber").value;
     let password=document.getElementById("password").value;
     let confirmPassword=document.getElementById("confirmPassword").value;
     let obj = {
        name, Email,phoneNumber,password,confirmPassword

     }
     if(obj.password!==obj.confirmPassword){
        return alert
     }
     let tr =document.createElement("tr")

      let td1 =document.createElement("td");
     td1.innerText=obj.name;

      let td2 =document.createElement("td");
     td2.innerText=obj.email;

     let td3 =document.createElement("td");
     td3.innerText=obj.phoneNumber;

     let td4 =document.createElement("td");
     td4.innerText=obj.password;

     let td5 =document.createElement("td");
     td5.innerText=obj.confirmPassword;
    tr.append(td1,td2,td3,td4,td5)
    document.getElementById("tbody").append(tr);

     
     
});