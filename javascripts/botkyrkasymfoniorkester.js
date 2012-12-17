$(document).ready(function()
{
  $("div.bs_main_frame").load("content/home.html");

  $("ul#main_menu a").click(function()
  {
    content_source = "content/" + $(this).attr("src") + ".html";
    $("div.bs_main_frame").load( content_source );
  });

  $("ul#main_menu li").each( function()
  {
    var submenu = $(this).find("ul");
    if( submenu.length > 0 )
    {
      $(this).mouseenter( function()
      {
        submenu.stop(true, true).slideDown();
      });

      $(this).mouseleave( function()
      {
        submenu.stop(true, true).slideUp();
      });
    }
  });
});

