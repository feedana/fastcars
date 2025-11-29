const form = document.getElementById("addCarForm");
const params = new URLSearchParams(location.search);
const username = params.get("username");

form.addEventListener("submit", e => {
    e.preventDefault();

    const newCar = {
        marka: marka.value,
        model: model.value,
        year: year.value,
        price: price.value,
        currency: currency.value,
        image: image.value
    };

    axios.post("http://localhost:4000/allCars", newCar);

    axios.get("http://localhost:4000/users").then(res => {
        const user = res.data.find(u => u.username === username);

        axios.patch(`http://localhost:4000/users/${user.id}`, {
            cars: [...user.cars, newCar]
        }).then(() => {
            alert("Car added!");
            window.location.href = `home.html?username=${username}`;
        });
    });
});
