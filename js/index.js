$(document).ready(function(){

    var list = function(){

        listEnterprise(function(response,json){
            
            if(response){
                for(var i in json){
                    var _class_ = 'odd';
                    if($('.bodyTable  .row-table').length%2==1){
                        _class_ = 'even';
                    }
                    $('.bodyTable').append('<div class="mt-10 row-table"><div class="col-md-2 pd-10 '+
                    _class_+'">'+json[i]["nome"]
                    +'</div><div class="col-md-2 pd-10 '+
                    _class_+'">'+json[i]["razaoSocial"]
                    +'</div><div class="col-md-2 pd-10 '+
                    _class_+'">'+json[i]["email"]
                    +'</div><div class="col-md-6 pd-10 '+
                    _class_+'">'+json[i]["cnpj"]
                    +' <button class="btn btn-default mr-10">Detalhes</button>'
                    +' <button class="btn btn-warning mr-10" >Atualizar</button>'
                    +'<button class="btn  btn-danger mr-10" >Desativa</button>'
                    +' <button class="btn btn-success mr-10" >Ativa</button></div></div>')
                }  
            }else{
                console.log('Error: '+json);
            }

        });
    }
    
    list();

    var clearTable = function (){
        $('.bodyTable').html("");
    }

    $('li a').each(function(){
        $(this).click(function(){
            
            var url = $(this).attr('href');
            switch(url){
                case '#/list':
                    clearTable();
                    list();
                break;
                case '#/update':
                break;
                case '#/disable':
                break;
                case '#/Active':
                break;
                case '#/Delete':
                break;
                case '#/Insert':
                    insertTable();
                break;
                case '#/Restore':
                break;
            }

        })
    });

    var insertTable = function(){

        var json = {
            "nome":"Nome da empresa 2",
            "razaoSocial":"Razão social da empresa 2",
            "email":"empresa002@empresa.com",
            "cnpj":"83,444,755/0001-03"
        }

        insertEnterprise(json,function(res){
            
            if(res){
                var _class_ = 'odd';
                if($('.bodyTable  .row-table').length%2==1){
                    _class_ = 'even';
                }
                $('.bodyTable').append('<div class="mt-10 row-table"><div class="col-md-2 pd-10 '+
                    _class_+'">'+json["nome"]
                    +'</div><div class="col-md-2 pd-10 '+
                    _class_+'">'+json["razaoSocial"]
                    +'</div><div class="col-md-2 pd-10 e_mail'+
                    _class_+'">'+json["email"]
                    +'</div><div class="col-md-6 pd-10 '+
                    _class_+'">'+json["cnpj"]
                    +' <button class="btn btn-default mr-10">Detalhes</button>'
                    +' <button class="btn btn-warning mr-10" >Atualizar</button>'
                    +'<button class="btn  btn-danger mr-10" >Desativa</button>'
                    +' <button class="btn btn-success mr-10" >Ativa</button></div></div>')
            
            }
            
            

        })
    }

});