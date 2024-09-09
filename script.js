document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Form submitted! In a real application, this would send data to the server.');
        });
    });
});

// Function to submit a bid
function submitBid(event) {
    event.preventDefault();

    // Get the values from the form
    const bidAmount = document.getElementById('bidAmount').value;
    const bidderName = document.getElementById('bidderName').value;
    const message = document.getElementById('message').value;
    const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

    // Create a new table row with "Select" and "Close" buttons
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${bidAmount}</td>
        <td>${message}</td>
        <td>${bidderName}</td>
        <td>${date}</td>
        <td><button class="btn-select" onclick="selectRow(this)">Select</button></td>
        <td><button class="btn-close" style="display:none;" onclick="closeRow(this)">Close</button></td>
    `;

    // Add the new row to the table
    document.getElementById('bidsTableBody').appendChild(newRow);

    // Clear the form fields
    document.getElementById('bidForm').reset();
    // Close the modal
    closeBidModal();
}

// Function to handle row selection
function selectRow(button) {
    const row = button.parentElement.parentElement;
    row.classList.add('selected'); // Optional: add a class for selected rows
    button.style.display = 'none'; // Hide the select button
    row.querySelector('.btn-close').style.display = 'inline'; // Show the close button

    // Clone the selected row and add it to the selected rows table
    const selectedRow = row.cloneNode(true);
    selectedRow.querySelector('.btn-select').remove(); // Remove the select button from the cloned row
    document.getElementById('selectedBidsTableBody').appendChild(selectedRow);
}

// Function to handle closing of a row
function closeRow(button) {
    const row = button.parentElement.parentElement;
    row.remove(); // Remove the row from the table
}

// Modal handling functions
function openBidModal() {
    document.getElementById('bidModal').style.display = 'block';
}

function closeBidModal() {
    document.getElementById('bidModal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const signInModal = document.getElementById('signInModal');
    const signUpModal = document.getElementById('signUpModal');
    const bidModal = document.getElementById('bidModal');

    if (event.target == signInModal) {
        closeSignInModal();
    }
    if (event.target == signUpModal) {
        closeSignUpModal();
    }
    if (event.target == bidModal) {
        closeBidModal();
    }
};

// Functions to handle Sign In and Sign Up modals
function closeSignInModal() {
    document.getElementById('signInModal').style.display = 'none';
}

function closeSignUpModal() {
    document.getElementById('signUpModal').style.display = 'none';
}

// Function to open the Sign In Modal
function openSignInModal() {
    console.log('Opening Sign In Modal');
    document.getElementById('signInModal').style.display = 'block';
}

// Function to close the Sign In Modal
function closeSignInModal() {
    console.log('Closing Sign In Modal');
    document.getElementById('signInModal').style.display = 'none';
}

// Function to open the Sign Up Modal
function openSignUpModal() {
    console.log('Opening Sign Up Modal');
    document.getElementById('signUpModal').style.display = 'block';
}

// Function to close the Sign Up Modal
function closeSignUpModal() {
    console.log('Closing Sign Up Modal');
    document.getElementById('signUpModal').style.display = 'none';
}

// Function to open the Bid Modal
function openBidModal() {
    console.log('Opening Bid Modal');
    document.getElementById('bidModal').style.display = 'block';
}

// Function to close the Bid Modal
function closeBidModal() {
    console.log('Closing Bid Modal');
    document.getElementById('bidModal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const signInModal = document.getElementById('signInModal');
    const signUpModal = document.getElementById('signUpModal');
    const bidModal = document.getElementById('bidModal');
    
    if (event.target == signInModal) {
        closeSignInModal();
    }
    if (event.target == signUpModal) {
        closeSignUpModal();
    }
    if (event.target == bidModal) {
        closeBidModal();
    }
}

