var cardsData = [
    {
        title: 'Work',
        timeframes: {
            daily: {
                current: 5,
                previous: 7
            },
            weekly: {
                current: 32,
                previous: 36
            },
            monthly: {
                current: 103,
                previous: 128
            }
        }
    },
    {
        title: 'Play',
        timeframes: {
            daily: {
                current: 1,
                previous: 2
            },
            weekly: {
                current: 10,
                previous: 8
            },
            monthly: {
                current: 23,
                previous: 29
            }
        }
    },
    {
        title: 'Study',
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 7
            },
            monthly: {
                current: 13,
                previous: 19
            }
        }
    },
    {
        title: 'Exercise',
        timeframes: {
            daily: {
                current: 1,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 5
            },
            monthly: {
                current: 11,
                previous: 18
            }
        }
    },
    {
        title: 'Social',
        timeframes: {
            daily: {
                current: 1,
                previous: 3
            },
            weekly: {
                current: 5,
                previous: 10
            },
            monthly: {
                current: 21,
                previous: 23
            }
        }
    },
    {
        title: 'Self Care',
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 2,
                previous: 2
            },
            monthly: {
                current: 7,
                previous: 11
            }
        }
    },
];
// Get data cards
var dataCards = document.querySelectorAll('.js-data-card');
// Set current tab, and add on tab switching on tab click
var tabs = document.querySelectorAll('.js-tab');
var currentTab = tabs[0];
switchTab(currentTab);
tabs.forEach(function (tab) {
    tab.addEventListener('click', function () { return switchTab(tab); });
});
function switchTab(tab) {
    // Disable class from old tab
    currentTab.classList.remove('active');
    // Add class to new tab
    currentTab = tab;
    currentTab.classList.add('active');
    // Change cards data
    var dataType = currentTab.getAttribute('data-type');
    dataCards.forEach(function (card) { return swapCardData(card, dataType); });
}
function getCardsPreviousPrefix(dataType) {
    switch (dataType) {
        case 'daily':
            return 'Yesterday - ';
        case 'weekly':
            return 'Previous Week - ';
        case 'monthly':
            return 'Previous Month - ';
    }
}
// Changing cards data logic
function swapCardData(card, dataType) {
    // Get data title from card and result html elements
    var dataTitle = card.getAttribute('card-data-title');
    var currentHTML = card.querySelector('.card__content-current');
    var previousHTML = card.querySelector('.card__content-previous');
    // Set new values
    cardsData.forEach(function (data) {
        if (data.title === dataTitle) {
            var previousPrefix = getCardsPreviousPrefix(dataType);
            currentHTML.innerHTML = data.timeframes[dataType].current + 'hrs';
            previousHTML.innerHTML =
                previousPrefix + data.timeframes[dataType].previous;
            return;
        }
    });
}
