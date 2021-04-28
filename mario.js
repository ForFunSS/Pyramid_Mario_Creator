
$("#how_Big").click(function(){
    showVal_2(this.value);
})

$("#how_Big").change(function(){
    showVal(this.value);
})



function showVal_2(newVal){
    $(".result").html(newVal);
}

function showVal(newVal){
    cleanDiv();
    printPyramid(newVal);
}

function cleanDiv(){
    $(".parent").html("");
}


function printPyramid(height) {
 
    cleanDiv();
    var select_item = $("#symbol_selector").val();
    height = parseInt(height);

    for (let i = 0; i < height; i++) {
    
        let parent = document.querySelector('.parent');
        // let parent2 = $(".parent");
        

        for (let j = height + 1; j > 0; j--) {
            if (j <= i + 2) { 
                
            let p = document.createElement('p');
            p.innerHTML = select_item;
            p.classList = 'pyra';
            parent.appendChild(p);

            // let p = $('<p class="pyra">');
            // parent2.html(p);
                
            } else {
            
            let p = document.createElement('p');
            p.innerHTML = ' ';
            p.classList = 'pyra_no';
            parent.appendChild(p);
                
            }

            if (j == 1) {
                let razr = document.createElement('div');
                razr.classList = 'div_suda';
                razr.innerHTML = "<br>";
                parent.appendChild(razr);
            }
        }
        
    }  
}

