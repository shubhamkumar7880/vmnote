let notebtn=document.getElementById('notebtn');
const dot=document.getElementById('dot');
const option=document.getElementById('option');
const up=document.getElementById('up')
showNotes();

//Event listener
notebtn.addEventListener('click', e => {
let addTxt=document.getElementById('addTxt');
let adTitle=document.getElementById('adTitle');
let notes=localStorage.getItem('notes');
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
let myObj= {
    title: adTitle.value,
    text: addTxt.value
}
notesObj.push(myObj);
localStorage.setItem('notes',JSON.stringify(notesObj));
addTxt.value="";
adTitle.value="";

showNotes();
});

// function to show notes
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    
    let html="";
    notesObj.forEach(function(element, index){
        html +=`
        <div class="note-container">
          <div class="note" id="note">
            <div class="note-title" id="note-title">
              <h4>${element.title}</h4>
            </div>
            <div class="text" id="text">
              <p>${element.text}</p>
            </div>
          </div>
          <button id="${index}" onclick="deleteNote(this.id)" class="delete">Delete Note</button>
          </div>
        `;
    }); 
    let noteElm=document.getElementById('DOM');
    if(notesObj.length != 0 ){
        noteElm.innerHTML=html;
    }
    else{
        noteElm.innerHTML=`Nothing to show! Use "Add Note" section above to add notes.`;
    }   

}

// function to delete node
function deleteNote(index){
    console.log()
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById('up');
search.addEventListener("input", e => {
let inputVal=search.value.toLowerCase();
let noteCard=document.getElementsByClassName('note-container');
Array.from(noteCard).forEach(function(element){
   let cardText=element.getElementsByTagName("p")[0].innerText;
   if(cardText.includes(inputVal)){
       element.style.display="block";
   } 
   else{
       element.style.display="none";
   }
})
});