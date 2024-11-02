const addButton=document.querySelector("#addBtn");
const main=document.querySelector("#main");

/*
<button id="addBtn">

    
    <i class="fas fa-plus"></i>  <---------yeah wala part uth ke aa gya hai or addbutton main chal gya hai..
    Add Note 


   </button>
*/


addButton.addEventListener
(
    "click",

    function()
    {
        addNote();
    }
);


/*
       <div class="note">
           <div class="tool">
               <i class="fas fa-trash"></i>
               <i class="fas fa-save"></i>
           </div>
           <textarea name="" id=""></textarea>
       </div>
*/    


const saveNotes=() =>
{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    // console.log(typeof(notes));
    const data=[];//<---initilise everything is empty;

    notes.forEach
    (
        (note) => data.push(note.value)
    )

    // console.log(typeof(data));
    // console.log(data);

    localStorage.setItem("notes",JSON.stringify(data));
};


const addNote=(text ="") => 
{
    const note=document.createElement("div");
    note.classList.add("note");
    /*
    <div class="note">  <------this is being add to the div ..
           
       </div>
    */
    note.innerHTML=
    `
    <div class="tool">
               <i class="trash fas fa-trash"></i>
               <i class="save fas fa-save"></i>
           </div>
           <textarea name="" id="">${text}</textarea>;
    `;


    //deleting the note;
    note.querySelector(".trash").addEventListener
    (
        "click",
        function()
        {
            note.remove();
            saveNotes();
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function()
        {
            saveNotes();
        }
    )

    note.querySelector("textarea").addEventListener(
        "focusout",
        function()
        {
            saveNotes();
        }
    )
    main.appendChild(note);
    saveNotes();
}


//ek aisa function banyege jo self load mtlb jaisi window khulegi woh waise hi load hoga
(
    function()
    {
      const lsnotes=JSON.parse(localStorage.getItem("notes"));
    //   console.log(lsnotes);
    lsnotes.forEach(
        (lsnote)=>
        {
          addNote(lsnote);
        }
    )
     if(lsnotes.length===0)
     {
        localStorage.removeItem("notes");
     }
     else
     {
        addNote();
     }
    
    }
) ();


