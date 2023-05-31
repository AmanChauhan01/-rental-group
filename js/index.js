$(document).ready(function(){
    $(".about-wrap4 .row .col-md-4 a").click(function(e){
        e.preventDefault();
        var x=$(this).attr("href");
        $("body,html").animate({
            "scrollTop":$(x).offset().top
        })
    })
})

window.addEventListener("load", function(){
    this.setTimeout(function(){
      document.querySelector(".pop-up").style.display="block";
      document.querySelector("body").style.overflow="hidden";
      document.querySelector(".opecity").style.opacity="0.5"
    },2000)
})
document.querySelector(".cut").addEventListener("click", function(){
    document.querySelector(".pop-up").style.display="none";
    document.querySelector("body").style.overflow="auto";
    document.querySelector(".opecity").style.opacity="1"
})