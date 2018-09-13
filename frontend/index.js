const form = document.querySelector("#input");
const postButton = document.querySelector("#post");
const getButton = document.querySelector("#get");

const postData = async () => {
    const data = new FormData();
    data.append("file", "adsad");
    const request = await fetch("/api/data", {
        header: "Content-Type: application/json",
        method: 'POST',
        body: "asdasd"

    });
    const response = await request.text();
    console.log(response)
};


const getData = async () => {
    const request = await fetch("/api/data");
    const response = await request.text();
    console.log(response)
}

postButton.addEventListener("click", postData, false);

getButton.addEventListener("click", getData, false);