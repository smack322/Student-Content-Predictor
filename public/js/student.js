
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

//click events for the delete and edit buttons
$(document).on('click', 'button.delete', handleStudentDelete);

$(document).on('click', 'button.edit', function(){
    alert('You clicked the button to edit a post!');
})

var studentContainer = $("#student-data");

function getStudentData() {
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
}
getStudentData()

function deleteStudent() {
    $.ajax({
        method: `DELETE`,
        url: `/api/all/ ${id}` 
    })
    .then(function() {
        getStudentData();
    })
}

//ensure the delete is on the specific student based on the button
function handleStudentDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
      deleteStudent(currentPost.id);
      console.log(currentPost);
  }

//creates a row with student data from the db
function startRow() {
    var postsToCreate = [];

    for (var i = 0; i < posts.length; i++) {
        postsToCreate.push(createStudentRow(posts[i]));
    }
    studentContainer.append(postsToCreate);

}

//fields that are used from the db for the student row
function createStudentRow(data) {
    var row = $("<div>");
    var deleteBtn = $("<button class=delete>");
    deleteBtn.html("X");
    var editBtn = $("<button class=edit>");
    editBtn.html("EDIT");
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

//if there are no students then, instruct the user to use the form to add a student
function noStudents() {
    studentContainer.empty();
    var title = $("<h2>")
    title.text("To add a new student use the form above.");
    studentContainer.append(title);
}

