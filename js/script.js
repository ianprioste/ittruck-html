
// LER SITES
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: 'https://9xoqrdy855.execute-api.us-east-1.amazonaws.com/dev/sites',
    contentType: 'application/json',
    crossDomain: true,
    processData: false,
    dataType: "json",
    data: '',

    success:function(data) {
      var listasites = data;

      for(var i = 0; i < listasites.length; i++) {
        var nome = listasites[i].nome;
        var id = listasites[i].Id;
        var el = document.createElement("option");
        el.textContent = nome;
        el.value = id;
        sites.appendChild(el);
      }

  
    },

    error: function(jqXHR,error, errorThrown) {  
      var listasites = null;
    }
  });
});

document.getElementById('sites').addEventListener('change', () =>{

  var siteid = document.getElementById("sites").value;
  tendas.length = 0;

  $.ajax({
    type: "GET",
    url: 'https://9xoqrdy855.execute-api.us-east-1.amazonaws.com/dev/eventos?varSitio='+siteid,
    contentType: 'application/json',
    crossDomain: true,
    processData: false,
    dataType: "json",
    data: '',

    success:function(data) {
      var listatendas = data;

      for(var i = 0; i < listatendas.length; i++) {
        var nome = listatendas[i].nome;
        var id = listatendas[i].Id;
        var el = document.createElement("option");
        el.textContent = nome;
        el.value = id;
        tendas.appendChild(el);
      }

  
    },

    error: function(jqXHR,error, errorThrown) {  
      var listatendas = null;
    }
  });

})