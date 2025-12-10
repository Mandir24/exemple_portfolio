// ===============================
// 🎯 Gestion de l'affichage des descriptions
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".logo-item");
    const description = document.getElementById("outil-description");
  
    if (!description) return; // sécurité
  
    logos.forEach((logo) => {
      logo.addEventListener("mouseenter", () => {
        description.textContent = logo.getAttribute("data-info");
      });
  
      logo.addEventListener("mouseleave", () => {
        description.textContent = "Survolez un logo pour voir sa description.";
      });
    });
  });