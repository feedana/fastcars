const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Trying to login:", username, password);

    axios.get("http://localhost:4000/users")
        .then(({ data }) => {
            console.log("Backend users:", data);

            const user = data.find(u => u.username === username && u.password === password);

            if (!user) {
                alert("Wrong username or password");
                return;
            }

            window.location.href = `home.html?username=${username}`;
        })
        .catch(err => console.log("Axios error:", err));
});
