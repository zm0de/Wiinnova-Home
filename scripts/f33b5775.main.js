"use strict";$(document).ready(function(){$(function(){var a=$(window).innerHeight();$(".main > section").css("min-height",a),$("body").scrollspy({target:"#nav",offset:"50px"})}),$("#ajax-contact-form").submit(function(a){a.preventDefault(),Parse.initialize("6qhUFEXtzdSTLwzG9VMeCU5oFaTWtgelh61unUiw","cTi3fECgna7cBjeYdyNIA6qnjehp1O8Ldrs8c5pe");var b=Parse.Object.extend("Messages_From_Showcase"),c=new b;c.save({name:$("#inputName").val(),email:$("#inputEmail").val(),subject:$("#inputSubject").val(),message:$("#inputMessage").val()},{success:function(){$("#note").html("<div>Your message has been sent. Thank you!</div>"),$("#ajax-contact-form").hide()},error:function(){$("#note").html('<div class="notification_error">Sorry, there is some technical issue with the server <br> Please Try again later</div>')}})})});