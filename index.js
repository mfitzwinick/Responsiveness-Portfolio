




function createMessage(){
    
    var userInfo = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        message: $("#location").val().trim()
    }
    var queryURL = "https://powerful-forest-82975.herokuapp.com/api/contacts/"
    $.ajax({
        header: origin,
        url: queryURL,
        method: "POST",
        data: userInfo
    })
    location.reload()

};

$("#submitBtn").on("click", (event)=>{
   console.log($("#email").val(),
   $("#name").val(),
   $("#location").val()) 
    createMessage()
})