import "./styles.css";

document.getElementById("add-comment").addEventListener('click', AddUnsortList)
document.getElementById("remove-comments").addEventListener('click', RemoveAllComments)

function AddUnsortList() {
        var ul = document.getElementById("UnsortList");
        var textare = document.getElementById("textare");                    
        ul.innerHTML += '<li>' +textare.value +' </li>';        
      };

      function RemoveAllComments() 
      {  
        if (confirm("Do you really wants to delete all the comments?") == true) 
        {
          var ul = document.getElementById("UnsortList");
          ul.innerHTML = '';
        } 
        else {}
      };




