// Gửi yêu cầu cày thuê
function submitOrder() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let note = document.getElementById("note").value;
    let userId = Math.random().toString(36).substr(2, 9); // Fake user ID

    db.ref("orders/" + userId).set({
        username: username,
        password: password,
        note: note,
        status: "pending"
    });

    alert("Yêu cầu đã gửi!");
}

// Kiểm tra số dư
function checkBalance() {
    let userId = document.getElementById("checkUserId").value;

    db.ref("users/" + userId).once("value", (snapshot) => {
        let balance = snapshot.val()?.balance || 0;
        document.getElementById("balanceResult").innerText = "Số dư: " + balance + " VNĐ";
    });
}