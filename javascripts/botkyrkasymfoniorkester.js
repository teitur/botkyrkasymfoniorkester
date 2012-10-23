$(document).ready(function()
{
  $("div.bs_main_frame").load("content/home.html");

  $("a#main_menu_home").click(function()
  {
    $("div.bs_main_frame").load("content/home.html");
  });

  $("a#main_menu_about").click(function()
  {
    $("div.bs_main_frame").load("content/about.html");
  });

  $("a#main_menu_next_concert").click(function()
  {
    $("div.bs_main_frame").load("content/next_concert.html");
  });

  $("a#main_menu_concerts").click(function()
  {
    $("div.bs_main_frame").load("content/concerts.html");
  });

  $("a#main_menu_contact").click(function()
  {
    $("div.bs_main_frame").load("content/contact.html");
  });
});

