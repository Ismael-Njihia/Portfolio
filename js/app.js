document.getElementById("button").onclick = function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("Email").value;
    const pno = document.getElementById("pno").value;
    const message = document.getElementById("messagereceived").value;

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