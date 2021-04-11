// JOIN US API
$(function(){
    $('#send_submit').on('click', function (e) {
        e.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phonenumber = document.getElementById("phonenumber").value;
        let attach = document.getElementById("attach").files[0];
        $.ajax({
            // url:'http://127.0.0.1:8000/server/send/',
            url:'https://roca-ajanaku.herokuapp.com/server/send',
            type:'POST',
            data:{
                name: name,
                email: email,
                phonenumber: phonenumber,
                attach : attach 
            },
            success:function(response){
                console.log(response);
                // if(response.error == false){
                //     document.getElementById('modal_name').innerHTML = response.name;
                //     document.getElementById('modal_date').innerHTML = response.date;
                //     document.getElementById('modal_time').innerHTML = response.from +" - "+response.to;
                //     $('#successModal').modal('show');
                    
                // }
                // else{
                //     document.getElementById('server_message_success').innerHTML = response.message;
                //     document.getElementById("server_message_success").style.display = "block";
                //     setTimeout(function(){ 
                //         document.getElementById("server_message_success").style.display = "none"; 
                //     }, 3000);
                // }
            },
            error:function(e){
                console.log(e);
            },
        });
        
        
    });
});
