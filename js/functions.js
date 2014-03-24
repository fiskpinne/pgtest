function play(file)
{
    var audio = new Audio(file);
    audio.play();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function initQuestion(question)
{
    $('#question').text(curQuestion.question);
    $('#alternatives').empty();
    $('#answer').empty();
    var options = curQuestion.answer.concat(curQuestion.alternatives);
    shuffleArray(options);
    $.each(options, function(key, val) {
        var alternative = $('<span />').addClass('tile').text(val).data('value',val);
        $(alternative).click(function() {
            if($(this).parent().attr('id') == "alternatives")
            {
                $(this).appendTo("#answer");
            }
            else if($(this).parent().attr('id') == "answer")
            {
                $(this).appendTo("#alternatives");
            }
        });
        $('#alternatives').append(alternative);
    });
    
    $('#done').click(function() {
        var answer = "";
        var correct = true;
        var i = 0;
        $('#answer').children('.tile').each(function () {
            if(i >= curQuestion.answer.length || $(this).data('value') != curQuestion.answer[i])
            {
                correct = false;
                return false;
            }
            i++;
        });

        if(i != curQuestion.answer.length)
            correct = false;
        
        if(correct) 
        {
            alert("correct");
        }
        else
        {
            alert("incorrect");
        }
    });
}