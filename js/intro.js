var pageNamePattern = 'work'; 
var firstPage = 1, lastPage = 6; 

$(function () {
   var next = GetNextPageNumber();
   var nexturl = pageNamePattern + next + '.html';
   var prev = GetPrevPageNumber();
   var prevurl = pageNamePattern + prev + '.html';

   $('#next').attr('href', nexturl);
   $('#prev').attr('href', prevurl);
   
});

function GetCurrentPageNumber() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  page = page.replace(pageNamePattern, '').replace('.html', '').replace('#', '');
  return parseInt(page);
  // if(page<=firstPage) $("#prev").hide()
  // if(page>=lastPage) $("#next").hide()
};

function GetNextPageNumber() {
  var current = GetCurrentPageNumber();
  current++;
  if (current > lastPage) 
    $("#next").hide();
  return current;
};

function GetPrevPageNumber() {
  var current = GetCurrentPageNumber();
  current--;
  if (current < firstPage) 
    $("#prev").hide();
  return current;
}




// plugins