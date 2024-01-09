function timex(){
    let d=new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
    let t=document.getElementById("time");
    t.innerHTML=document.write(h+":"+m+":"+s)
}