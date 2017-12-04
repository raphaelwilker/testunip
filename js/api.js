var listEnterprise = function(callback){

    $.ajax({
        url: 'https://private-anon-8f178f3b70-'
        +'62374605ac444eacba9311d731ac84a3.apiary-mock.com/'
        +'projetos/GerenciamentoSoftware/Empresas/?pagina=1&maximo=100&palavraChave=null&status=Ativos',
        method:'GET',
        success: function(param){
            callback(true,param);
        },
        error: function(param){
            callback(false,param)
        }
    });

}

var insertEnterprise = function(json,callback){

    $.ajax({
        url: 'https://private-anon-8f178f3b70-62374605ac444eacba9311d731ac84a3.'
        +'apiary-mock.com/projetos/GerenciamentoSoftware/Empresa',
        method:'POST',
        data:json,
        success: function(param){
            callback(true,param);
        },
        error: function(param){
            callback(false,param)
        }
    });
    
}

var updateEnterprise = function(callback){


    
}

var disableEnterprise = function(callback){


    
}

var deleteEnterprise = function(callback){


    
}

var restoreEnterprise = function(callback){


    
}
