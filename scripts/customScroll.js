let startScrollPos=0
let scrollState=0;
let manualScrolling=false;
document.requestFullscreen();
function windowScroll(direction){
    if(direction === 'UP'){
        removeEventListener( "scroll", scrollingFunction);
        window.scroll({
            left:0,
            top:startScrollPos+window.innerHeight,
            behavior:"smooth"
        })
        scrollState = startScrollPos+window.innerHeight;
        setTimeout(()=>{
            window.addEventListener("scroll", scrollingFunction);
        }, 500)
        if(startScrollPos < document.body.clientHeight){
            startScrollPos += window.innerHeight;
        }
    } else if (direction === 'DOWN'){
        removeEventListener("scroll", scrollingFunction);
        window.scroll({
            left:0,
            top:startScrollPos-window.innerHeight,
            behavior:"smooth"
        })
        scrollState = startScrollPos-window.innerHeight;
        setTimeout(()=>{
            window.addEventListener("scroll", scrollingFunction);
        }, 500)
        if(startScrollPos >= window.innerHeight){
            startScrollPos -= window.innerHeight;
            scrollState=startScrollPos;
        }
    } else if (direction === "EXTENSIVE"){
        //console.log(window.scrollY);
        let pages = [0], end=0, k;
        while (end < document.body.clientHeight){
            end+=window.innerHeight;
            pages.push(end);
        }
        for(k=0; k<pages.length-1; k++){
            if(window.scrollY > pages[k] && window.scrollY < pages[k+1]){
                removeEventListener("scroll", scrollingFunction);
                window.scroll({
                    left:0,
                    top:pages[k],
                    behavior:"smooth"
                })
                scrollState = pages[k];
                setTimeout(()=>{
                    window.addEventListener("scroll", scrollingFunction);
                }, 500)
                startScrollPos = pages[k];
            }
        }

    }
}
const scrollingFunction = event =>{
    //console.log(window.scrollY-scrollState);
    if(window.scrollY-scrollState > 0 && window.scrollY-scrollState <= 20){
        windowScroll('UP');
    } else if(window.scrollY-scrollState < 0 && window.scrollY-scrollState >= -20){
        windowScroll('DOWN');
    } else {
        windowScroll("EXTENSIVE");
    }
}
window.addEventListener("scroll", scrollingFunction) 
//window.addEventListener("scroll", event=>event.preventDefault())

/*const resizeBoxes = () => {
    let boxes = document.getElementsByClassName('box'), i;
    for (i=0; i<boxes.length; i++){
        boxes[i].style.height = window.innerHeight+"px";
    }
}
window.visualViewport.addEventListener('resize', resizeBoxes);*/
