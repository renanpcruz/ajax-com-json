$('#form1').submit(function (e) { 
    e.preventDefault();
    
    
    var u_name = $('#name').val();
    var u_email = $('#email').val();

    console.log(u_email, u_name);

    $.ajax({
        method: 'POST',
        url: 'https://epansani.com.br/2023/dw1s4/ajax/ins.php',
        data: {nome: u_name, email: u_email},
        dataType: "json"
    }).done(function(result){
        $('name').val('');
        $('email').val('');
        console.log(result);
    }).then(function(result){
        alert('Dado gravado com sucesso!');
    });
});

function getData() {
    $.ajax({
        method: 'GET',
        url: 'https://epansani.com.br/2023/dw1s4/ajax/list.php',
        dataType: 'json'
    }).done(function(result){
        console.log(result);

        for(var i=0; i<result.length; i++){
            $('.table').prepend('<tr><td>' + result[i].nome + '</td><td>' + result[i].email  + '</td><td><button type="button" class="btn btn-danger" onclick="deleteData()">Excluir</button></td></tr>');
        }
    });
}

function deleteData(){
    $.ajax({
        method: 'POST',
        url: 'https://epansani.com.br/2023/dw1s4/ajax/rem.php',
        data: {id: id},
        dataType:'json'
    }).done(function(result){
        console.log(result);
    });
}

getData();