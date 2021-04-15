



// function pizdec(){
//     var input = document.getElementsById('how_Big');
//     document.getElementById('result').innerHTML = input.valueAsNumber;
//     alert("darow!");
// }

// edit_input.addEventListener("click",function(){
//     let d = document.getElementsByName('ow_big_p').values;
//     document.getElementsByClassName("how_pyr").innerHTML = " tototo";
// })

function showVal_2(newVal){
    document.getElementById("result").innerHTML=newVal;
}

function showVal(newVal){
    cleanDiv();
    printPyramid(newVal);
}

function cleanDiv(){
    document.getElementById('parent').innerHTML = '';
}


function printPyramid(height) {
    // console.log(parseInt(document.getElementById("how_Big").value));
    cleanDiv();
    var select_item = document.getElementById("symbol_selector").value;
    height = parseInt(height);

    for (let i = 0; i < height; i++) {
        // let bricks ="";
        let parent = document.querySelector('#parent');
        

        for (let j = height + 1; j > 0; j--) {
            if (j <= i + 2) { 
                
            let p = document.createElement('p');
            p.innerHTML = select_item;
            p.classList = 'pyra';
            parent.appendChild(p);
                
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


// no work
// function printPyramid(height) {
//     height.self = height;
//     den = "#", kw = " ";
//     for(let i = 1; i < height + 1; i++){
//         let k = -1, ke = "";
//         while(k < i)
//         {
//             ke += den;
//             k++
//         }

//         kw = "";
//         if (k !== 5){
//             kw = " ";
//             for (let j = height + 1; j > 0  ; j--){
//                 kw += kw;
//                 // console.log(kw);
//             }
//         } else {
            
//         }

//         console.log(kw + ke);
//         ke = "";
//     }
// }

// const button = document.querySelector("button");
// button.addEventListener('click', function once() {
//     printPyramid(10);
//     console.log('Done!');
//     button.removeEventListener('click', once);
// });

