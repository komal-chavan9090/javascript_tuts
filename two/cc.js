//generate a random color

const RandomColor=function()
{
    const hex="0123456789ABCDEF";
    let color="#"

    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;

}
let interid
const startChange=function()
{
    interid=setInterval(changeBG,1000)
    function changeBG()
    {
        document.body.style.backgroundColor=RandomColor();
    }
}

const stopChange=function()
{
    clearInterval(interid);
}

document.querySelector("#start").
addEventListener('click',startChange)
document.querySelector("#stop").
addEventListener('click',stopChange)
