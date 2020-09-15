$(document).ready(function () {
  var test = true;

  //save button into storage
  var dayPlaner = JSON.parse(localStorage.getItem("dayPlaner")) || {};
  $(".saveBtn").on("click", function () {
    var saveInfo = JSON.parse(localStorage.getItem("saveInfo"));
    var id = $(this).attr("id");

  //  if(test) {console.log($(this).attr("id"));}

    var text = $(this).siblings(".description").children("textarea").val();
    dayPlaner[id] = text;
    localStorage.setItem(id, text);
    

    if (test) {
      console.log(saveInfo);
    }
  });

  var currentDay = moment().format("MMMM Do YYYY");
  $("#currentDay").text(currentDay);

  function trackerTime() {
    var currentTime = moment().format("H");

    $(".description").each(function () {
      var hourS = $(this).attr("id");
      console.log(hourS, currentTime);
    
    if (hourS < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (hourS === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    
    });
  }
  $("#09").children("textarea").val(localStorage.getItem("saveButton1"));
  $("#10").children("textarea").val(localStorage.getItem("saveButton2"));
  $("#11").children("textarea").val(localStorage.getItem("saveButton3"));
  $("#12").children("textarea").val(localStorage.getItem("saveButton4"));
  $("#13").children("textarea").val(localStorage.getItem("saveButton5"));
  $("#14").children("textarea").val(localStorage.getItem("saveButton6"));
  $("#15").children("textarea").val(localStorage.getItem("saveButton7"));
  $("#16").children("textarea").val(localStorage.getItem("saveButton8"));
  $("#17").children("textarea").val(localStorage.getItem("saveButton9"));
  $("#18").children("textarea").val(localStorage.getItem("saveButton10"));
  $("#19").children("textarea").val(localStorage.getItem("saveButton11"));
  $("#20").children("textarea").val(localStorage.getItem("saveButton12"));

  trackerTime();
  //end line
});
