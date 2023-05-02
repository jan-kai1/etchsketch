document.addEventListener("DOMContentLoaded", function ()
{   
    let gridButton = document.querySelector("#gridNumber");
    let resetButton = document.querySelector("#reset");
    let grid = document.querySelector(".grid");
    let existingRows = document.querySelectorAll(".gridrow");
    // need to re initialize existing ROWS after creation
    gridnumber = 0;
    resetButton.addEventListener("click", function()
    {   
        
        
        if (existingRows.length > 0)
        {
            
            deleteGrid(existingRows);
        }
       
        else{
            alert("no grid currently")
        }
    
    });
    
    gridButton.addEventListener("click", function()
    {

        gridNumber = prompt("Grid Parameters?")
            
        createGrid(gridNumber);


    })
    //add event listeners for each 


    function deleteGrid(existingRow)
    {
        for (existingRow of existingRows)
            {   
                console.log(existingRow);
                existingRow.parentElement.removeChild(existingRow);
            }

    }
    function createGrid(number)
    {

        if (gridNumber.length >0)
               {
                   
                   
                   for (let i = 0; i < gridNumber; i++)
                   {   
                       //create row for the squares
                       gridRow = document.createElement("div");
                       gridRow.classList.add('gridrow');
                       
               
                       for (let j = 0; j < gridNumber; j++)
                       {
               
                           gridSquare = document.createElement("div");
                           gridSquare.setAttribute('class', 'gridSquare');
                           //create the event listener for each square
                           drawListener(gridSquare);

                           gridRow.appendChild(gridSquare);
               
                       }
                       grid.appendChild(gridRow);
                   }
                   
   
               }
        existingRows = document.querySelectorAll(".gridrow")
    }

    function drawListener(square)
    {   
        //make black is a function that makes the TARGET of the event
        //event.target is the element which triggered the event
        const makeBlack = (e) => e.target.style.backgroundColor = "black";
        //2 event listeners for each square, one for initiating the draw (mousedown)
        //one for continuing draw (mouseover)
        //mousedown makes square black when clicked on
        //event.buttons tracks the MOUSE button that is being held down, 
        //if e.buttons ==1, LMB is held down, then makes the square hover over black
        square.addEventListener("mousedown", makeBlack);
        square.addEventListener("mouseover", e =>
        {
            if (e.buttons == 1) {
                makeBlack(e)


            }

        });


    }




});