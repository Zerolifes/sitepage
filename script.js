let pageNow = 0;
const pageMax = 6;

function nextPage()
{
    if (pageNow == pageMax) return;
    let elm = document.getElementsByClassName('frame-page')[pageNow];
    elm.style = "transform: rotateZ(90deg); opacity: 0; z-index: " + (pageMax-pageNow+1);
    pageNow++;
    document.getElementById('bookmarks').innerText = (pageNow+1) + '/' + (pageMax+1);
}

function prevPage()
{
    if (pageNow == 0) return;
    pageNow--;
    let elm = document.getElementsByClassName('frame-page')[pageNow];
    elm.style = "transform: rotateZ(0deg); opacity: 1; z-index: " + (pageMax-pageNow+1);
    document.getElementById('bookmarks').innerText = (pageNow+1) +  '/' + (pageMax+1);
}