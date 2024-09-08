const randomColor = () => {
    let color = "#";
    const variables = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i < 6; i++) {
        let n = Math.floor(Math.random() * 16);
        color += variables[n];
    }

    const myElement = document.getElementById("demo");
    if (myElement) {
        myElement.style.backgroundColor = color;
    } else {
        console.error("Element with ID 'demo' not found.");
    }

    document.getElementById("colorCode").textContent = color;

    return color;
};
