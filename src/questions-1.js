const barBackgrounds = {
  'excellent': 'yellow',
  'good': 'purple',
  'fair': 'blue',
  'poor': 'orange',
  'terrible': 'red'
};

const mainBackgrounds = {
  'excellent': 'lightyellow',
  'good': '#edc4ed',
  'fair': 'lightblue',
  'poor': '#FFE4BC',
  'terrible': 'lightpink'
};

const slidingParts = Array.from(document.getElementsByClassName('sliding-part')).reverse();
const gaps = Array.from(document.getElementsByClassName('faux-gap')).reverse();
const main = document.querySelector('main');

let activeOption;

const switchActiveOption = (e) => {
  // Change active option ( toggle circle display)
  activeOption && activeOption.classList.remove('active');
  activeOption = e.currentTarget;
  activeOption.classList.add('active');
  // Change slidingParts colors up to active option
  const activeId = activeOption.dataset.id;
  const barColor = barBackgrounds[e.target.dataset.quality];
  const mainColor = mainBackgrounds[e.target.dataset.quality]
  for (let i = 0; i < slidingParts.length; i++) {
    slidingParts[i].style.background = i <= activeId ? barColor : 'white';
  }
  for (let i = 0; i < gaps.length ; i++) {
    gaps[i].style.backgroundColor = i < activeId ? barColor : 'white';
  }
  // Correct active slider background to not overflow the marker
  activeOption.style.background = `linear-gradient(to bottom, white 0%, white 50%, ${barColor} 50%, ${barColor} 100%)`;
  // Change marker background
  const marker = activeOption.querySelector('.circle');
  marker.style.background = barColor;
  marker.style.filter = `drop-shadow(0px 4px 4px ${barColor})`;
  // Change main background
  main.style.background = mainColor;
}

console.log(slidingParts);
slidingParts.forEach((part) => {
  part.addEventListener('click', switchActiveOption);
})

