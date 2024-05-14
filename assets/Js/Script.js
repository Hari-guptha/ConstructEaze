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

const Vendorpopup = () => {
  const pop = document.getElementsByClassName('vendor')
  const blur = document.getElementById('backgroundBlur');
  for (let i = 0; i < pop.length; i++) {
    const element = pop[i];
    element.style.display = "block"
  }
  // pop.style.display = "block"
  blur.style.display = "block";
}

const ClosVendorpopup = () => {
  const pop = document.getElementsByClassName('vendor')
  const blur = document.getElementById('backgroundBlur');
  for (let i = 0; i < pop.length; i++) {
    const element = pop[i];
    element.style.display = "none"
  }
  // pop.style.display = "block"
  blur.style.display = " none";



}

const Labourpopup = () => {
  const pop = document.getElementsByClassName('Labour')
  const blur = document.getElementById('backgroundBlur');
  for (let i = 0; i < pop.length; i++) {
    const element = pop[i];
    element.style.display = "block"
  }
  // pop.style.display = "block"
  blur.style.display = "block";
}

const closeLabourpopup = () => {
  const pop = document.getElementsByClassName('Labour')
  const blur = document.getElementById('backgroundBlur');
  for (let i = 0; i < pop.length; i++) {
    const element = pop[i];
    element.style.display = "none"
  }
  // pop.style.display = "block"
  blur.style.display = " none";


}

const Clientpopup = () => {
  const pop = document.getElementsByClassName('Client')
  const blur = document.getElementById('backgroundBlur');
  for (let i = 0; i < pop.length; i++) {
    const element = pop[i];
    element.style.display = "block"
  }
  // pop.style.display = "block"
  blur.style.display = "block";
}

const closeClientpopup = () => {
  const pop = document.getElementsByClassName('Client')
  const blur = document.getElementById('backgroundBlur');
  for (let i = 0; i < pop.length; i++) {
    const element = pop[i];
    element.style.display = "none"
  }
  // pop.style.display = "block"
  blur.style.display = " none";

}




const tiggerProject = () => {
    const blur = document.getElementById('backgroundBlur');
    const pop = document.getElementById('PopUp');
    blur.style.display = "block";
    pop.style.display = "block";
    Body.style.overflow = "hidden";

}


const Closemenu = () => {
    const pop = document.getElementById('phoneSidebar');
    const blur = document.getElementById('backgroundBlur');
    pop.style.display = "none";
    blur.style.display = "none";

}

  // Function to increase the number
  function increaseNumber() {
    var numberElement = document.getElementById("number");
    var currentNumber = parseInt(numberElement.value);
    numberElement.value = currentNumber + 1;
  }

  // Function to decrease the number
  function decreaseNumber() {
    var numberElement = document.getElementById("number");
    var currentNumber = parseInt(numberElement.value);
    if (currentNumber > 0) {
      numberElement.value = currentNumber - 1;
    }
  }


  const CloseUpload = () => {
    const pop = document.getElementById('Uploadsync');
    const blur = document.getElementById('backgroundBlur');
    pop.style.display = "none";
    blur.style.display = "none";

}

   // Function to open file uploader when "Upload" is clicked
   function openFileUploader() {
    document.getElementById("fileInput").click();
  }
  function handleFileUpload() {
    var fileInput = document.getElementById('fileInput');
    var fileName = fileInput.value.split('\\').pop(); // Extracting file name
    var filetitle = document.getElementById("filename")
    if(filetitle){
      filetitle.innerHTML = fileName
      const pop = document.getElementById('Uploadsync');
      const blur = document.getElementById('backgroundBlur');
      pop.style.display = "block";
      blur.style.display = "block";
  
    }
}

function Deleteconfirm(){
  const pop = document.getElementById('DeleteConfirm');
  const blur = document.getElementById('backgroundBlur');
  pop.style.display = "block";
  blur.style.display = "block";

}


function Deleteconfirmclose(){
  const pop = document.getElementById('DeleteConfirm');
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
