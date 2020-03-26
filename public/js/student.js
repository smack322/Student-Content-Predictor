
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

var updateBtn = $("<button type=submit> Update</button>");
var deleteBtn = $("<button type=submit> X </button>");
var studentContainer = $("#student-data");

$.get('/api/all/', function(data) {
    posts = data;
    console.log('data' + data);
    if(!posts || !posts.length) {
        noStudents();
    }
    else {
        startRow();
    }
});

function startRow() {
    var postsToCreate = [];

    for (var i = 0; i < posts.length; i++) {
        postsToCreate.push(createStudentRow(posts[i]));
    }
    studentContainer.append(postsToCreate);

}

function createStudentRow(data) {
    var row = $("<div>");
    var deleteBtn = $("<button>");
    deleteBtn.text("X");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    //append children to div
    row.append(deleteBtn);
    row.append(editBtn);
    
    var paragraph = $(`<p>${data}`);
    row.append(`<p> ${data.studentName}`);
    row.append(`<p> ${data.classCode}`);
    row.append(`<p> ${data.gradDate}`);
    row.append(`<p> ${data.classType}`);
    

    return studentContainer.prepend(row);
    
}

function noStudents() {
    studentContainer.empty();
    var title = $("<h2>")
    title.text("To add a new student use the form above.");
    studentContainer.append(title);
}

