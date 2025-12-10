// Initialiser EmailJS avec votre clé publique
emailjs.init("service_9w9iqeg"); // À remplacer par votre clé

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Affichage du spinner
    const submitButton = e.target.querySelector('button[type="submit"]');
    const spinner = document.getElementById('loadingSpinner');
    submitButton.disabled = true;
    spinner.style.display = 'inline-block';
    
    // Masquer les alertes précédentes
    document.getElementById('successAlert').style.display = 'none';
    document.getElementById('errorAlert').style.display = 'none';
    
    // Récupération des données
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Paramètres pour l'email principal (celui que vous recevez)
    const templateParams = {
        from_name: prenom + ' ' + nom,
        from_email: email,
        message: message,
        to_email: 'yan.holtz.data@gmail.com'
    };
    
    // Envoyer l'email principal
    emailjs.send('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Email principal envoyé!', response.status, response.text);
            
            // Envoyer l'email de confirmation automatique à l'utilisateur
            const confirmParams = {
                to_name: prenom,
                to_email: email,
                user_message: message
            };
            
            return emailjs.send('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_CONFIRMATION_ID', confirmParams);
        })
        .then(function(response) {
            console.log('Email de confirmation envoyé!', response.status, response.text);
            
            // Afficher le message de succès
            document.getElementById('successAlert').style.display = 'block';
            document.getElementById('contactForm').reset();
            document.getElementById('successAlert').scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(function(error) {
            console.error('Erreur:', error);
            document.getElementById('errorAlert').style.display = 'block';
            document.getElementById('errorAlert').scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .finally(function() {
            // Réactiver le bouton
            submitButton.disabled = false;
            spinner.style.display = 'none';
        });
});