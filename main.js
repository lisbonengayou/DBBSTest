const ACCESS_TOKEN ="724a4nSGWPQAAAAAAAAAATY7bGngPswKQ18s_Ko4eFtsLrtVp_1YNKHe2IiJuPpF"

const stubsButton = document.querySelectorAll(".stubs");
  
stubsButton.forEach( stusbtn =>{
       stusbtn.addEventListener("click", () =>{
              alert("Not Implemented")
       })
})


function createRow({
  fileName,
  FileSize,
  ModificationDate,
}){
     
    
const  row = document.createElement("tr");
       row.className ="tr";

const  tdInput = document.createElement("td");
       tdInput.className = "td";

const  input = document.createElement("input");
       input.type = "checkbox";
       input.className = "boxes"

const  tdFileName = document.createElement("td"); 
       tdFileName.className = "td";

const  spanFileName = document.createElement("span");
       spanFileName.innerText = `${fileName}`;
       spanFileName.className = `spanName`

const  tdFileSize = document.createElement("td"); 
       tdFileSize.className = "td";
    
const  spanFileSize = document.createElement("span");
       spanFileSize.innerText = `${FileSize}`;

const  tdModifDate = document.createElement("td") ;
       tdModifDate.className = "td";

const  spanModifDate = document.createElement("span");
       spanModifDate.innerText = `${ModificationDate}`;


const  button = document.createElement("button");
        button.className ="btn";
        

const i = document.createElement("i")
      i.className = "fa fa-chevron-down"     

   
tbody.append(row)
 
row.append(tdInput)
row.append(tdFileName)
row.append(tdFileSize)
row.append(tdModifDate)

tdInput.append(input)

tdFileName.append(spanFileName)

tdFileSize.append(spanFileSize)

tdModifDate.append(spanModifDate)
tdModifDate.append(button)

button.append(i)
} 

function getbutton() {


  const contextmenuBtn = document.querySelectorAll(".btn");
  const menu = document.querySelector(".menu");
  const del = document.getElementById("delete");
  const rows = document.querySelectorAll(".tr");
   
  
      contextmenuBtn.forEach(btn =>{ 
             
          btn.addEventListener("click", () =>{
              const  coods = btn.getBoundingClientRect()
              menu.style.left = (coods.left-110) + "px"  
              menu.style.top = coods.bottom + "px"
              menu.style.display = "block" 
              

              
              const  td = btn.parentNode
              const  tr = td.parentNode
      
              removeActiveClasses()
      
              tr.classList.add("active")
             
          })
      })
      
       
      document.addEventListener("click", (event)=>{  
          if (event.target.className !== "fa fa-chevron-down" && event.target.className !== "boxes" ){
             menu.style.display = "none" 
            removeActiveClasses()                 
          } 
          
      })
      
      function removeActiveClasses(){
          rows.forEach(tr =>{
  
          removeRow()
  
          tr.classList.remove("active")
         
          
          })
           
      }
      
      const active = "tr active"
      const chActive = "tr chekboxActive active"
      
      function removeRow(){
       del.addEventListener("click", () =>{
           rows.forEach(tr => {
               if( tr.classList == active ){
                   tr.remove()               
               } else if(tr.classList == chActive){
                     tr.remove()
               }
           } )
       })
      }  
       
      };

function getBoxes() {
       const checkboxes = document.querySelectorAll("input");
   
           checkboxes.forEach(box =>{
               box.addEventListener("change", (e) => {
                 
                const td = e.target.parentNode
                const tr = td.parentNode
   
               if(box.checked == true){
                tr.classList.add("chekboxActive")
                }else {
                 tr.classList.remove("chekboxActive")
                }
   
               
               })
           })
   
       }

require('uniq');
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    const entries = response.result.entries;

    entries.forEach(data =>{
      const fileName = data.name;
      const FileSize = data.size;
      const ModificationDate = data.server_modified;
       
      createRow({
        fileName,
        FileSize,
        ModificationDate,
      })

      getbutton()
  
    })

    getBoxes()
  })
  .catch(function(error) {
    console.log(error);
  });


 