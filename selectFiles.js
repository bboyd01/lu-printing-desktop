document.addEventListener("DOMContentLoaded", init, false);


function init() {
        document.querySelector("#inputGroupFile01").addEventListener('change', handleFiles, false);
}


function handleFiles(e) {
        var label = document.getElementById("fileCount");
        
        if (!e.target.files) return;

        var files = e.target.files;
        var table = document.getElementById("fileList");
        table.innerHTML = '';
        if (files.length == 1){
                label.innerHTML = files.length + " file selected";
        }else{
                label.innerHTML = files.length + " files selected";
        }
        for (var i = 0; i<files.length; i++){
                var f = files[i];
                var row = table.insertRow(i);
                // var x    = row.insertCell(0);
                var name = row.insertCell(0);
                row.classList.add("fileRow");
                name.innerHTML = "<td>"+f.name+"</td>";
                // x.innerHTML = "<td>X</td>";
                
                // row.click(function() {
                //         row.visible = false;
                //         console.log("a")
                // });
                
        }
}

// function deleteRow(i){
//         i.visible = false;
// }