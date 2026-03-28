const container = document.querySelector('.container');
const left = container.querySelector('.split.left');
const right = container.querySelector('.split.right');

left.addEventListener('mouseenter', () => {
  container.classList.add('hover_left');
});

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover_left');
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover_right');
});

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover_right');
});


// left.addEventListener('mouseover', () => {
//     right.style.opacity = '0.7';
// });

// left.addEventListener('mouseout', () => {
//     right.style.opacity = '1';
// });

// right.addEventListener('mouseover', () => {
//     left.style.opacity = '0.7';
// });

// right.addEventListener('mouseout', () => {
//     left.style.opacity = '1';
// });











const leftSplit = document.querySelector(".split.left");
const rightSplit = document.querySelector(".split.right");

const toggleOpacity = (element, opacity) => {
  element.style.opacity = opacity;
};

// Add event listeners for leftSplit
leftSplit.addEventListener('mouseover', () => {
  toggleOpacity(document.querySelector(".split.right h1"), '0.1');
  toggleOpacity(document.querySelector(".split.right a"), '0.1');
});

leftSplit.addEventListener('mouseout', () => {
  toggleOpacity(document.querySelector(".split.right h1"), '1');
  toggleOpacity(document.querySelector(".split.right a"), '1');
});

// Add event listeners for rightSplit
rightSplit.addEventListener('mouseover', () => {
  toggleOpacity(document.querySelector(".split.left h1"), '0.1');
  toggleOpacity(document.querySelector(".split.left a"), '0.1');
});

rightSplit.addEventListener('mouseout', () => {
  toggleOpacity(document.querySelector(".split.left h1"), '1');
  toggleOpacity(document.querySelector(".split.left a"), '1');
});