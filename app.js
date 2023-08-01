const reGen=document.querySelector('#regenerate')
const colorDivs=Array.from(document.querySelectorAll('.color'))
const colorPara=Array.from(document.querySelectorAll('.clr-name'))
const locks=Array.from(document.querySelectorAll('img'))
let isLocked=[0,0,0,0,0]


// console.log(locks[0])

init_clr()

//   1 3 5 7 9 


reGen.addEventListener('click',init_clr)

locks.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(item.src==='https://i.ibb.co/FW8nZtd/open-padlock.png')
        {
            item.src="https://i.ibb.co/hCCQ7KW/padlock.png"
            isLocked[getChildNumber(item)]=1
        }
        else
        {
            item.src="https://i.ibb.co/FW8nZtd/open-padlock.png"
            isLocked[getChildNumber(item)]=0
        }
    })
})






function init_clr()
{
    let i
    for(i=0;i<colorDivs.length;i++)
    {
        if(!isLocked[i])
        {
            let clr=generateRandom()
            colorPara[i].innerHTML=clr
            colorDivs[i].style.backgroundColor=clr
        }
    }
}

function generateRandom()
{
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    randomColor='#' + randomColor
    return randomColor
}

function getChildNumber(child)
{
    let index = Array.from(child.parentNode.parentNode.childNodes).indexOf(child.parentNode)
    return (index-1)/2
}

// console.log(window)

colorPara.forEach((item)=>{
    item.onclick = (e)=>{
        console.log(item.innerHTML)
        navigator.clipboard.writeText(item.innerHTML)
      }
    }
)