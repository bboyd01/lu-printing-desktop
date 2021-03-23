document.addEventListener("DOMContentLoaded", init, false);


function init() {
        document.querySelector("#inputGroupFile01").addEventListener('change', handleFiles, false);
}


function handleFiles(e) {
        var label = document.getElementById("fileCount");
        
        if (!e.target.files) return;
        var files = e.target.files;
        var table = document.getElementById("fileList");
        table.innerHTML = '' // Resets every time choose file is selected.
        if (files.length == 1){                                        // grammar for selected text
                label.innerHTML = files.length + " file selected";
        }else{
                label.innerHTML = files.length + " files selected";
        }
        for (var i = 0; i<files.length; i++){ // creates rows with file names in table HTML item
                var f = files[i];
                var row = table.insertRow(i);
                // var x    = row.insertCell(0);
                // var name = row.insertCell(1);
                //row.innerHTML = f.name;                       // changed this
                row.innerHTML = "<td><i class=\"fas fa-file\"></i>   " + f.name + "<i class=\"fas fa-trash-alt float-right\"></i></td>";      // to this, so it matches the formatting now
                // x.innerHTML = "X";

                // x.addEventListener("click", deleteRow(i));
                
        }
}

// function deleteRow(i){
//         i.visible = false;
// }