// === JavaScript for Image Carousel Navigation ===
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselImages = document.querySelectorAll('.carousel img');
const wallpaperTitle = document.getElementById('wallpaper-title');
const wallpaperDesc = document.getElementById('wallpaper-desc');

let currentIndex = 0;

function changeImage(index) {
  carouselImages.forEach((img) => img.classList.remove('active'));
  carouselImages[index].classList.add('active');

  const currentImage = carouselImages[index];
  wallpaperTitle.textContent = currentImage.getAttribute('data-title');
  wallpaperDesc.textContent = currentImage.getAttribute('data-desc');
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  changeImage(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  changeImage(currentIndex);
});

changeImage(currentIndex);



/************************   Patient Mangement       ************************* */

// === Wait until DOM is fully loaded ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("patientForm");
  const tableBody = document.getElementById("patientTableBody");

  // === Handle form submission ===
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    // === Collect input values ===
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const disease = document.getElementById("disease").value.trim();

    // === Create table row ===
    const row = document.createElement("tr");

    // === Populate row with data ===
    row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${disease}</td>
    `;

    // === Append to table ===
    tableBody.appendChild(row);

    // === Clear form fields ===
    form.reset();
  });
});


/********************         Appointmnt            **************** */


// === Run script after DOM is loaded ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");
  const tableBody = document.getElementById("appointmentTableBody");

  // === Handle appointment submission ===
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent form refresh

    // === Get input values ===
    const patientName = document.getElementById("patientName").value.trim();
    const doctorName = document.getElementById("doctorName").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // === Create a new row for the table ===
    const row = document.createElement("tr");

    // === Fill row with appointment data ===
    row.innerHTML = `
      <td>${patientName}</td>
      <td>${doctorName}</td>
      <td>${date}</td>
      <td>${time}</td>
    `;

    // === Append to table body ===
    tableBody.appendChild(row);

    // === Clear form after submission ===
    form.reset();
  });
});



/*********************         Billing              ****************** */


// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("billingForm");
  const tableBody = document.getElementById("billingTableBody");

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const patientName = document.getElementById("patientName").value.trim();
    const roomCharges = parseFloat(document.getElementById("roomCharges").value);
    const doctorFee = parseFloat(document.getElementById("doctorFee").value);
    const medicationCost = parseFloat(document.getElementById("medicationCost").value);

    // Calculate total
    const total = roomCharges + doctorFee + medicationCost;

    // Create table row
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${patientName}</td>
      <td>$${roomCharges.toFixed(2)}</td>
      <td>$${doctorFee.toFixed(2)}</td>
      <td>$${medicationCost.toFixed(2)}</td>
      <td><strong>$${total.toFixed(2)}</strong></td>
    `;

    // Add row to table
    tableBody.appendChild(row);

    // Reset form
    form.reset();
  });
});


/*********************   Staff  *********************************/

