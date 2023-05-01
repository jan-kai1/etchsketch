document.addEventListener("DOMContentLoaded", function ()
{   
    let resetButton = document.querySelector("#gridNumber")
    gridnumber = 0;
    resetButton.addEventListener("click", function()
    {   let grid = document.querySelector(".grid");
        let existingRows = document.querySelectorAll(".gridrow");
        if (existingRows.length > 0)
        {
            for (existingRow of existingRows)
            {   
                console.log(existingRow);
                existingRow.parentElement.removeChild(existingRow);
            }

        }
       
        else
        {
            gridNumber = prompt("Grid Parameters?")
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
                           gridRow.appendChild(gridSquare);
               
                       }
                       grid.appendChild(gridRow);
                   }
                   
   
               }




        }
        

    });
    
  
    //add event listeners for each 










});