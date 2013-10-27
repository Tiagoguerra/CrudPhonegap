/*function onDeviceReady() {
	var db;
	db = window.openDatabase("Teste", "1.0", "Phonegap DB", 20000);
}*/

function inseriNome() {
			alert('Inseri nome CrudPhonegap');
			// Cria ou abre uma nova conexao com o BD
			var db;
			db = window.openDatabase("TESTE.db", "3.8.0.2", "Tabela Contatos");
			alert('passou do opendatabase');
			// Chamando o metodo de geraNomeDB		
            db.transaction(geraNomeDB, errorCB, successCB);
			alert('passou do dbTransaction');
            }

function geraNomeDB(tx) {
			alert('geraNome');
            var nomeInserido = new String(document.getElementById('idInsiraNome').value);
			alert('criaTabela');
            tx.executeSql('CREATE TABLE IF NOT EXISTS TESTE (id INTEGER PRIMARY KEY, dado VARCHAR(30));');
            tx.executeSql('INSERT INTO TESTE (dado) VALUES ("'+nomeInserido+'");');
			alert('inseriuDado');
			alert(nomeInserido);
        }
		
function deleteNome() {
            db.transaction(deletaNome, errorCB, successCB);
        }
		
function deletaNome(tx) {
            var nomeDeletado = new String(document.getElementById('idDeleteNome').value);
            tx.executeSql('DELETE FROM TESTE WHERE dado="'+nomeDeletado+'"');
        }
		
function altereNome() {
            db.transaction(alteraNome, errorCB, successCB);
        }
		
function alteraNome(tx) {
          var nomeAlterado = new String(document.getElementById('idAlteraNome').value);
          var nomeAntigo = new String(document.getElementById('idAntigoNome').value);
         tx.executeSql('UPDATE TESTE SET dado = "'+nomeAlterado+'" WHERE dado = "'+nomeAntigo+'"');
        }	
				
function buscaNomes() {
            db.transaction(queryDB, errorCB);
        }
		
function queryDB(tx) {
            tx.executeSql('SELECT * FROM TESTE', [], querySuccess, errorCB);
        }
 
        function querySuccess(tx, results) {
            var len = results.rows.length;
         // Exibe no log o número de linhas inseridas no DB
            console.log("TESTE table: " + len + " linha encontrada.");
         // Exibe cada item no conjunto de registros em seu próprio alerta
            for (var i=0; i<len; i++){
                console.log("Linha = " + i + " Dado =  " + results.rows.item(i).dado);
                alert("Linha = " + i + " Nome =  " + results.rows.item(i).dado);
            }
        }

// Manipulador de erro generico
function errorCB(err) {
	alert('erro');
          console.log("Error processing SQL: "+err.code);
}

//Manipulacao de casos de sucesso
function successCB() {
          alert("Executado com sucesso!");
}					
