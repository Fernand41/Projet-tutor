<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bitcoin Exchange - Acheter et Vendre Bitcoin</title>
    <link href="achat.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <!-- Page principale -->
    <div id="main-page" class="page">
        <div class="hero-section">
            <div class="text-content">
                <h1 class="main-title">Découvrez le pouvoir de Bitcoin, à partir de 100 XOF !</h1>
                <p class="subtitle">Accédez au Bitcoin à partir de 100 Francs CFA pour simplifier vos achats de services et forfaits mobiles. Explorez un nouveau monde de possibilités financières !</p>
            </div>
            <div class="bitcoin-image">
                <img src="Bitcoin-info.d4aa6a58.svg" alt="Bitcoin" />
            </div>
        </div>

        <div class="lightning-section">
            <div class="text-content">
                <h2 class="lightning-title">Échangez vos Bitcoins en toute simplicité grâce à Lightning !</h2>
                <p class="lightning-description">Avec Lightning, vous pouvez effectuer des transactions Bitcoin de manière rapide et pratique. Profitez d'une expérience fluide et sécurisée pour échanger vos Bitcoins en un éclair. Découvrez la puissance de Lightning pour des échanges instantanés et sans tracas !</p>
                
                <div class="buttons-container">
                    <button id="buy-btn" class="action-btn">Acheter</button>
                    <button id="sell-btn" class="action-btn">Vendre</button>
                </div>
            </div>
            <div class="bitcoin-image">
                <img src="img_circle1.625912c4.svg" alt="Bitcoin Lightning" />
            </div>
        </div>
    </div>

    <!-- Modal d'achat -->
    <div id="buy-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            
            <!-- Étape 1: Informations de base -->
            <div id="buy-step1" class="step active">
                <h3>Acheter Bitcoin</h3>
                <form id="buy-form1" action="traitement.php" method="POST">
                    <input type="hidden" name="operation" value="achat">
                    
                    <div class="form-group">
                        <label>Pays:</label>
                        <input type="text" id="buy-country" name="country" placeholder="Saisissez votre pays" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Choisissez votre réseau:</label>
                        <select id="buy-network" name="network" required>
                            <option value="">Sélectionnez un réseau</option>
                            <option value="MOOV">MOOV</option>
                            <option value="MTN">MTN</option>
                            <option value="CELTIIS">CELTIIS</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Prénom:</label>
                        <input type="text" id="buy-firstname" name="firstname" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Nom:</label>
                        <input type="text" id="buy-lastname" name="lastname" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" id="buy-email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Montant à payer en XOF:</label>
                        <input type="number" id="buy-amount-xof" name="amount_xof" placeholder="Ex: 1000" min="100" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Montant à recevoir en sats:</label>
                        <input type="text" id="buy-amount-sats" name="amount_sats" readonly>
                    </div>
                    
                    <div class="form-buttons">
                        <button type="button" class="btn-secondary" onclick="closeBuyModal()">Précédent</button>
                        <button type="submit" class="btn-primary" >Continuer</button>
                    </div>
                </form>
            </div>

            <!-- Étape 2: Dépôt -->
            <div id="buy-step2" class="step">
                <h3>Effectuer le dépôt</h3>
                <p>Effectuer le dépôt de l'argent que vous avez entré lors des renseignements (<span id="deposit-amount"></span> XOF) sur le Numéro ci-dessous et compléter le formulaire.</p>
                
                <div class="deposit-info">
                    <p><strong>Nom:</strong> Fernand METCHIHOUNGBE</p>
                    <p><strong>Numéro:</strong> <span id="deposit-number"></span></p>
                </div>
                
                <form id="buy-form2" action="traitement.php" method="POST">
                    <input type="hidden" name="operation" value="achat">
                    <input type="hidden" id="buy-country2" name="country">
                    <input type="hidden" id="buy-network2" name="network">
                    <input type="hidden" id="buy-firstname2" name="firstname">
                    <input type="hidden" id="buy-lastname2" name="lastname">
                    <input type="hidden" id="buy-email2" name="email">
                    <input type="hidden" id="buy-amount-xof2" name="amount_xof">
                    <input type="hidden" id="buy-amount-sats2" name="amount_sats">
                    
                    <div class="form-group">
                        <label>Identifiant du dépôt:</label>
                        <input type="text" id="deposit-id" name="deposit_id" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Adresse Lightning qui va recevoir les sats:</label>
                        <input type="text" id="lightning-address" name="lightning_address" placeholder="votre@adresse.lightning" required>
                    </div>
                    
                    <div class="form-buttons">
                        <button type="button" class="btn-secondary" onclick="showBuyStep1()">Précédent</button>
                        <button type="submit" class="btn-primary" name="operation">Confirmer</button>
                    </div>
                </form>
                
                <div id="buy-success" class="success-message" style="display: none;">
                    <p>Veuillez patienter un instant...</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal de vente -->
    <div id="sell-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            
            <!-- Étape 1: Informations de base -->
            <div id="sell-step1" class="step active">
                <h3>Vendre Bitcoin</h3>
                <form id="sell-form1" action="traitement.php" method="POST">
                    <input type="hidden" name="operation" value="vente">
                    
                    <div class="form-group">
                        <label>Pays:</label>
                        <input type="text" id="sell-country" name="country" placeholder="Saisissez votre pays" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Choisissez votre réseau:</label>
                        <select id="sell-network" name="network" required>
                            <option value="">Sélectionnez un réseau</option>
                            <option value="MOOV">MOOV</option>
                            <option value="MTN">MTN</option>
                            <option value="CELTIIS">CELTIIS</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Prénom:</label>
                        <input type="text" id="sell-firstname" name="firstname" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Nom:</label>
                        <input type="text" id="sell-lastname" name="lastname" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" id="sell-email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Montant en sats à vendre:</label>
                        <input type="number" id="sell-amount-sats" name="amount_sats" placeholder="Ex: 10000" min="" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Montant à recevoir en XOF:</label>
                        <input type="text" id="sell-amount-xof" name="amount_xof" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label>Numéro qui va recevoir le dépôt après vente:</label>
                        <input type="tel" id="sell-phone" name="phone" required>
                    </div>
                    
                    <div class="form-buttons">
                        <button type="button" class="btn-secondary" onclick="closeSellModal()">Précédent</button>
                        <button type="submit" class="btn-primary" >Continuer</button>
                    </div>
                </form>
            </div>

            <!-- Étape 2: Envoi des sats -->
            <div id="sell-step2" class="step">
                <h3>Envoyer vos sats</h3>
                <p>Envoyez vos sats sur cette adresse pour recevoir votre argent en XOF:</p>
                
                <div class="deposit-info">
                    <p><strong>Adresse Lightning:</strong> equalounce76@walletofsatoshi.com</p>
                    <p><strong>Montant à envoyer:</strong> <span id="sell-sats-amount"></span> sats</p>
                    <p><strong>Vous recevrez:</strong> <span id="sell-xof-amount"></span> XOF</p>
                </div>
                
                <div class="form-buttons">
                    <button type="button" class="btn-secondary" onclick="showSellStep1()">Précédent</button>
                    <button type="button" class="btn-primary" onclick="showSellConfirm()">Continuer</button>
                </div>
            </div>

            <!-- Étape 3: Confirmation -->
            <div id="sell-step3" class="step">
                <h3>Confirmation</h3>
                <p>Vous êtes sur le point de valider votre transaction.</p>
                
                <div class="form-buttons">
                    <button type="button" class="btn-secondary" onclick="showSellStep2()">Précédent</button>
                    <button type="button" class="btn-primary" onclick="confirmSellTransaction()" name="operation">Valider</button>
                </div>
                
                <div id="sell-success" class="success-message" style="display: none;">
                    <p>Merci pour la confiance de nous avoir choisis !</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Section -->
    <entête>
        <h2>Ensemble pour une autonomisation des jeunes & PME en Afrique avec Bitcoin</h2>
    </entête>
    <hr>
    <main>
        <section class="content">
            <div class="flash-section">
                <h2><span class="flash-icon">⚡</span> SatoshiHub</h2>
                <p>Passionnés de Bitcoin et de sa technologie, nous travaillons à vous permettre d'accéder aux services du quotidien grâce au Bitcoin. Vous pouvez facilement acheter vos unités mobiles, forfaits et autres avec Bitcoin.</p>
            </div>
            <div class="links">
                <div class="column">
                    <h3>Produit</h3>
                    <ul>
                        <li><a href="#bitpay">SatoshiHub</a></li>
                        <li><a href="https://bitcoinflash.xyz/" target="_blank">SatoshiHubPayment</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="http://Wa.me//+22954006206" target="_blank">Contactez-nous</a></li>
                        <li><a href="https://x.com/MMetchihoungbe" target="_blank">Twitter</a></li>
                        <li><a href="https://www.facebook.com/fernand.metchihoungbe" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p>© SatoshiHub - 2025 - 2026. Tous droits réservés. <a href="#confidentialite">Confidentialité</a> <a href="#conditions">Conditions d'utilisation</a></p>
        <hr>
        <p>Propulsé par <a href="https://bitcoinflash.xyz/" target="_blank">Flash</a></p>
    </footer>

    <script>
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
        
        // Récupérer les valeurs du premier formulaire
        const form1 = document.getElementById('buy-form1');
        const formData = new FormData(form1);
        
        // Remplir les champs cachés du deuxième formulaire
        document.getElementById('buy-country2').value = formData.get('country');
        document.getElementById('buy-network2').value = formData.get('network');
        document.getElementById('buy-firstname2').value = formData.get('firstname');
        document.getElementById('buy-lastname2').value = formData.get('lastname');
        document.getElementById('buy-email2').value = formData.get('email');
        document.getElementById('buy-amount-xof2').value = formData.get('amount_xof');
        document.getElementById('buy-amount-sats2').value = formData.get('amount_sats');
        
        // Afficher les informations de dépôt
        const network = formData.get('network');
        const amount = formData.get('amount_xof');
        
        document.getElementById('deposit-amount').textContent = amount;
        document.getElementById('deposit-number').textContent = PHONE_NUMBERS[network];
    }

    function handleBuyStep1(e) {
        e.preventDefault();
        showBuyStep2();
    }

   function handleBuyStep2(e) {
    e.preventDefault();
    
    // Afficher le chargement
    document.getElementById('buy-form2').style.display = 'none';
    document.getElementById('buy-success').style.display = 'block';
    
    // Récupérer les données du formulaire
    const formData = new FormData(document.getElementById('buy-form2'));
    
    // Envoyer les données via AJAX
    fetch('traitement.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            setTimeout(() => {
                closeBuyModal();
                alert(data.message);
                // Vous pouvez accéder aux données avec data.data
                console.log('Données enregistrées:', data.data);
            }, 2000);
        } else {
            document.getElementById('buy-form2').style.display = 'block';
            document.getElementById('buy-success').style.display = 'none';
            alert('Erreur: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        document.getElementById('buy-form2').style.display = 'block';
        document.getElementById('buy-success').style.display = 'none';
        alert('Une erreur réseau est survenue');
    });
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
        document.getElementById('sell-sats-amount').textContent = document.getElementById('sell-amount-sats').value;
        document.getElementById('sell-xof-amount').textContent = document.getElementById('sell-amount-xof').value;
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
        showSellStep2();
    }

    function confirmSellTransaction() {
    // Récupérer les données du formulaire
    const formData = new FormData(document.getElementById('sell-form1'));
    
    // Afficher le chargement
    const buttons = document.querySelector('#sell-step3 .form-buttons');
    const successMsg = document.getElementById('sell-success');
    buttons.style.display = 'none';
    successMsg.style.display = 'block';
    
    // Envoyer les données via AJAX
    fetch('traitement.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            setTimeout(() => {
                closeSellModal();
                alert(data.message);
                console.log('Données enregistrées:', data.data);
            }, 2000);
        } else {
            buttons.style.display = 'flex';
            successMsg.style.display = 'none';
            alert('Erreur: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        buttons.style.display = 'flex';
        successMsg.style.display = 'none';
        alert('Une erreur réseau est survenue');
    });
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
    </script>
</body>
</html>