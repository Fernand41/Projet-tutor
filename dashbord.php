<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de Bord Formation Bitcoin</title>
    <link rel="stylesheet" href="dashbord.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <?php
    // Connexion à la base de données
    $db = new PDO("mysql:host=localhost;dbname=bitcoin_education;charset=utf8", "root", "");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer les transactions d'achat
    $buyQuery = $db->query("SELECT * FROM buy_transactions ORDER BY created_at DESC");
    $buyTransactions = $buyQuery->fetchAll(PDO::FETCH_ASSOC);

    // Récupérer les transactions de vente
    $sellQuery = $db->query("SELECT * FROM sell_transactions ORDER BY created_at DESC");
    $sellTransactions = $sellQuery->fetchAll(PDO::FETCH_ASSOC);
    ?>
    
    <div class="container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h2><i class="fab fa-bitcoin"></i> Bitcoin Dashboard</h2>
            </div>
            
            <!-- Section Épargne -->
            <div class="sidebar-section">
                <h3><i class="fas fa-piggy-bank"></i> Épargne</h3>
                <button class="btn-primary" id="btn-ajouter">
                    <i class="fas fa-plus"></i> Ajouter
                </button>
            </div>
            
            <!-- Section Leçon -->
            <div class="sidebar-section">
                <h3><i class="fas fa-graduation-cap"></i> Leçon</h3>
                <button class="btn-secondary" id="btn-dashboard">
                    <i class="fas fa-tachometer-alt"></i> Dashboard
                </button>
            </div>

            <!-- Section Achat / Vente -->
            <div class="sidebar-section">
                <h3><i class="fas fa-exchange-alt"></i> Achat / Vente</h3>
                <button class="btn-secondary" id="btn-achat">
                    <i class="fas fa-shopping-cart"></i> Achat
                </button>
                <button class="btn-secondary" id="btn-vente" style="margin-top: 10px;">
                    <i class="fas fa-tags"></i> Vente
                </button>
            </div>
        </aside>

        <!-- Contenu principal -->
        <main class="main-content">
            <!-- Vue Dashboard (par défaut) -->
            <div id="dashboard-view" class="view active">
                <div class="page-header">
                    <h1><i class="fas fa-chart-line"></i> Dashboard de Formation</h1>
                    <p>Suivi des étudiants et de leur progression</p>
                </div>
                
                <!-- Liste des étudiants -->
                <div class="students-section">
                    <h2>Étudiants Inscrits</h2>
                    <div id="students-list" class="students-grid">
                        <!-- Les étudiants seront ajoutés dynamiquement -->
                    </div>
                </div>
                
                <!-- Modules de formation -->
                <div class="modules-section">
                    <h2>Modules de Formation</h2>
                    <div class="modules-grid">
                        <div class="module-card">
                            <i class="fab fa-bitcoin module-icon"></i>
                            <h3>Le Général sur Bitcoin</h3>
                            <p>Introduction aux concepts fondamentaux de Bitcoin</p>
                        </div>
                        <div class="module-card">
                            <i class="fas fa-cogs module-icon"></i>
                            <h3>Le Fonctionnement de Bitcoin</h3>
                            <p>Comprendre le mécanisme technique de Bitcoin</p>
                        </div>
                        <div class="module-card">
                            <i class="fas fa-coins module-icon"></i>
                            <h3>Comment Obtenir ses Premiers Bitcoin</h3>
                            <p>Méthodes d'acquisition et d'échange</p>
                        </div>
                        <div class="module-card">
                            <i class="fas fa-shield-alt module-icon"></i>
                            <h3>Sécurité</h3>
                            <p>Bonnes pratiques de sécurité et protection</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Vue Ajouter Étudiant -->
            <div id="add-student-view" class="view">
                <!-- ... (contenu existant) ... -->
            </div>

            <!-- Vue Transactions Achat -->
            <div id="achat-view" class="view">
                <div class="page-header">
                    <h1><i class="fas fa-shopping-cart"></i> Transactions d'Achat</h1>
                    <p>Liste des demandes d'achat de Bitcoin</p>
                </div>
                
                <div class="transactions-section">
                    <div class="transactions-header">
                        <h2>Demandes d'Achat Bitcoin</h2>
                        <div class="stats">
                            <span class="stat-badge">Total: <span id="achat-count"><?= count($buyTransactions) ?></span></span>
                        </div>
                    </div>
                    <div class="table-container">
                        <table id="achat-table" class="transactions-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Pays</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>Réseau</th>
                                    <th>Montant XOF</th>
                                    <th>Montant Sats</th>
                                    <th>Adresse Lightning</th>
                                    <th>ID Dépôt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if (empty($buyTransactions)): ?>
                                    <tr>
                                        <td colspan="10" class="empty-state">
                                            <i class="fas fa-shopping-cart"></i>
                                            <h3>Aucune transaction d'achat</h3>
                                            <p>Les transactions d'achat apparaîtront ici lorsque des utilisateurs rempliront le formulaire d'achat.</p>
                                        </td>
                                    </tr>
                                <?php else: ?>
                                    <?php foreach($buyTransactions as $tx): ?>
                                    <tr>
                                        <td><?= date('d/m/Y H:i', strtotime($tx['created_at'])) ?></td>
                                        <td><?= htmlspecialchars($tx['country']) ?></td>
                                        <td><?= htmlspecialchars($tx['lastname']) ?></td>
                                        <td><?= htmlspecialchars($tx['firstname']) ?></td>
                                        <td><?= htmlspecialchars($tx['email']) ?></td>
                                        <td><span class="network-badge"><?= htmlspecialchars($tx['network']) ?></span></td>
                                        <td class="amount-cell"><?= number_format($tx['amount_xof'], 0, ',', ' ') ?> XOF</td>
                                        <td class="amount-cell"><?= number_format($tx['amount_sats'], 0, ',', ' ') ?> sats</td>
                                        <td title="<?= htmlspecialchars($tx['lightning_address']) ?>"><?= substr(htmlspecialchars($tx['lightning_address']), 0, 15) ?>...</td>
                                        <td><strong><?= htmlspecialchars($tx['deposit_id']) ?></strong></td>
                                    </tr>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Vue Transactions Vente -->
            <div id="vente-view" class="view">
                <div class="page-header">
                    <h1><i class="fas fa-tags"></i> Transactions de Vente</h1>
                    <p>Liste des demandes de vente de Bitcoin</p>
                </div>
                
                <div class="transactions-section">
                    <div class="transactions-header">
                        <h2>Demandes de Vente Bitcoin</h2>
                        <div class="stats">
                            <span class="stat-badge">Total: <span id="vente-count"><?= count($sellTransactions) ?></span></span>
                        </div>
                    </div>
                    <div class="table-container">
                        <table id="vente-table" class="transactions-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Pays</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>Réseau</th>
                                    <th>Montant Sats</th>
                                    <th>Montant XOF</th>
                                    <th>Numéro Réception</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if (empty($sellTransactions)): ?>
                                    <tr>
                                        <td colspan="9" class="empty-state">
                                            <i class="fas fa-tags"></i>
                                            <h3>Aucune transaction de vente</h3>
                                            <p>Les transactions de vente apparaîtront ici lorsque des utilisateurs rempliront le formulaire de vente.</p>
                                        </td>
                                    </tr>
                                <?php else: ?>
                                    <?php foreach($sellTransactions as $tx): ?>
                                    <tr>
                                        <td><?= date('d/m/Y H:i', strtotime($tx['created_at'])) ?></td>
                                        <td><?= htmlspecialchars($tx['country']) ?></td>
                                        <td><?= htmlspecialchars($tx['lastname']) ?></td>
                                        <td><?= htmlspecialchars($tx['firstname']) ?></td>
                                        <td><?= htmlspecialchars($tx['email']) ?></td>
                                        <td><span class="network-badge"><?= htmlspecialchars($tx['network']) ?></span></td>
                                        <td class="amount-cell"><?= number_format($tx['amount_sats'], 0, ',', ' ') ?> sats</td>
                                        <td class="amount-cell"><?= number_format($tx['amount_xof'], 0, ',', ' ') ?> XOF</td>
                                        <td><strong><?= htmlspecialchars($tx['phone']) ?></strong></td>
                                    </tr>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Modal de progression -->
    <div id="progress-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modal-title">Progression de l'Étudiant</h3>
                <button class="btn-close" id="btn-close-modal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div id="progress-content">
                    <!-- Contenu de progression sera ajouté dynamiquement -->
                </div>
            </div>
        </div>
    </div>

    <!-- Toast pour les notifications -->
    <div id="toast" class="toast">
        <div class="toast-content">
            <i class="toast-icon"></i>
            <span class="toast-message"></span>
        </div>
    </div>

    <script src="dashbord.js"></script>
</body>
</html>