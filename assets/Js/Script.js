const tiggerpopup = () => {
    const pop = document.getElementById('PopUp');
    const blur = document.getElementById('backgroundBlur');
    pop.style.display = "block";
    blur.style.display = "block";
}


const ClosePopUp = () => {
    const pop = document.getElementById('PopUp');
    const blur = document.getElementById('backgroundBlur');
    pop.style.display = "none";
    blur.style.display = "none";
}


const tiggermenu = () => {
    const pop = document.getElementById('phoneSidebar');
    const blur = document.getElementById('backgroundBlur');
    pop.style.display = "block";
    blur.style.display = "block";
}


const Closemenu = () => {
    const pop = document.getElementById('phoneSidebar');
    const blur = document.getElementById('backgroundBlur');
    pop.style.display = "none";
    blur.style.display = "none";
}



const tokenSet = new Set(); // Set to store generated tokens

// Unique Token Generator Function
function generateUniqueToken() {
    const tokenLength = 10; // Set the desired length of your token
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token;

    // Generate a unique token
    do {
        token = ''; 
        for (let i = 0; i < tokenLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }
    } while (tokenSet.has(token)); // Check if the token already exists

    tokenSet.add(token); // Add the generated token to the set

    return token;
}

document.getElementById("OrderId").innerText = '#' + generateUniqueToken();




function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based index (0-11)
    var day = ('0' + currentDate.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

document.getElementById("OrderDate").innerText = getCurrentDate();
