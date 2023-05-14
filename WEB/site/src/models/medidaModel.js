var database = require("../database/config");

function buscarUltimasMedidas_Umi(idLocal, limite_linhas, idSensor) {

    var limite_linhas = 10;
    var idSensor = 0;

    if (idLocal == 1) 
    {
        idSensor = 2;  
    }else if ( idLocal == 2) {
        idSensor = 4;
    }else if ( idLocal == 3){
        idSensor = 6;
    }else if ( idLocal == 4) {
        idSensor = 8;
    }

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        Leitura_Umi AS umidade, 
        DATE_FORMAT(Data_Hora,'%H:%i') AS momento_grafico 
        FROM 
        Leitura 
        JOIN 
        Sensores 
        ON FKSensor_LE = idSensor 
        JOIN Localização 
        ON FKLocal_S = idLocal
        WHERE idLocal = ${idLocal} 
        AND idSensor = ${idSensor}
        LIMIT ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_Umi(idLocal, limite_linhas, idSensor) {

    var limite_linhas = 10;
    var idSensor = 0;

    if (idLocal == 1) 
    {
        idSensor = 2;  
    }else if ( idLocal == 2) {
        idSensor = 4;
    }else if ( idLocal == 3){
        idSensor = 6;
    }else if ( idLocal == 4) {
        idSensor = 8;
    }

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        Leitura_Umi AS umidade, 
        DATE_FORMAT(Data_Hora,'%H:%i') AS momento_grafico 
        FROM 
        Leitura 
        JOIN 
        Sensores 
        ON FKSensor_LE = idSensor 
        JOIN Localização 
        ON FKLocal_S = idLocal
        WHERE idLocal = ${idLocal} 
        AND idSensor = ${idSensor}
        LIMIT ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas_Temp(idLocal, limite_linhas, idSensor) {

    var limite_linhas = 10;
    var idSensor = 0;

    if (idLocal == 1) 
    {
        idSensor = 1;  
    }else if ( idLocal == 2) {
        idSensor = 3;
    }else if ( idLocal == 3){
        idSensor = 5;
    }else if ( idLocal == 4) {
        idSensor = 7;
    }

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        Leitura_Temp AS temperatura, 
        DATE_FORMAT(Data_Hora,'%H:%i') AS momento_grafico 
        FROM 
        Leitura 
        JOIN 
        Sensores 
        ON FKSensor_LE = idSensor 
        JOIN Localização 
        ON FKLocal_S = idLocal
        WHERE idLocal = ${idLocal} 
        AND idSensor = ${idSensor}
        LIMIT ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_Temp(idLocal, limite_linhas, idSensor) {

    var limite_linhas = 10;
    var idSensor = 0;

    if (idLocal == 1) 
    {
        idSensor = 1;  
    }else if ( idLocal == 2) {
        idSensor = 3;
    }else if ( idLocal == 3){
        idSensor = 5;
    }else if ( idLocal == 4) {
        idSensor = 7;
    }

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        Leitura_Temp AS temperatura, 
        DATE_FORMAT(Data_Hora,'%H:%i') AS momento_grafico 
        FROM 
        Leitura 
        JOIN 
        Sensores 
        ON FKSensor_LE = idSensor 
        JOIN Localização 
        ON FKLocal_S = idLocal
        WHERE idLocal = ${idLocal} 
        AND idSensor = ${idSensor}
        LIMIT ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas_Umi,
    buscarMedidasEmTempoReal_Umi,
    buscarUltimasMedidas_Temp,
    buscarMedidasEmTempoReal_Temp,
}
