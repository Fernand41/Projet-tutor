// Sélectionne tous les éléments avec la classe 'faq-question' pour la section FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    // Ajoute un écouteur d'événement de clic à chaque question
    question.addEventListener('click', () => {
        // Récupère l'élément suivant (la réponse correspondante)
        const answer = question.nextElementSibling;
        // Alterne la classe 'active' pour modifier l'apparence de la question (ex. "+" en "-")
        question.classList.toggle('active');
        // Alterne la classe 'show' pour afficher ou masquer la réponse avec une transition
        answer.classList.toggle('show');
    });
});

// Sélectionne l'icône hamburger par son ID
const hamburger = document.getElementById('hamburger');
// Sélectionne le conteneur des liens de navigation par son ID
const navLinks = document.getElementById('nav-links');

// Ajoute un écouteur d'événement de clic à l'icône hamburger
hamburger.addEventListener('click', () => {
    // Alterne la classe 'active' pour transformer l'icône hamburger en "X" ou vice-versa
    hamburger.classList.toggle('active');
    // Alterne la classe 'active' pour afficher ou masquer la barre latérale de navigation
    navLinks.classList.toggle('active');
});

// Sélectionne tous les liens dans le conteneur de navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    // Ajoute un écouteur d'événement de clic à chaque lien
    link.addEventListener('click', () => {
        // Supprime la classe 'active' de l'icône hamburger pour rétablir son apparence initiale
        hamburger.classList.remove('active');
        // Supprime la classe 'active' du conteneur des liens pour fermer la barre latérale
        navLinks.classList.remove('active');
    });
});