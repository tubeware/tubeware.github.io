// Scroll to order form
function scrollToForm() {
    document.getElementById("order-form").scrollIntoView({ behavior: 'smooth' });
}

// Place order with predefined software
function placeOrder(softwareName) {
    document.getElementById("software").value = softwareName;
    scrollToForm();
}

// Handle order form submission
document.getElementById("softOrderForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Order submitted! We will get back to you shortly.");
    document.getElementById("softOrderForm").reset();
});

// Handle comment form submission
document.getElementById("softCommentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const comment = document.getElementById("userComment").value;
    const commentList = document.getElementById("softCommentList");
    const newComment = document.createElement("p");
    newComment.textContent = comment;
    commentList.appendChild(newComment);
    document.getElementById("softCommentForm").reset();
});
