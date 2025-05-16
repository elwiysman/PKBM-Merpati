document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to PKBM Merpati!");

  document.querySelector("form").addEventListener("submit", function (event) {
    const fileInputs = [
      document.getElementById("last-diploma"),
      document.getElementById("student-id"),
      document.getElementById("birth-certificate"),
      document.getElementById("family-card"),
    ];
    for (let i = 0; i < fileInputs.length; i++) {
      const fileInput = fileInputs[i];
      const file = fileInput.files[0];

      if (file) {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        if (fileExtension !== "pdf") {
          alert(
            "Harap unggah file PDF saja untuk dokumen: " +
              fileInput.labels[0].innerText
          );
          event.preventDefault();
          return;
        }
      }
    }
  });
});

function toggleMenu() {
  var menu = document.getElementById("nav-menu");
  var overlay = document.querySelector(".overlay");

  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", toggleMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  let inputs = document.querySelectorAll("input, select");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        input.classList.add("valid");
        input.classList.remove("invalid");
      } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
      }
    });
  });

  // Validasi NIK (16 digit)
  let nikInput = document.getElementById("id-number");
  nikInput.addEventListener("input", function () {
    let nikValue = nikInput.value;
    if (nikValue.length === 16 && !isNaN(nikValue)) {
      nikInput.classList.add("valid");
      nikInput.classList.remove("invalid");
    } else {
      nikInput.classList.add("invalid");
      nikInput.classList.remove("valid");
    }
  });
  let nisnInput = document.getElementById("nisn");
  nisnInput.addEventListener("input", function () {
    let nisnValue = nisnInput.value;
    if (/^\d{10}$/.test(nisnValue)) {
      nisnInput.classList.add("valid");
      nisnInput.classList.remove("invalid");
    } else {
      nisnInput.classList.add("invalid");
      nisnInput.classList.remove("valid");
    }
  });
  let selects = document.querySelectorAll("select, input[type='date']");
  selects.forEach((select) => {
    select.addEventListener("change", function () {
      if (select.value) {
        select.classList.add("valid");
        select.classList.remove("invalid");
      } else {
        select.classList.add("invalid");
        select.classList.remove("valid");
      }
    });
  });
});

function toggleParent() {
  var parentSection = document.getElementById("parent-section");
  var checkbox = document.getElementById("no-parent");

  if (checkbox.checked) {
    parentSection.style.display = "none";
    document.getElementById("father-name").removeAttribute("required");
    document.getElementById("father-occupation").removeAttribute("required");
    document.getElementById("mother-name").removeAttribute("required");
    document.getElementById("mother-occupation").removeAttribute("required");
  } else {
    parentSection.style.display = "block";
    document.getElementById("father-name").setAttribute("required", "true");
    document
      .getElementById("father-occupation")
      .setAttribute("required", "true");
    document.getElementById("mother-name").setAttribute("required", "true");
    document
      .getElementById("mother-occupation")
      .setAttribute("required", "true");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  toggleParent();
  document.getElementById("no-parent").addEventListener("change", toggleParent);
});
document.addEventListener("DOMContentLoaded", function () {
  let noParentCheckbox = document.getElementById("no-parent");
  let parentSection = document.getElementById("parent-section");
  let guardianSection = document.getElementById("guardian-section");

  // Saat halaman pertama kali dimuat, sembunyikan wali
  guardianSection.style.display = "none";

  // Event listener untuk checkbox
  noParentCheckbox.addEventListener("change", function () {
    if (this.checked) {
      parentSection.style.display = "none"; // Sembunyikan orang tua
      guardianSection.style.display = "block"; // Tampilkan wali
    } else {
      parentSection.style.display = "block"; // Tampilkan orang tua
      guardianSection.style.display = "none"; // Sembunyikan wali
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
