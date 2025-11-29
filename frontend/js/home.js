const params = new URLSearchParams(location.search);
const username = params.get("username");
document.getElementById("userDisplay").textContent = username;

const carList = document.getElementById("carList");
const allBtn = document.getElementById("allBtn");
const myBtn = document.getElementById("myBtn");

function renderCars(cars) {
    carList.innerHTML = "";

    cars.forEach(item => {
        carList.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="">
                <h3>${item.price} ${item.currency}</h3>
                <p>${item.marka} ${item.model}</p>
                <p>${item.year}</p>
            </div>
        `;
    });
}

allBtn.onclick = () => {
    axios.get("http://localhost:4000/allCars").then(res => {
        renderCars(res.data);
    });
};

myBtn.onclick = () => {
    axios.get("http://localhost:4000/users").then(res => {
        const user = res.data.find(u => u.username === username);
        renderCars(user.cars);
    });
};

// Load all cars 
allBtn.click();
