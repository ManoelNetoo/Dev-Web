document.addEventListener("DOMContentLoaded", function() {
      const form = document.querySelector(".needs-validation");

      // Validação em tempo real
      form.querySelectorAll("input, select").forEach(element => {
        element.addEventListener("input", function() {
          if (this.checkValidity()) {
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
          } else {
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");
          }
        });
      });

      // Prevenir envio incorreto
      form.addEventListener("submit", function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      });
    });