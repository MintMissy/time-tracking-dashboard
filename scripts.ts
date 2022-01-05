const cardsData = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

// Get data cards
let dataCards = document.querySelectorAll('.js-data-card');

// Set current tab, and add on tab switching on tab click
const tabs = document.querySelectorAll('.js-tab');
let currentTab = tabs[0];
switchTab(currentTab);

tabs.forEach((tab) => {
  tab.addEventListener('click', () => switchTab(tab));
});

function switchTab(tab: Element) {
  // Disable class from old tab
  currentTab.classList.remove('active');

  // Add class to new tab
  currentTab = tab;
  currentTab.classList.add('active');

  // Change cards data
  const dataType = currentTab.getAttribute('data-type');
  dataCards.forEach((card) => swapCardData(card, dataType));
}

// Changing cards data logic
function swapCardData(card: Element, dataType: string) {
  // Get data title from card and result html elements
  const dataTitle = card.getAttribute('card-data-title');
  const currentHTML = card.querySelector('.card__content-current');
  const previousHTML = card.querySelector('.card__content-previous');

  // Set new values
  cardsData.forEach((data) => {
    if (data.title === dataTitle) {
      currentHTML.innerHTML = data.timeframes[dataType].current;
      previousHTML.innerHTML = data.timeframes[dataType].previous;
      return;
    }
  });
}
