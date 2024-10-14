
function tableOne(number){
    var count = 0; 

   var row = '<div class = "row">';

    for(let i = 1 ; i <= number ; i++){
        if (count > 3 && count % 3 == 0){
            row += '<div class = "row pt-5">';
        }
        row += '<div class = "col-md-4 border">'; 
         for(let j =1 ; j <= 10 ; j++){
            row += '<p>'
            row += " " + i + " x " + j + " = " + (j*i);
            row += '</p>';
            count++
            }
            row += '</div>';
    }
    row += '</div>'
    row += '</div>'

   
    return row;
}
function ShowOutput(){
    let  InputNumber = document.getElementById("inputt").value; 
    var outputTables = document.getElementById("roo1").innerHTML = tableOne(InputNumber); 
}


