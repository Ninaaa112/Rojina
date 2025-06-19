// Deklarera variabler enligt uppgiftens krav
let vip = true;  // boolean variabel i små bokstäver
let age = 17;    // ålder tilldelad värdet 17

// Funktion för att visa anpassade alertboxar
function showAlert(message) {
    const alertBox = document.getElementById('alertBox');
    alertBox.textContent = message;
    alertBox.classList.add('show');
    
    // Ta bort alert efter 3 sekunder
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}

// Funktion för att kontrollera åtkomst
function checkAccess() {
    // Hämta värden från HTML-elementen (Optional del av uppgiften)
    const ageInput = document.getElementById('ageInput');
    const vipCheckbox = document.getElementById('vipCheckbox');
    
    // Tilldela variablerna nya värden från input-fälten
    age = parseInt(ageInput.value);
    vip = vipCheckbox.checked;
    
    // VIP-kontroll först (om VIP är true, hoppa över ålderskontrollen)
    if (vip) {
        showAlert("Welcome in my best VIP customer :)");
        return; // Hoppa över resten av koden
    }
    
    // Ålderskontroll - condition som ger true om age är över eller lika med 18
    if (age >= 18) {
        showAlert("Access granted");
    } else {
        showAlert("Access denied");
    }
}

// Event listener för knappen - när knappen med ID "enterBtn" klickas
document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enterBtn');
    
    enterButton.addEventListener('click', function() {
        checkAccess();
    });
    
    // Lägg till Enter-tangentstöd för bättre användarupplevelse
    document.getElementById('ageInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAccess();
        }
    });
});

// Extra funktionalitet: Uppdatera VIP-badge dynamiskt
document.addEventListener('DOMContentLoaded', function() {
    const vipCheckbox = document.getElementById('vipCheckbox');
    const vipBadge = document.querySelector('.vip-badge');
    
    vipCheckbox.addEventListener('change', function() {
        if (this.checked) {
            vipBadge.textContent = 'Premium Member';
            vipBadge.style.background = 'linear-gradient(45deg, #ffd700, #ff6b6b)';
        } else {
            vipBadge.textContent = 'Regular';
            vipBadge.style.background = 'linear-gradient(45deg, #666, #999)';
        }
    });
});