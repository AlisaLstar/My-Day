var dayPlaner = JSON.parse(localStorage.getItem("dayPlaner"))||{};
$(".saveBtn").on("click", function(){
    var saveInfo = JSON.parse(localStorage.getItem("saveInfo"));
    var id = $(this).attr("id");
    var text = $(this).siblings(".description").children("textarea").val();
    dayPlaner[id] = text;
    localStorage.setItem("dayPlaner", JSON.stringify(dayPlaner));

    console.log(saveInfo);
});