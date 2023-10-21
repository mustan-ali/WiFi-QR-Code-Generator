const generateButton = document.querySelector('button');

generateButton.addEventListener('click', () => {
    generateButton.innerText = "Generating QR Code";
    
    const ssidInput = document.getElementById('ssid');
    const passInput = document.getElementById('pass');
    const encryptionSelect = document.getElementById('encryption');
    const hiddenSsidSelect = document.getElementById('hidden-ssid');

    const selectedEncryption = encryptionSelect.options[encryptionSelect.selectedIndex].value;
    const selectedHiddenSsid = hiddenSsidSelect.options[hiddenSsidSelect.selectedIndex].value;

    const qrValue = `WIFI:S:${ssidInput.value};T:${selectedEncryption};P:${passInput.value};H:${selectedHiddenSsid};`;

    const qrImg = document.querySelector('.qr-code img');

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        generateButton.innerText = "Generate QR Code";
        document.querySelector('.wrapper').classList.add("active");
    });

});