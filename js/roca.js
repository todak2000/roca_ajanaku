// JOIN US API

// $(function(){
//     $('#send_submit').on('click', function(){ 
//         var fd = new FormData($("#fileinfo"));
//         //fd.append("CustomField", "This is some extra data");
//         $.ajax({
//             url: 'https://roca-ajanaku.herokuapp.com/server/send',  
//             type: 'POST',
//             data: fd,
//             success:function(data){
//                 console.log(data)
//             },
//             error:function(e){
//                 console.log(e);
//             },
//             cache: false,
//             contentType: false,
//             processData: false
//         });
//     });
// });

$(function(){
    $('#send_submit').on('click', function (e) {
        e.preventDefault();
        document.getElementById("wait_gif").style.display = "block";
        document.getElementById("fileinfo").style.display = "none";
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phonenumber = document.getElementById("phonenumber").value;
        let resumelink = document.getElementById("resumelink").value;

        $.ajax({
            url:'https://roca-ajanaku.herokuapp.com/server/send',
            type:'POST',
            data:{
                name: name,
                email: email,
                phonenumber: phonenumber,
                resumelink : resumelink
            },
            success:function(response){
                document.getElementById("wait_gif").style.display = "none";
                console.log(response);
                if(response.error != 0){
                    document.getElementById("fileinfo").style.display = "block";
                    document.getElementById('modal-texty').innerHTML = response.message;
                    document.getElementById('modal-texty').style.display = "block";
                    setTimeout(function(){ 
                        document.getElementById('modal-texty').style.display = "none"; 
                    }, 5000);
                    
                }
                else{
                    document.getElementById("modal-h3").style.display = "none";
                    document.getElementById("email-image").style.display = "block";
                    document.getElementById('modal-texty').innerHTML = response.message;
                }
            },
            error:function(e){
                document.getElementById("wait_gif").style.display = "none";
                console.log(e);
            },
        });
        
        
    });
});
