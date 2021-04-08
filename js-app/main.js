const url = "https://localhost:5001/api/BeanVariety/";

const button = document.querySelector("#run-button");

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const addBurl = 'https://localhost:5001/api/BeanVariety/';
const button1 = document.querySelector("#add-bean");
// use your event listener to pull your data out of your html and create an object with it. pass that object to new bean.
button1.addEventListener("click", () => {
    const name = document.querySelector("#name").value
    const region = document.querySelector("#region").value
    const newBean = {
        name,
        region,
        // dont need to addd an ID since your controller in sql will create for you

    }
    addBean(newBean)
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

// post your newBean to the api and then return all beans
function addBean(newBean) {
    return fetch('https://localhost:5001/api/BeanVariety/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBean)
    }).then(getAllBeanVarieties)
}

