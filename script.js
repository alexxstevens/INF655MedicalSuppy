// responsive nav
$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});


//open accordion when linked to page
$(document).ready(function () {
  location.hash && $(location.hash + '.collapse').collapse('show');
});

//accordion graphics
function toggleIcon(e) {
  $(e.target)
    .prev(".panel-heading")
    .find(".more-less")
    .toggleClass("glyphicon-plus glyphicon-minus");
}
$(".panel-group").on("hidden.bs.collapse", toggleIcon);
$(".panel-group").on("shown.bs.collapse", toggleIcon);


// shopping cart
  function openForm() {
    document.getElementById("myForm").style.display = "block";
              document.getElementById("fixedbutton").style.display = "none";
            }

            function closeForm() {
    document.getElementById("myForm").style.display = "none";
              document.getElementById("fixedbutton").style.display = "block";
            };


//shopping cart storage
window.load = doShowAll();
//check browser support
function CheckBrowser() {
  if ('localStorage' in window && window['localStorage'] !== null) {
    // We can use localStorage object to store data.
    return true;
  } else {
    return false;
  }
}
//populate cart with local storage
function doShowAll() {
  if (CheckBrowser()) {
    var key = "";
    var list = "<tr><th>Item</th><th>Price</th></tr>\n";
    var i = 0;
    //For a more advanced feature, you can set a cap on max items in the cart.
    for (i = 0; i <= localStorage.length - 1; i++) {
      key = localStorage.key(i);
      list += "<tr><td>" + key + "</td>\n<td>"
        + localStorage.getItem(key) + "</td></tr>\n";
    }
    //If no item exists in the cart.
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
      list += "<tr><td><i>EMPTY</i></td>\n<td><i></i></td></tr>\n";
    }
    //Bind the data to HTML table.
    //You can use jQuery, too.
    document.getElementById('list').innerHTML = list;
  } else {
    alert('Cannot save shopping list as your browser does not support HTML 5');
  }
};

localStorage.setItem('propertyName', 'value');
localStorage.getItem('propertyName');
localStorage.removeItem('propertyName');

function SaveItem() {
  $('button').click(function () {
    setTimeout(data, 500);
    var data = $.parseJSON($(this).attr('data-button'));
    console.log(data.name, data.data)
    localStorage.setItem(data.name,data.data);
    doShowAll();
  });}




function ClearAll() {
  localStorage.clear();
  doShowAll();
}

