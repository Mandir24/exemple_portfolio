document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successAlert = document.getElementById("successAlert");
  const errorAlert = document.getElementById("errorAlert");
  const spinner = document.getElementById("loadingSpinner");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Afficher le spinner
    spinner.classList.remove("d-none");

    try {
      // ⚠️ Remplace le lien ci-dessous par TON lien Formspree
      const response = await fetch("https://formspree.io/f/mqawzrlq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prenom: prenom,
          nom: nom,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        // Succès : afficher le message vert
        successAlert.classList.remove("d-none");
        errorAlert.classList.add("d-none");
        form.reset();
      } else {
        // Erreur : afficher le message rouge
        successAlert.classList.add("d-none");
        errorAlert.classList.remove("d-none");
      }
    } catch (error) {
      // Erreur réseau
      successAlert.classList.add("d-none");
      errorAlert.classList.remove("d-none");
      console.error("Erreur d’envoi :", error);
    } finally {
      // Cacher le spinner après traitement
      spinner.classList.add("d-none");
    }
  });
});