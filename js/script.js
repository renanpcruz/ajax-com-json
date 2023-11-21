$('form1').submit(function (e) { 
    e.preventDefault();
    
    
    var u_name = $('#name').val();
    var u_email = $('#email').val();

    //console.log(u_email, u_name);

    $.ajax({
        method: 'POST',
        url: 'https://epansani.com.br/2023/dw1s4/ajax/ins.php',
        data: {nome: u_name, email: u_email},
        dataType: "json"
    }).done(function(result){
        $('name').val('');
        $('email').val('');
        console.log(result);
    });
});

function getEmail() {
    $.ajax({
        method: 'GET',
        url: 'https://epansani.com.br/2023/dw1s4/ajax/list.php',
        dataType: "json"
    }).done(function(result){
        console.log(result);
        
        for(var i = 0; i<result.lenght; i++){
            $('#table-body').prepend('<tr><td>Mark</td><td>Otto</td><td><button class="btn btn-danger">Apagar</button></td></tr>');
        }

    });
}

getEmail();