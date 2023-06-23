let game = document.getElementById("game")
let btn = document.getElementById("btn")
let selectPic = [];
let items =["Doberman", "Golden", "Husky", "Rotveiller", "Pitbull", "Chixuaxua"];
items = items.concat(items)    ///   (items) i items array ine birlesdirir
items.sort(()=> Math.random() - 0.5)
let all = 0;
let plus = 200;
let minus = 100;
document.getElementById("scor").innerText=`Score  ${all}`



items.map((item) =>{
    game.innerHTML += `  <div class="card">
    <div class="cardin">
    <div class="thefront"><img src="./image/${item}.jpg" alt="off"/></div>
    <div class="theback"><img src="./image/download.png" alt="off"/></div>
    </div>
    </div>`
});



     window.addEventListener("load", ()=>{
         [...document.querySelectorAll(".card")].map(pick=>{
             
                 pick.classList.add("open")
                 setTimeout(()=>{
                     pick.classList.remove("open")
                    }, 1000)
                    
                })
                
            });
            
            btn.addEventListener("click", ()=>{
             window.location.reload(true)
            });
            
            
            [...document.querySelectorAll(".card")].map((pick)=>{
                pick.addEventListener("click", ()=>{
                    pick.classList.add("open")
       selectPic.push(pick)
       if(selectPic.length === 2){
           if(selectPic[0].querySelector("img").src === selectPic[1].querySelector("img").src ){
            //    [...document.querySelectorAll(".open")].map(a=>a.classList.add("ope"))
            all += plus
            selectPic[0].classList.add("matched")
            selectPic[1].classList.add("matched");
           if([...document.querySelectorAll(".matched")].length -1 === 11){
               document.getElementById("win").style.display ="flex"
               document.getElementById("win").innerHTML=`<span>You win</span><span>Your score: ${all}</span>`
           }
           document.getElementById("scor").innerHTML=`Score  ${all}`
        }else{
            all -= minus
            setTimeout(()=>{
                 [...document.querySelectorAll(".open:not(.matched)")].map((a)=>
                 a.classList.remove("open"))
                // document.querySelectorAll(".open")[0].classList.remove("open")
                // document.querySelectorAll(".open")[0].classList.remove("open")
                document.getElementById("scor").innerText=`Score  ${all}`
            }, 800)
        }
        selectPic = []
       }
    })
})
