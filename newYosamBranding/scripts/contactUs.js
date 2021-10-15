const contactUs = event => {
    let end=0, pages=[0];

    while (end < document.body.clientHeight){
        end+=window.innerHeight;
        pages.push(end);
    }

    removeEventListener("scroll", scrollingFunction);
    window.scroll({
        left:0,
        top:pages[pages.length-1],
        behavior:"auto"
    })
    scrollState = pages[pages.length-1];
    setTimeout(()=>{
        window.addEventListener("scroll", scrollingFunction);
    }, 500)
    startScrollPos = pages[pages.length-1];

}


