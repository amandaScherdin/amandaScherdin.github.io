function SendEmail(name, email, message, subject) { 

	if(subject == "undefined" || subject == null || subject == "")
		subject = "Övrigt | Byou";

	message = "Ärende <br />" + subject + "<br /><br /> Övrigt medelande <br />" +  message + "<br /><br />Namn: " + name + "<br />Email: " + email;
	
	if(name == "" || email == "" || email.indexOf("@") == -1)
	{
		alert("Du måste fylla i alla fält");
		return;
	}
	
	alert("tackar för ditt medelande");
	
	$.ajax(
       {
           type: "POST",
           url: "Mail.php ",
           data:
               {
                   name: name,
                   email: email,
                   subject: subject,
                   message: message,
               },
           success: function (data, text) 
           {
               
           },
           error: function (request, status, error) 
           {

           }
       });
       
      $(".ContactTextArea").val() = "";
      
}

function ShowOverlay(subject) {
	$("#OverlayWrapper").fadeIn(70);
	$("#MailSubject").val(subject);
}

function HideOverlay(e){
    var container = $("#OrderWrapper");
    if (!container.is(e.target) && container.has(e.target).length === 0)
        $("#OverlayWrapper").fadeOut(70);
}
function HideOverlayDirrMode() {
	$("#OverlayWrapper").fadeOut(70);
}
