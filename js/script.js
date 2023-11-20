$('form').submit(function(){

    var _name =  $('#name').val();
    var _email =  $('#email').val();

    //console.log(_email, _name);

    $.ajax({
        url: 'https://epansani.com.br/2023/dw1s4/ajax/ins.php',
        method: 'POST',
        data: {nome: _name, email: _email},
        dataType: 'json'
    }).done(function(result){
        console.log(result);
    });
});

function getEmail() {
    $.ajax({
        url: 'https://epansani.com.br/2023/dw1s4/ajax/list.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        console.log(result);
    });
}