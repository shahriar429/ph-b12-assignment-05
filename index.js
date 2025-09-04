// heart-icon favourite-call functionality
document.querySelectorAll(".favourite-call").forEach(function(el) {
    el.addEventListener("click", function() {
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount++;
        document.getElementById("heart-count").innerText = heartCount; 
    });
});
// copy-number functionality
document.querySelectorAll(".copy-btn").forEach(function(el) {
    el.addEventListener("click", function() {
        const card = el.closest(".call-card");
        const hotlineName = card.querySelector(".hotline-name").innerText;
        const hotlineNumber = card.querySelector(".hotline-number").innerText;
        navigator.clipboard.writeText(hotlineNumber);
        alert(`${hotlineName} hotline number- ${hotlineNumber} copied to clipboard`);
        let copyCount = parseInt(document.getElementById("copy-count").innerText);
        copyCount++;
        document.getElementById("copy-count").innerText = copyCount;
    });
});