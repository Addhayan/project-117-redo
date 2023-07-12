var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);
})

let reviewed;
$(function () {
    //  write an event, when Submit button is clicked
    $('review').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = {
            "text": $("#text").val()
        }

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){
                $("#review").html(result.data.reviewed)
                $("#review_img_url").attr('src', result.data.reviewed_img_url);
                $('#review').css("display", "");
                $('#review_img_url').css("display", "");
                reviewed = result.data.reviewed
                $('#save_button').prop('disabled', false);
            },
            //  if any error, run this function
            error : function(result){
                alert(result.responseJSON.message)
                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})