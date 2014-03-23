      $('#answer').sortable({
        connectWith: '#alternatives',
        items: '.tile',
        receive: function (event, ui) {
          //alert("receive");
        }
      });
      
      $('#alternatives').sortable({
        appendTo: document.body,
        items: '.tile',
        connectWith: '#answer',
        receive: function (event, ui) {
        }
      });
      
      $('.tile').click(function() {
        if($(this).parent().attr('id') == "alternatives")
        {
          $(this).appendTo("#answer");
        }
        else if($(this).parent().attr('id') == "answer")
        {
          $(this).appendTo("#alternatives");
        }
      });
      
      $('#done').click(function() {
        var answer = "";
        $('#answer').children('.tile').each(function () {
          answer += this.id;
        });
        //alert(answer);
        if(answer == "0351") 
        {
          alert("correct");
        }
        else
        {
          alert("incorrect");
        }
      });