document.getElementById("button").onclick = function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("Email").value;
    const pno = document.getElementById("pno").value;
    const message = document.getElementById("messagereceived").value;

    if (name == "") {
        alert("Please enter your name");
    } else if (name.length < 3) {
        alert("Name too short")
    } else if (email == "") {
        alert("Please enter your email");
    } else if (email.length < 3) {
        alert("Email too short")
    } else if (pno = "") {
        alert("Please enter your phone number");
    } else if (pno.length < 10) {
        alert("Phone number too short!")
    } else if (message == "") {
        alert("Please enter your message");
    } else

        firebase.firestore().collection("Viewers").doc().set({
        userName: name,
        userEmail: email,
        userPhone: pno,
        userMessage: message


    }).then(() => {
        alert("Message sent successfully");
        document.getElementById("name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("pno").value = "";
        document.getElementById("messagereceived").value = "";

    })


}