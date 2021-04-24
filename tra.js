function update() {
    var date=new Date()
    var setime=document.getElementById("settime")
  setime.innerHTML=date.getHours() +":"+date.getMinutes()+":"+date.getSeconds()
   var setdate=document.getElementById("setdate")
    setdate.innerHTML=date.getDate()+"/"+parseInt(date.getMonth() +1 )+"/"+date.getFullYear()
}
setInterval(update,500)
onload=update()

function pagecolor(){
    var pagecolor=document.getElementById("setcolor").value
    localStorage.setItem("color",pagecolor)
    document.getElementById("body").style.background=pagecolor
}
function timecolor(){
    var timecolor=document.getElementById("setcolor1").value
    localStorage.setItem("color1",timecolor)
    document.getElementById("time").style.color=timecolor
}
function timebcolor(){
    var timebcolor=document.getElementById("setcolor2").value
    localStorage.setItem("color2",timebcolor)
    document.getElementById("time").style.background=timebcolor
}
function datecolor(){
    var datecolor=document.getElementById("setcolor3").value
    localStorage.setItem("color3",datecolor)
    document.getElementById("date").style.color=datecolor
}
function datebcolor(){
    var datebcolor=document.getElementById("setcolor4").value
    localStorage.setItem("color4",datebcolor)
    document.getElementById("date").style.background=datebcolor
}

function settcolor(){
    document.getElementById("body").style.background=localStorage.getItem("color")
    document.getElementById("time").style.color=localStorage.getItem("color1")
    document.getElementById("time").style.background=localStorage.getItem("color2")
    document.getElementById("date").style.color=localStorage.getItem("color3")
    document.getElementById("date").style.background=localStorage.getItem("color4")

}
setInterval(settcolor,50)