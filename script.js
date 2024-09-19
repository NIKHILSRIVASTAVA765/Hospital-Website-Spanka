const sliderReview = document.querySelector('.slider-review');
const reviewCards = document.querySelectorAll('.review-card');
const prevBtn = document.getElementById('prev-review-btn');
const nextBtn = document.getElementById('next-review-btn');

let currentReview = 0;
const totalReviews = reviewCards.length;


function showReview(index) {
  const offset = index * -100; 
  sliderReview.style.transform = `translateX(${offset}%)`;
}


nextBtn.addEventListener('click', () => {
  currentReview = (currentReview + 1) % totalReviews; 
  showReview(currentReview);
});


prevBtn.addEventListener('click', () => {
  currentReview = (currentReview - 1 + totalReviews) % totalReviews; 
  showReview(currentReview);
});

setInterval(() => {
  currentReview = (currentReview + 1) % totalReviews;
  showReview(currentReview);
}, 5000); 
