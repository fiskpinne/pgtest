var curQuestion;

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

$.getJSON( "data/lesson1.json", function(data) {
    curQuestion = data.questions[0];
    initQuestion(curQuestion);
});