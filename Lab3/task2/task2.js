const input = document.getElementById("task")  
const adder = document.getElementById("adder")
const list = document.getElementById("list")
        
adder.addEventListener("click", addToList)

      function addToList(){
          if(input.value === "") return 
          const task = document.createElement("li")


          const deleter = document.createElement("button")
          const checker = document.createElement("input")

          deleter.type = "button"
          deleter.className = "del"
          deleter.innerHTML = "delete"

          checker.type = "checkbox"
          checker.className = "check"

          task.appendChild(checker)
          task.appendChild(document.createTextNode(input.value));
          task.appendChild(deleter)
          
          list.appendChild(task)
          
          input.value=""
          
          const del = document.querySelectorAll(".del")

          for(let i =0; i< del.length; i++){
              del[i].addEventListener("click", function(){
                  list.removeChild(this.parentElement)
              })
          }

          const completer = document.querySelectorAll(".check")
          for(let i =0; i< completer.length; i++){
              completer[i].addEventListener("click", function(){
                   if(this.checked){
                        this.parentElement.style.backgroundColor = "#8BC34A"
            
                   }else{
                    this.parentElement.style.backgroundColor = "#f4f4f4";
                   }

                  
              })
          }

      }
     