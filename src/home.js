


let sayhome = () => {
    return console.log("From Home");
};

export const homeContent = () => {
    let div = document.querySelector("#content");
    div.innerHTML = "";
    let heading = document.createElement("h1");
    let list = document.createElement("ul");
    heading.textContent = "Opening";

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    days.forEach(day => {
        let items = document.createElement("li");
        items.textContent = `${day} -> Open from 9:00 - 20:00`;
        list.appendChild(items)
    })

    div.appendChild(heading);
    div.appendChild(list);

    return { div }
}
