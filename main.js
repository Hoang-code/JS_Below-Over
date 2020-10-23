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