
// Taux de conversion basé sur 100M sats = 64,546,467.303 XOF
const XOF_PER_SAT = 64546467.303 / 100000000; // 1 sat = 0.64546467303 XOF
const SATS_PER_XOF = 100000000 / 64546467.303; // 1 XOF = 1.549 sats environ

// Numéros de téléphone par réseau
const PHONE_NUMBERS = {
    'MOOV': '0168124256',
    'MTN': '0154006206',
    'CELTIIS': '0147518373'
};

// Variables globales pour stocker les données
let buyFormData = {};
let sellFormData = {};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    setupScrollEffects();
});

function initializeEventListeners() {
    // Boutons principaux
    document.getElementById('buy-btn').addEventListener('click', openBuyModal);
    document.getElementById('sell-btn').addEventListener('click', openSellModal);

    // Fermeture des modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Fermer modal en cliquant à l'extérieur
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Formulaires
    document.getElementById('buy-form1').addEventListener('submit', handleBuyStep1);
    document.getElementById('buy-form2').addEventListener('submit', handleBuyStep2);
    document.getElementById('sell-form1').addEventListener('submit', handleSellStep1);

    // Calculs automatiques
    document.getElementById('buy-amount-xof').addEventListener('input', calculateBuySats);
    document.getElementById('sell-amount-sats').addEventListener('input', calculateSellXOF);
}

function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });
}

// Fonctions de calcul
function calculateBuySats() {
    const xofAmount = parseFloat(document.getElementById('buy-amount-xof').value) || 0;
    const satsAmount = Math.floor(xofAmount * SATS_PER_XOF);
    document.getElementById('buy-amount-sats').value = satsAmount > 0 ? satsAmount : '';
}

function calculateSellXOF() {
    const satsAmount = parseFloat(document.getElementById('sell-amount-sats').value) || 0;
    const xofAmount = Math.floor(satsAmount * XOF_PER_SAT);
    document.getElementById('sell-amount-xof').value = xofAmount > 0 ? xofAmount : '';
}

// Gestion des modals - Achat
function openBuyModal() {
    document.getElementById('buy-modal').style.display = 'block';
    showBuyStep1();
}

function closeBuyModal() {
    document.getElementById('buy-modal').style.display = 'none';
    resetBuyForm();
}

function showBuyStep1() {
    document.getElementById('buy-step1').classList.add('active');
    document.getElementById('buy-step2').classList.remove('active');
}

function showBuyStep2() {
    document.getElementById('buy-step1').classList.remove('active');
    document.getElementById('buy-step2').classList.add('active');
    
    // Afficher les informations de dépôt
    const network = buyFormData.network;
    const amount = buyFormData.amountXOF;
    
    document.getElementById('deposit-amount').textContent = amount;
    document.getElementById('deposit-number').textContent = PHONE_NUMBERS[network];
}

function handleBuyStep1(e) {
    e.preventDefault();
    
    // Collecter les données du formulaire
    buyFormData = {
        country: document.getElementById('buy-country').value,
        network: document.getElementById('buy-network').value,
        firstname: document.getElementById('buy-firstname').value,
        lastname: document.getElementById('buy-lastname').value,
        email: document.getElementById('buy-email').value,
        amountXOF: document.getElementById('buy-amount-xof').value,
        amountSats: document.getElementById('buy-amount-sats').value
    };
    
    showBuyStep2();
}

function handleBuyStep2(e) {
    e.preventDefault();
    
    // Ajouter les données de la deuxième étape
    buyFormData.depositId = document.getElementById('deposit-id').value;
    buyFormData.lightningAddress = document.getElementById('lightning-address').value;
    
    // Afficher le message de succès
    document.getElementById('buy-form2').style.display = 'none';
    document.getElementById('buy-success').style.display = 'block';
    
    // Simuler un délai de traitement
    setTimeout(() => {
        closeBuyModal();
        alert('Votre transaction d\'achat a été enregistrée. Vous recevrez vos sats sous peu.');
    }, 3000);
}

function resetBuyForm() {
    document.getElementById('buy-form1').reset();
    document.getElementById('buy-form2').reset();
    document.getElementById('buy-form2').style.display = 'block';
    document.getElementById('buy-success').style.display = 'none';
    buyFormData = {};
}

// Gestion des modals - Vente
function openSellModal() {
    document.getElementById('sell-modal').style.display = 'block';
    showSellStep1();
}

function closeSellModal() {
    document.getElementById('sell-modal').style.display = 'none';
    resetSellForm();
}

function showSellStep1() {
    document.getElementById('sell-step1').classList.add('active');
    document.getElementById('sell-step2').classList.remove('active');
    document.getElementById('sell-step3').classList.remove('active');
}

function showSellStep2() {
    document.getElementById('sell-step1').classList.remove('active');
    document.getElementById('sell-step2').classList.add('active');
    document.getElementById('sell-step3').classList.remove('active');
    
    // Afficher les montants
    document.getElementById('sell-sats-amount').textContent = sellFormData.amountSats;
    document.getElementById('sell-xof-amount').textContent = sellFormData.amountXOF;
}

function showSellStep3() {
    document.getElementById('sell-step1').classList.remove('active');
    document.getElementById('sell-step2').classList.remove('active');
    document.getElementById('sell-step3').classList.add('active');
}

function showSellConfirm() {
    showSellStep3();
}

function handleSellStep1(e) {
    e.preventDefault();
    
    // Collecter les données du formulaire
    sellFormData = {
        country: document.getElementById('sell-country').value,
        network: document.getElementById('sell-network').value,
        firstname: document.getElementById('sell-firstname').value,
        lastname: document.getElementById('sell-lastname').value,
        email: document.getElementById('sell-email').value,
        amountSats: document.getElementById('sell-amount-sats').value,
        amountXOF: document.getElementById('sell-amount-xof').value,
        phone: document.getElementById('sell-phone').value
    };
    
    showSellStep2();
}

function confirmSellTransaction() {
    // Cacher les boutons et afficher le message de succès
    const buttons = document.querySelector('#sell-step3 .form-buttons');
    const successMsg = document.getElementById('sell-success');
    
    buttons.style.display = 'none';
    successMsg.style.display = 'block';
    
    // Fermer le modal après un délai
    setTimeout(() => {
        closeSellModal();
    }, 3000);
}

function resetSellForm() {
    document.getElementById('sell-form1').reset();
    document.getElementById('sell-success').style.display = 'none';
    const buttons = document.querySelector('#sell-step3 .form-buttons');
    if (buttons) buttons.style.display = 'flex';
    sellFormData = {};
}

// Fonctions utilitaires
function formatNumber(num) {
    return new Intl.NumberFormat('fr-FR').format(num);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{8,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Animation smooth scroll
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}
