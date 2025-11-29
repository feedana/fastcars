const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    axios.post("http://localhost:4000/users", {
        username,
        password,
        cars: []
    }).then(() => {
        alert("Account created!");
        window.location.href = "index.html";
    });
});
