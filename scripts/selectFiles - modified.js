// on document load
$(function () {
    var fileList = [];
    // manage files
    $("#inputGroupFile01").change(function() {
        var selected = $("#inputGroupFile01")[0].files;

        selected.forEach(function(element) {
            fileList.push(element);
        });

        fileList.forEach(function(element) {
            console.log(element.name);
        });

        // switch back to old or fix this later
    

        
    }); 

    $(".file").click(function () {

    });
});



    


