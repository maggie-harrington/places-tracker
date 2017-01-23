// Business logic
function Place(name, location, landmarks, time, notes) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

// Interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var name, location, landmarks, time, notes;
    name = $("#new-name").val();
    location = $("#new-location").val();
    landmarks = $("#new-landmarks").val().split(/\s*,\s*/);
    time = $("#new-time").val();
    notes = $("#new-notes").val();

    var newPlace = new Place(name, location, landmarks, time, notes);

    $("#places ul").append("<li><span class='place'>" + newPlace.name + "</span></li>");
    $("#places ul").last().click(function() {
      $("#show-name").text(newPlace.name);
      $("#show-location").text(newPlace.location);
      $("ul#show-landmarks").empty();
      newPlace.landmarks.forEach(function(element) {
        $("ul#show-landmarks").append("<li>" + element + "</li>");
      });
      $("#show-time").text(newPlace.time);
      $("#show-notes").text(newPlace.notes);

      $("#show-place").show();
    });

    $("#new-name").val("");
    $("#new-location").val("");
    $("#new-landmarks").val("");
    $("#new-time").val("");
    $("#new-notes").val("");
  });
});
