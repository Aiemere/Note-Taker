document.addEventListener("DOMContentLoaded", () => {
    let addBtn = document.querySelector("#btnAdd");
    let section = document.querySelector("section");
    let textarea = document.querySelector("#textarea");
    let textarea1 = document.querySelector("#textarea1");
    let modalContainer = document.querySelector("#myModal");
    let close = document.querySelector("#close");
    let noteBoard = document.querySelector(".noteBoard");
    let para1 = document.querySelector("#para1");
    let headPara = document.querySelector("#headPara");
    let header = document.querySelector("header");
    let clearBtn = document.querySelector("#btnClear")
    let x = 0 
    let xArray = []

    function addButton(){
        // empty field alert 
        if(textarea.value == "" && textarea1.value == ""){
           let spanAlert = document.createElement("span");
           spanAlert.style.color = "red";
           spanAlert.innerHTML = "Please enter field"
           header.appendChild(spanAlert);
           setTimeout(() =>{
            spanAlert.remove()
           }, 1000)
        }else{
            x++
            addBtn.value
            let divContainer1 = document.createElement("div")
            divContainer1.setAttribute("id", "divC1")
            let divContainer2 = document.createElement("div")
            divContainer2.setAttribute("id", "divC2")
            let modalContainer2 = document.createElement("div")
            modalContainer2.setAttribute("class", "modalContainer2")
            modalContainer2.setAttribute("id", "myModal2")
            let modalContent2 = document.createElement("div")
            modalContent2.setAttribute("class", "modalContent2")
            modalContainer2.appendChild(modalContent2)
            let close2  = document.createElement("span")
            close2.setAttribute("id", "close2")
            close2.innerHTML = "&times;"
            let content = document.createElement("div")
            content.setAttribute("id", "content")
            modalContent2.appendChild(close2)
            modalContent2.appendChild(content)
            
            let input = document.createElement("textarea")
            input.setAttribute("class", "input")
            let input1 = document.createElement("textarea")
            input1.setAttribute("class", "input")
            let img = document.createElement("img");
            let para2 = document.createElement("p");
            para2.setAttribute("id", "para2");
            para2.innerHTML = "Delete"
            let para3 = document.createElement("p");
            para3.setAttribute("id", "para3");
            para3.innerHTML = "Edit"
            content.appendChild(para2);
            content.appendChild(para3);
            img.setAttribute("src","src/images/3 horizontal dots.svg");
            img.setAttribute("id", x)
            let div = document.createElement("div");
            div.setAttribute("id", x);
            div.setAttribute("class", "noteContainer");
            let span = document.createElement("p");
            span.setAttribute("id","spanId")    
            span.innerHTML= textarea1.value
            
            let modalText = textarea.value
            let modal1Text = textarea1.value
            let noteSpan = document.createElement("p");
            noteSpan.setAttribute("id","spanId2");
            noteSpan.innerHTML = textarea.value
            let viewButton = document.createElement("button");
            viewButton.setAttribute("type", "button");
            viewButton.setAttribute("id", "viewId")
            viewButton.innerHTML = "View More"
            
            div.appendChild(divContainer2)
            div.appendChild(divContainer1)
            divContainer1.appendChild(span);
            divContainer1.appendChild(noteSpan)
            divContainer1.appendChild(viewButton);
            divContainer2.appendChild(img)
            divContainer2.appendChild(modalContainer2)
            noteBoard.appendChild(div);
            textarea.value = ""
            textarea1.value = ""
            if(document.querySelectorAll(".noteContainer").length === 1) {
                clearBtn.style.display = "block"
            }
            //view more button event handler
            viewButton.addEventListener("click", () => {
                modalContainer.style.display = "block"
                para1.innerHTML = modalText
                para1.style.fontSize = "18px"
                para1.style.marginLeft = "7px"

                headPara.innerHTML = modal1Text
                headPara.style.fontSize = "18px"
                headPara.style.marginLeft = "7px"
                xArray.push(x)
      
              })
            
            
            //3 horizontal dots button
            img.addEventListener("click", () => {
                let imgId = img.getAttribute("id")
                let divId = div.getAttribute("id")
                if(imgId === divId) {
                 modalContainer2.style.display = "block"
                 img.style.zIndex = "-1"
                }
                
            })
             //delete button event handler
            para2.addEventListener("click", () => {
              div.remove()
              modalContainer2.remove()
    
    
            })
            //edit button event handler
            para3.addEventListener("click", () => {
                noteSpan.parentNode.replaceChild(input, noteSpan)
                span.parentNode.replaceChild(input1, span)
                input.innerHTML = modalText
                input1.innerHTML = modal1Text

                modalContainer2.style.display = "none"
                img.style.visibility = "hidden"
                
            });
            //modal2 close button
            close2.addEventListener("click", () => {
                modalContainer2.style.display = "none"
                img.style.display = "block"
            })
            //enter edit value event handler
            div.addEventListener("dblclick", () => {
                let inputValue = input.value
                let input1Value = input1.value
                if(inputValue === "" && input1Value === ""){
                    //empty field alert
                    let spanAlert = document.createElement("span");
                    spanAlert.style.color = "red";
                    spanAlert.innerHTML = "Please enter field"
                    header.appendChild(spanAlert);
                    setTimeout(() =>{
                        spanAlert.remove()
                    }, 1000)
                } else{
                    let inputValue = input.value
                    let input1Value = input1.value
                    noteSpan.innerHTML = inputValue
                    span.innerHTML = input1Value
                    input.parentNode.replaceChild(noteSpan, input)
                    input1.parentNode.replaceChild(span, input1)
                    viewButton.addEventListener("click", () => {
                        modalContainer.style.display = "block"
                        para1.innerHTML = inputValue
                        para1.style.fontSize = "18px"
                        para1.style.marginLeft = "7px"

                        headPara.innerHTML = input1Value
                        headPara.style.fontSize = "18px"
                        headPara.style.marginLeft = "7px"
              
                      })
                      img.style.visibility ="visible"
                }
            })
            
        }   

    }
    addBtn.addEventListener("click", addButton)

    //modal close button
    function closeButton() {
        modalContainer.style.display = "none"
    }
    close.addEventListener("click", closeButton)

    //clear button
    function clearButton(){
        noteBoard.innerHTML = ""
        x = 0
    }
    clearBtn.addEventListener("click", clearButton)

    
   












































































})