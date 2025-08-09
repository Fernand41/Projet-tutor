 <?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bitcoin_education"; 

try {
    $db = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Erreur : " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (!empty($email) && !empty($password)) {
        // Requête préparée sécurisée avec paramètres nommés
        $req = $db->prepare("SELECT * FROM user WHERE email = :email");
        $req->execute(['email' => $email]);
        
        $user = $req->fetch();

        // Vérification du mot de passe avec password_verify()
        if ($user && password_verify($password, $user['password'])) {
            // Connexion réussie
            $_SESSION['user'] = $user;
            header("Location: education.html");
            exit();
        } else {
            echo "<p style='color:red; text-align:center;'>Identifiants invalides</p>";
        }
    } else {
        echo "<p style='color:red; text-align:center;'>Veuillez remplir tous les champs</p>";
    }
}

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion - Cours Bitcoin</title>
    <style>
        /* Réinitialisation et styles de base */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #f8f9fa;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            color: #333;
            line-height: 1.6;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 420px;
            transition: transform 0.3s ease;
        }

        .container:hover {
            transform: translateY(-5px);
        }

        h2 {
            color: #ff7b00;
            margin-bottom: 15px;
            font-size: 26px;
            text-align: center;
            font-weight: 600;
        }

        .subtitle {
            color: #666;
            margin-bottom: 25px;
            font-size: 15px;
            text-align: center;
            line-height: 1.5;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #444;
            font-size: 14px;
        }

        .form-group input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 15px;
            outline: none;
            transition: all 0.3s;
        }

        .form-group input:focus {
            border-color: #ff7b00;
            box-shadow: 0 0 0 3px rgba(255, 123, 0, 0.2);
        }

        .password-container {
            position: relative;
        }

        .toggle-password {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #777;
            font-size: 18px;
            user-select: none;
            transition: color 0.2s;
        }

        .toggle-password:hover {
            color: #ff7b00;
        }

        .error-message {
            display: block;
            color: #e74c3c;
            font-size: 13px;
            margin-top: 6px;
            font-weight: 500;
        }

        .btn {
            width: 100%;
            padding: 14px;
            background-color: #ff7b00;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
        }

        .btn:hover {
            background-color: #e06d00;
            transform: translateY(-2px);
        }

        .btn:active {
            transform: translateY(0);
        }

        .google-btn {
            width: 100%;
            padding: 12px;
            background-color: #fff;
            color: #444;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: all 0.3s;
        }

        .google-btn:hover {
            background-color: #f9f9f9;
            border-color: #ccc;
        }

        .footer-text {
            color: #666;
            margin-top: 25px;
            font-size: 14px;
            text-align: center;
        }

        .link {
            color: #f1c40f;
            font-weight: 600;
            text-decoration: none;
            transition: color 0.2s;
        }

        .link:hover {
            color: #f39c12;
            text-decoration: underline;
        }

        /* Styles responsifs */
        @media (max-width: 480px) {
            .container {
                padding: 20px;
                max-width: 95%;
            }
            
            h2 {
                font-size: 22px;
            }
            
            .btn, .google-btn {
                padding: 12px;
            }
        }

        /* Animation pour les erreurs */
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }

        .shake {
            animation: shake 0.4s ease-in-out;
        }
    </style>
</head>
<body>
  
    <div class="container">
        <form id="login-form" method="POST"  action="">
            <h2>Heureux de vous revoir</h2>
            <p class="subtitle">Connectez-vous pour accéder aux cours sur le BITCOIN</p>

            <div class="form-group">
                <label for="email">Adresse E-mail</label>
                <input type="email" id="email" name="email" required  placeholder="Entrez votre email">
            </div>

            <div class="form-group">
                <label for="password">Mot de passe</label>
                <div class="password-container">
                    <input type="password" id="password" name="password" required 
                           placeholder="Entrez votre mot de passe">
                    <span class="toggle-password" onclick="togglePassword('login-password')">👁️</span>
                </div>
            </div>

            <button type="submit" class="btn" name="ok">Continuer</button>
            
            <div class="separator" style="margin: 20px 0; text-align: center; color: #999; position: relative;">
                <span style="background: #fff; padding: 0 10px; position: relative; z-index: 1;">ou</span>
                <div style="height: 1px; background: #eee; position: absolute; top: 50%; left: 0; right: 0; z-index: 0;"></div>
            </div>
            
            <button type="button" class="google-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                    <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14 18.63 6.72 16.7 5.84 14.1H2.18V16.94C4 20.53 7.7 23 12 23Z" fill="#34A853"/>
                    <path d="M5.84 14.1C5.62 13.43 5.5 12.72 5.5 12C5.5 11.28 5.62 10.57 5.84 9.9V7.06H2.18C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.18 16.94L5.84 14.1Z" fill="#FBBC05"/>
                    <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.7 1 4 3.47 2.18 7.06L5.84 9.9C6.72 7.3 9.14 5.38 12 5.38Z" fill="#EA4335"/>
                </svg>
                Continuer avec Google
            </button>
            
            <p class="footer-text">Pas encore inscrit ? <a href="singup.php" class="link">Créer un compte</a></p>
        </form>
    </div>

    <script>
        // Fonction pour basculer la visibilité du mot de passe
        function togglePassword(fieldId) {
            const field = document.getElementById(fieldId);
            const toggle = field.nextElementSibling;
            
            if (field.type === 'password') {
                field.type = 'text';
                toggle.textContent = '👁️';
            } else {
                field.type = 'password';
                toggle.textContent = '👁️';
            }
        }
    </script>
</body>
</html>