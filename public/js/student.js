
//on-click event to get the student data from the form
$('#student-submit').on('click', function(event) {
    event.preventDefault();

    var newStudent = {
        studentName: $('#student-name').val().trim(),
        classCode: $('#class-code').val().trim(),
        gradDate: $('#grad-date').val().trim(),
        classType: $('#class-type').val().trim()
    };
    console.log(newStudent);

    //send a POST request to our backend
    $.post('/api/student', newStudent)

    .then(function() {

        //empty out the input boxes from the form
        $('#student-name').val("")
        $('#class-code').val("")
        $('#grad-date').val("")
    })
})

