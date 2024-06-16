let diafaneies=0;
plhrofories()

function plhrofories()
{
    let i;
    let slides= document.getElementsByClassName("slider");
    let bullets= document.getElementsByClassName("bullets");
    for (i=0; i<slides.length; i++)
    {
        slides[i].style.display="none";
    }
    diafaneies++
    if (diafaneies>slides.length)
    {
        diafaneies=1
    }
    for (i=0; i<bullets.length; i++)
    {
        bullets[i].className=bullets[i].className.replace("active");
    }
    slides[diafaneies-1].style.display="block";
    bullets[diafaneies-1].className+="active";
    setTimeout(plhrofories, 2000);
}