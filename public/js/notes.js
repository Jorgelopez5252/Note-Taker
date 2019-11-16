function displayNotes(){
    var data = getNotes();

}
var getNotes = function(){
    return $.ajax({
        url: "/api/notes",
        method: "GET"
    })
}