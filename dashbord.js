// ================================
// Application principale pour le tableau de bord Bitcoin
// ================================
class BitcoinDashboard {
    constructor() {
        // Charger les étudiants depuis le localStorage
        this.students = this.loadStudents();

        // Charger les transactions d'achat et de vente
        this.buyTransactions = this.loadBuyTransactions();
        this.sellTransactions = this.loadSellTransactions();

        // Définition des modules (cours / étapes)
        this.modules = [
            {
                id: 'general',
                name: 'Le Général sur Bitcoin',
                description: 'Introduction aux concepts fondamentaux de Bitcoin'
            },
            {
                id: 'fonctionnement',
                name: 'Le Fonctionnement de Bitcoin',
                description: 'Comprendre le mécanisme technique de Bitcoin'
            },
            {
                id: 'obtenir',
                name: 'Comment Obtenir ses Premiers Bitcoin',
                description: 'Méthodes d\'acquisition et d\'échange'
            },
            {
                id: 'securite',
                name: 'Sécurité',
                description: 'Bonnes pratiques de sécurité et protection'
            }
        ];
        
        // Vue par défaut : le tableau de bord
        this.currentView = 'dashboard';
        
        // Initialisation de l'application
        this.init();
    }

    // ================================
    // Initialisation
    // ================================
    init() {
        this.setupEventListeners();   // Écouteurs d'événements
        this.showView('dashboard');   // Afficher la vue par défaut
        this.renderStudents();        // Rendre les étudiants
        this.renderTransactions();    // Rendre les transactions
        this.startTransactionPolling(); // Démarrer la surveillance des nouvelles transactions
    }

    // ================================
    // Gestion des événements
    // ================================
    setupEventListeners() {
        // Bouton : aller au formulaire d'ajout
        document.getElementById('btn-ajouter').addEventListener('click', () => {
            this.showView('add-student');
        });

        // Bouton : retour au dashboard
        document.getElementById('btn-dashboard').addEventListener('click', () => {
            this.showView('dashboard');
        });

        // Boutons : vues des transactions
        document.getElementById('btn-achat').addEventListener('click', () => {
            this.showView('achat');
        });

        document.getElementById('btn-vente').addEventListener('click', () => {
            this.showView('vente');
        });

        // Soumission du formulaire d'ajout étudiant
        document.getElementById('student-form').addEventListener('submit', (e) => {
            this.handleStudentSubmit(e);
        });

        // Bouton : annuler et revenir au dashboard
        document.getElementById('btn-cancel').addEventListener('click', () => {
            this.showView('dashboard');
            this.resetForm();
        });

        // Bouton : fermer le modal de progression
        document.getElementById('btn-close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        // Fermer le modal en cliquant à l'extérieur du contenu
        document.getElementById('progress-modal').addEventListener('click', (e) => {
            if (e.target.id === 'progress-modal') {
                this.closeModal();
            }
        });
    }

    // ================================
    // Gestion des vues (Dashboard / Ajout étudiant / Transactions)
    // ================================
    showView(viewName) {
        // Cacher toutes les vues
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        // Activer la vue demandée
        document.getElementById(`${viewName}-view`).classList.add('active');
        this.currentView = viewName;

        // Mettre à jour les boutons dans la sidebar
        this.updateSidebarState();

        // Rafraîchir les données si on affiche les transactions
        if (viewName === 'achat' || viewName === 'vente') {
            this.renderTransactions();
        }
    }

    // Met à jour le style de la sidebar en fonction de la vue active
    updateSidebarState() {
        const btnAjouter = document.getElementById('btn-ajouter');
        const btnDashboard = document.getElementById('btn-dashboard');
        const btnAchat = document.getElementById('btn-achat');
        const btnVente = document.getElementById('btn-vente');

        // Réinitialisation des styles
        btnAjouter.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        btnDashboard.style.backgroundColor = 'transparent';
        btnAchat.style.backgroundColor = 'transparent';
        btnVente.style.backgroundColor = 'transparent';

        // Ajouter un effet visuel au bouton actif
        if (this.currentView === 'add-student') {
            btnAjouter.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        } else if (this.currentView === 'dashboard') {
            btnDashboard.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        } else if (this.currentView === 'achat') {
            btnAchat.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        } else if (this.currentView === 'vente') {
            btnVente.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
    }

    // ================================
    // Gestion du formulaire d'ajout d'étudiant
    // ================================
    handleStudentSubmit(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        
        // Récupération des valeurs du formulaire
        const formData = new FormData(e.target);
        const studentData = {
            id: this.generateId(), // Génère un identifiant unique
            nom: formData.get('nom').trim(),
            prenom: formData.get('prenom').trim(),
            email: formData.get('email').trim(),
            telephone: formData.get('telephone').trim(),
            wallet: formData.get('wallet'),
            planEpargne: formData.get('plan-epargne'),
            dateInscription: new Date().toISOString(),
            progression: this.initializeProgress()
        };

        // Validation des données
        if (!this.validateStudentData(studentData)) {
            return;
        }

        // Vérifier que l'email n'est pas déjà utilisé
        if (this.students.find(student => student.email === studentData.email)) {
            this.showToast('Cet email est déjà utilisé par un autre étudiant', 'error');
            return;
        }

        // Ajout de l'étudiant et sauvegarde
        this.students.push(studentData);
        this.saveStudents();
        
        // Réinitialiser le formulaire et revenir au dashboard
        this.resetForm();
        this.showView('dashboard');
        this.renderStudents();
        
        // Message de succès
        this.showToast(`${studentData.prenom} ${studentData.nom} a été ajouté avec succès`, 'success');
    }

    // ================================
    // Validation des données du formulaire
    // ================================
    validateStudentData(data) {
        const errors = [];

        if (!data.nom || data.nom.length < 2) {
            errors.push('Le nom doit contenir au moins 2 caractères');
        }

        if (!data.prenom || data.prenom.length < 2) {
            errors.push('Le prénom doit contenir au moins 2 caractères');
        }

        if (!data.email || !this.isValidEmail(data.email)) {
            errors.push('L\'email n\'est pas valide');
        }

        if (!data.telephone || data.telephone.length < 8) {
            errors.push('Le numéro de téléphone doit contenir au moins 8 chiffres');
        }

        if (!data.wallet) {
            errors.push('Veuillez sélectionner un wallet Lightning');
        }

        if (!data.planEpargne) {
            errors.push('Veuillez sélectionner un plan d\'épargne');
        }

        // Affiche la première erreur détectée
        if (errors.length > 0) {
            this.showToast(errors[0], 'error');
            return false;
        }

        return true;
    }

    // Vérifie le format de l'email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Initialise la progression des modules aléatoirement (pour la démo)
    initializeProgress() {
        return this.modules.reduce((progress, module) => {
            progress[module.id] = Math.floor(Math.random() * 101); 
            return progress;
        }, {});
    }

    // ================================
    // Rendu des étudiants dans le dashboard
    // ================================
    renderStudents() {
        const container = document.getElementById('students-list');
        
        // Si aucun étudiant
        if (this.students.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-user-graduate"></i>
                    <h3>Aucun étudiant inscrit</h3>
                    <p>Commencez par ajouter votre premier étudiant en cliquant sur "Ajouter" dans la section Épargne.</p>
                </div>
            `;
            return;
        }

        // Sinon, afficher chaque étudiant
        container.innerHTML = this.students.map(student => {
            const totalProgress = this.calculateTotalProgress(student.progression);
            const walletName = this.getWalletDisplayName(student.wallet);
            const planName = this.getPlanEpargneDisplayName(student.planEpargne);
            
            return `
                <div class="student-card" onclick="dashboard.showProgressModal('${student.id}')">
                    <div class="student-info">
                        <h3>${student.prenom} ${student.nom}</h3>
                        <p><i class="fas fa-envelope"></i> ${student.email}</p>
                        <p><i class="fas fa-phone"></i> ${student.telephone}</p>
                        <span class="wallet-badge">
                            <i class="fas fa-wallet"></i> ${walletName}
                        </span>
                        <span class="plan-badge">
                            <i class="fas fa-piggy-bank"></i> ${planName}
                        </span>
                        <div class="progress-bar">
                            <div class="progress-label">
                                <span>Progression globale</span>
                                <span>${totalProgress}%</span>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${totalProgress}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ================================
    // Gestion des transactions
    // ================================
    
    // Rendu des tableaux de transactions
    renderTransactions() {
        this.renderBuyTransactions();
        this.renderSellTransactions();
    }

    renderBuyTransactions() {
        const tbody = document.querySelector('#achat-table tbody');
        const emptyState = document.getElementById('achat-empty');
        const countElement = document.getElementById('achat-count');
        
        countElement.textContent = this.buyTransactions.length;

        if (this.buyTransactions.length === 0) {
            tbody.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        tbody.innerHTML = this.buyTransactions.map(tx => `
            <tr>
                <td>${this.formatDate(tx.timestamp)}</td>
                <td>${tx.country}</td>
                <td>${tx.lastname}</td>
                <td>${tx.firstname}</td>
                <td title="${tx.email}">${tx.email}</td>
                <td><span class="network-badge">${tx.network}</span></td>
                <td class="amount-cell">${this.formatNumber(tx.amountXOF)} XOF</td>
                <td class="amount-cell">${this.formatNumber(tx.amountSats)} sats</td>
                <td title="${tx.lightningAddress}">${tx.lightningAddress}</td>
                <td><strong>${tx.depositId}</strong></td>
            </tr>
        `).join('');
    }

    renderSellTransactions() {
        const tbody = document.querySelector('#vente-table tbody');
        const emptyState = document.getElementById('vente-empty');
        const countElement = document.getElementById('vente-count');
        
        countElement.textContent = this.sellTransactions.length;

        if (this.sellTransactions.length === 0) {
            tbody.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        tbody.innerHTML = this.sellTransactions.map(tx => `
            <tr>
                <td>${this.formatDate(tx.timestamp)}</td>
                <td>${tx.country}</td>
                <td>${tx.lastname}</td>
                <td>${tx.firstname}</td>
                <td title="${tx.email}">${tx.email}</td>
                <td><span class="network-badge">${tx.network}</span></td>
                <td class="amount-cell">${this.formatNumber(tx.amountSats)} sats</td>
                <td class="amount-cell">${this.formatNumber(tx.amountXOF)} XOF</td>
                <td><strong>${tx.phone}</strong></td>
            </tr>
        `).join('');
    }


    // Polling pour les nouvelles transactions
    startTransactionPolling() {
        setInterval(() => {
            const newBuyTransactions = this.loadBuyTransactions();
            const newSellTransactions = this.loadSellTransactions();
            
            if (newBuyTransactions.length !== this.buyTransactions.length ||
                newSellTransactions.length !== this.sellTransactions.length) {
                
                this.buyTransactions = newBuyTransactions;
                this.sellTransactions = newSellTransactions;
                this.renderTransactions();
                
                // Notification de nouvelles transactions
                if (newBuyTransactions.length > this.buyTransactions.length) {
                    this.showToast('Nouvelle transaction d\'achat reçue!', 'success');
                }
                if (newSellTransactions.length > this.sellTransactions.length) {
                    this.showToast('Nouvelle transaction de vente reçue!', 'success');
                }
            }
        }, 2000); // Vérifier toutes les 2 secondes
    }

    // ================================
    // Gestion des données et utilitaires
    // ================================
    
    // Calcule le pourcentage de progression total
    calculateTotalProgress(progression) {
        const values = Object.values(progression);
        if (values.length === 0) return 0;
        
        const total = values.reduce((sum, value) => sum + value, 0);
        return Math.round(total / values.length);
    }

    // Affiche un nom compréhensible pour un wallet
    getWalletDisplayName(walletKey) {
        const walletNames = {
            'wallet-of-satoshi': 'Wallet of Satoshi',
            'blink': 'Blink',
            'phoenix': 'Phoenix',
            'breez': 'Breez Wallet',
            'electrum': 'Electrum'
        };
        return walletNames[walletKey] || walletKey;
    }

    // Idem pour les plans d'épargne
    getPlanEpargneDisplayName(planKey) {
        const planNames = {
            'plan-1': 'Plan d\'Épargne 1',
            'plan-2': 'Plan d\'Épargne 2',
            'plan-3': 'Plan d\'Épargne 3'
        };
        return planNames[planKey] || planKey;
    }

    // Format de date
    formatDate(isoString) {
        return new Date(isoString).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Format de nombres
    formatNumber(num) {
        return new Intl.NumberFormat('fr-FR').format(num);
    }

    // Affiche la fenêtre modale de progression d'un étudiant
    showProgressModal(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (!student) return;

        const modal = document.getElementById('progress-modal');
        const title = document.getElementById('modal-title');
        const content = document.getElementById('progress-content');

        title.textContent = `Progression de ${student.prenom} ${student.nom}`;
        
        // Contenu détaillé (infos personnelles + modules)
        content.innerHTML = `
            <div class="student-info" style="margin-bottom: 2rem;">
                <p><strong><i class="fas fa-envelope"></i> Email:</strong> ${student.email}</p>
                <p><strong><i class="fas fa-phone"></i> Téléphone:</strong> ${student.telephone}</p>
                <p><strong><i class="fas fa-wallet"></i> Wallet:</strong> ${this.getWalletDisplayName(student.wallet)}</p>
                <p><strong><i class="fas fa-piggy-bank"></i> Plan d'Épargne:</strong> ${this.getPlanEpargneDisplayName(student.planEpargne)}</p>
                <p><strong><i class="fas fa-calendar"></i> Inscription:</strong> ${new Date(student.dateInscription).toLocaleDateString('fr-FR')}</p>
            </div>
            ${this.modules.map(module => {
                const progress = student.progression[module.id] || 0;
                return `
                    <div class="progress-module">
                        <h4>${module.name}</h4>
                        <p style="color: #718096; margin-bottom: 0.5rem;">${module.description}</p>
                        <div class="progress-bar">
                            <div class="progress-label">
                                <span>Progression</span>
                                <span>${progress}%</span>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        `;

        modal.classList.add('active');
    }

    // Ferme la fenêtre modale
    closeModal() {
        document.getElementById('progress-modal').classList.remove('active');
    }

    // ================================
    // Gestion du stockage
    // ================================
    loadStudents() {
        try {
            return JSON.parse(localStorage.getItem('students') || '[]');
        } catch (e) {
            console.error('Erreur lors du chargement des étudiants:', e);
            return [];
        }
    }

    saveStudents() {
        try {
            localStorage.setItem('students', JSON.stringify(this.students));
        } catch (e) {
            console.error('Erreur lors de la sauvegarde des étudiants:', e);
            this.showToast('Erreur lors de la sauvegarde', 'error');
        }
    }

    loadBuyTransactions() {
        try {
            return JSON.parse(localStorage.getItem('buyTransactions') || '[]');
        } catch (e) {
            console.error('Erreur lors du chargement des transactions d\'achat:', e);
            return [];
        }
    }

    loadSellTransactions() {
        try {
            return JSON.parse(localStorage.getItem('sellTransactions') || '[]');
        } catch (e) {
            console.error('Erreur lors du chargement des transactions de vente:', e);
            return [];
        }
    }

    // Réinitialise le formulaire étudiant
    resetForm() {
        document.getElementById('student-form').reset();
    }

    // Génère un ID unique
    generateId() {
        return 'id_' + Math.random().toString(36).substr(2, 9);
    }

    // Affiche une notification toast
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const icon = toast.querySelector('.toast-icon');
        const messageEl = toast.querySelector('.toast-message');

        // Configuration de l'icône selon le type
        if (type === 'success') {
            icon.className = 'toast-icon fas fa-check-circle';
            toast.className = 'toast success';
        } else if (type === 'error') {
            icon.className = 'toast-icon fas fa-exclamation-circle';
            toast.className = 'toast error';
        }

        messageEl.textContent = message;
        toast.classList.add('show');

        // Masquer automatiquement après 4 secondes
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}