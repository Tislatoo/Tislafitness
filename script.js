// Modal handling for "Get Started" button
var workoutModal = document.getElementById("workoutModal");
var getStartedButton = document.querySelector(".get-started");
var closeWorkoutModal = document.getElementById("closeWorkoutModal");

getStartedButton.onclick = function() {
    workoutModal.style.display = "block";
};

closeWorkoutModal.onclick = function() {
    workoutModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == workoutModal) {
        workoutModal.style.display = "none";
    }
};

// Modal handling for "Choose Plan" buttons
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var choosePlanButtons = document.querySelectorAll(".choose-plan-btn");
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var backHome = document.getElementById("backHome");

choosePlanButtons.forEach(function(button) {
    button.onclick = function() {
        modal1.style.display = "block";
    };
});

close1.onclick = function() {
    modal1.style.display = "none";
};
close2.onclick = function() {
    modal2.style.display = "none";
};
close3.onclick = function() {
    modal3.style.display = "none";
};

next1.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "block";
};

next2.onclick = function() {
    modal2.style.display = "none";
    modal3.style.display = "block";
};

backHome.onclick = function() {
    modal3.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal3.style.display = "none";
    }
};

// Modal handling for "Give Review" button
var reviewModal = document.getElementById("reviewModal");
var giveReviewButton = document.getElementById("giveReviewButton");
var closeReviewModal = document.querySelector(".close-button");
var submitFeedbackButton = document.getElementById("submitFeedback");
var emojis = document.querySelectorAll('.emoji-container span');
var selectedEmojiInput = document.getElementById('selectedEmoji');

giveReviewButton.onclick = function() {
    reviewModal.style.display = "block";
};

closeReviewModal.onclick = function() {
    reviewModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == reviewModal) {
        reviewModal.style.display = "none";
    }
};

emojis.forEach(function(emoji) {
    emoji.onclick = function() {
        emojis.forEach(function(e) {
            e.classList.remove('selected');
        });
        emoji.classList.add('selected');
        selectedEmojiInput.value = emoji.getAttribute('data-emoji');
    }
});

submitFeedbackButton.onclick = function() {
    var comment = document.getElementById('comment').value;
    var selectedEmoji = selectedEmojiInput.value;

    if (!selectedEmoji) {
        alert('Please select an emoji.');
        return;
    }

    if (!comment) {
        alert('Please add a comment.');
        return;
    }

    // Here you can add your code to handle the feedback submission
    console.log('Feedback submitted:', { emoji: selectedEmoji, comment: comment });

    // Close the modal after submission
    reviewModal.style.display = "none";
};

// Modal handling for "Explore More" button (assuming it has the class 'explore-more')
var exploreMoreButtons = document.querySelectorAll(".explore-more");

exploreMoreButtons.forEach(function(button) {
    button.onclick = function() {
        workoutModal.style.display = "block";
    };
});
// Modal handling for "Explore More" button (assuming it has the class 'explore-more')
var exploreMoreButtons = document.querySelectorAll(".explore-more");

exploreMoreButtons.forEach(function(button) {
    button.onclick = function() {
        workoutModal.style.display = "block";
    };
});
