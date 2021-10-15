window.addEventListener( "scroll", event=>{
    window.sessionStorage.setItem("scrollPos", window.scrollY);
})
if(sessionStorage.getItem("scrollPos")){
    window.scrollTo(0, sessionStorage.getItem("scrollPos"));
}