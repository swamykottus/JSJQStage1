/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addElemets(){
    "use strict";
    var $newUL = $("<ul>");
    
    //Creating paragraph element and adding to the footer
    var $newParagraphElement = $("<p>");
    $newParagraphElement.text("This is a paragraph");
    $("footer").append($newParagraphElement);
    
    //Creating List elements and adding to the ul element
    var $firstElement = $("<li>").text("This is the first element");
    var $secondElement = $("<li>").text("This is the second element");
    var $thirdtElement = $("<li>").text("This is the third element");
    $newUL.append($firstElement);
    $newUL.append($secondElement);
    $newUL.append($thirdtElement);
    
    //Adding Ul to the main element
    $("main").append($newUL);
    
    //Removing elements.......
    $("main ul li:first-child").fadeOut();
    $newUL.empty();
    
   $("footer p").fadeOut(1000,function()
   {
       $("footer p").empty();
   });
    
    
};

var main = function()
{
    // create and hide our content as a div
    var $content = $("<div>Hello World!</div>").hide();
    var $moreContent = $("<div>Goodbye World!</div>").hide();
    // append the content to the body element
    $("body").append($content);
    // slide the content down for 2 seconds
    // and then execute the callback which
   // contains the second content
   $content.slideDown(2000, function () {
   // append the second content to the body
   $("body").append($moreContent);
   // fade in the second content
   $moreContent.fadeIn();
});
};

$(document).ready(main);