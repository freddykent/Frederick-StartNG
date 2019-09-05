function validateForm(){
            var fullname= document.getElementById("fullName");
            var email= document.getElementById("email");
            var subject= document.getElementById("subject");
            var message= document.getElementById("textArea");
            var valid=true;
            if(fullname.value.length<4){
                fullname.className="wrong-input";
                fullname.nextElementSibling.innerHTML="Enter at least 4 characters";
                valid=false;
            }
            if (email.value.length<7){
                email.className="wrong-input";
                email.nextElementSibling.innerHTML="Enter a valid email address";
                valid=false;
            }
            if (email.value.indexOf("@", 0) < 0){
                email.className="wrong-input";
                email.nextElementSibling.innerHTML="Enter a valid email address";
                valid=false;
            }
            if (email.value.indexOf(".", 0) < 0){
                email.className="wrong-input";
                email.nextElementSibling.innerHTML="Enter a valid email address";
                valid=false;
            }
            if (subject.value.length ==0){
                subject.className="wrong-input";
                subject.nextElementSibling.innerHTML="Subject cannot be empty";
                valid=false;
            }
            if (message.value.length <20){
                message.className="wrong-input";
                message.nextElementSibling.innerHTML="Message should be at least 20 characters";
                valid=false;
            }
            return valid;
        }