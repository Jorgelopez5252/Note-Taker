function displayNotes(notes) {
    $(".list-container .list-group").empty();
  var noteListItems = [];
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    var $li = $("<li class='list-group-item'>").data(note);
    var $span = $("<span>").text(notes.title);
    var $delBtn = $("<i class='fas fa-trash-alt float-right text-danger'>");
    $li.append($span, $delBtn);
    noteListItems.push($li);
  }
  $(".list-container .list-group").append(noteListItems);
}
var getAndDisplayNotes = function() {
  return getNotes().then(function(data) {
    displayNotes(data);
  });
};
var getNotes = function() {
    console.log("getNotes js file")
    return $.ajax({
        url: "/api/notes",
        method: "GET"
      });
};

var listGroupEle = $(".list-group");
getAndDisplayNotes();
