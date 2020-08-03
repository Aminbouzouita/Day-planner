$(document).ready(function(){ 
      
    // adding the date to the top page
  $("#currentDay").append(moment().format("dddd, MMMM Do"));
  // loading saved events 
   for(var i=0 ;i < 23 ;i++){
   var savedevent=localStorage.getItem(`${i}`);
   $(`textarea[name=${i}]`).val(savedevent);
   }
  // adding class to each textarea
  $("textarea").each(function addclass(){
  var inputvalue=0;
  var currenttime=0;
  currenttime=moment().format("H");
  inputvalue=parseInt($(this).attr("name"));
  if (currenttime < inputvalue){
    $(this).addClass("future");
   } 
   else if (currenttime > inputvalue){
    $(this).addClass("past");
   }
   else {
    $(this).addClass("present");
    }
  });
  // adding event listener to buttons and save id and value in localStorage 
  $(`button`).on(`click`,function saveevents(event){
  event.preventDefault();
  var i = $(this).attr("id"); 
  i = i.slice(3);  
  
  var savedevent =$(`textarea[name=${i}]`).val();
  localStorage.setItem(i,savedevent);
  console.log(i);
  });
  }); 
    