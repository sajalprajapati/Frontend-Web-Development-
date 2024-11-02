const plusbutton=document.querySelector("#plus");
const minusbutton=document.querySelector("#minus");
const valueChanging=document.querySelector('#number_shown_here');
var a=0;

valueChanging.append(a);

plusbutton.addEventListener
(
    "click",
    () =>
    {
        a++;
      valueChanging.textContent=a;
    }
);

minusbutton.addEventListener
(
    "click",
    () =>
    {
        try
        {
          if(a<-10)
          {
            throw new Error("you can't exceed the counter limit");
            
           }
           a=a-1;
           valueChanging.textContent=a;
        }
        
       catch(error)
       {
        console.log(error.message);
        alert(error.message);
       }

    }
)


/*
<div class="answer">
</div>
*/