
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

$.get('/api/all/', function(data) {
    console.log('data' + data);
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
            var row = $("<div>");

            row.append("<p>" + data[i].studentName);
            row.append("<p>" + data[i].classCode);
            row.append("<p>" + data[i].gradDate);
            row.append("<p>" + data[i].classType);

            $('#student-data').prepend(row);
        }
    }
});

