
function validateForm(){
    let nameInput = document.getElementById("name");
    console.log(nameInput.value);

    let emailInput = document.getElementById("email");
    console.log(emailInput.value);

    if (nameInput.value == ''){
        alert("Harap isi data diri dengan lengkap");
    } else if (emailInput.value == ''){
        alert("Harap isi data diri dengan lengkap");
    } else {
        alert('Welcome ' + nameInput.value );
    }
}

// For Index Identifier
let indexBanner = 0;

showBanner();

function nextBanner(){
    // Increment IndexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner(){
    let banner = document.getElementsByClassName("main-banner");

    // Reset Condition
    if(indexBanner > banner.length - 1){
        indexBanner = 0;
    }

    // Loop untuk hide 
    for (let i = 0; i < banner.length; i++){
        banner[i].style.display = 'none';
    }

    // Show Banner
    banner[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000)