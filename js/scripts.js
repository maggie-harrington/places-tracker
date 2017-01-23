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
  });
});
