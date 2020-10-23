function kiemtratongAB(){
    let a=Number(document.getElementById("soA").value)
    let b=Number(document.getElementById("soB").value)
    let total = a + b
    if (total < 4){
        document.getElementById("tong").innerText = "Bellow"
    } else{
        document.getElementById("tong").innerText = "Over"
    }
   
}

function kiemtraMessenger(){
    let messenger = document.getElementById("messenger").value
 
    if (messenger == "employee"){
        document.getElementById("addmessenger").innerText = "Hello"
    }else if (messenger == "director"){
        document.getElementById("addmessenger").innerText = "Greeting"
    }else if (messenger == " "){
        document.getElementById("addmessenger").innerText = "No login"
    } else{
        document.getElementById("addmessenger").innerText = "Bạn chưa nhập gì"
    }
}