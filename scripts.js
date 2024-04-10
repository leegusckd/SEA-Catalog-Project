/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// Image URL's
const Angels_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/022012/anaheim_angels.png?itok=5YsOwsFj";
const Dodgers_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0023/9445/brand.gif?itok=tBHaeOtZ"
const Ducks_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/012011/anaheim_ducks.png?itok=1oS1FQHM"
const Kings_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/082011/losangeleskings_0.jpeg?itok=rgsgxcSQ"
const Clippers_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/052013/l.a._clippers.jpg?itok=-Qkq8GGT"
const Lakers_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/032015/los_angeles_lakers.png?itok=Iyu9O1ZA"
const Sparks_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/072023/la_sparks.jpg?pofL2PK5fJfh1kHtbAKdhoI5Ow3mbquY&itok=DNVvPtc8"
const ACFC_URL = "https://i.iheart.com/v3/re/new_assets/62694e1fe39258badb1cf756?ops=fit(960%2C960)%2Cresize(0%2C390)"
const LAFC_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/112022/lafc_2022-.jpg?QW8.mE0_FGuF3pQUffs1Zhzg3mPJPYNK&itok=OXE1A1mN"
const LAGalaxy_URL = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/042023/los_angeles_galaxy.png?4mLy8my8L7NHmx8DdsCKEHWV5J_HA0AG&itok=zNjBs9Z9"
const Chargers_URL = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lac.png&h=200&w=200"
const Rams_URL = "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/273297196_10160288195683484_7495260132977645307_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8J6mEczzuSQAb6YkE6v&_nc_ht=scontent-lax3-2.xx&oh=00_AfDAAvkf1Hv-72i104hM5TIik9lv6GDVElEPjcnW9m_apw&oe=661BDC24"


// Teams
let teams = [
    {
        title: "Angels",
        sport: "Baseball",
    },
    {
        title: "Dodgers",
        sport: "Baseball",
    },
    {
        title: "Ducks",
        sport: "Hockey",
    },
    {
        title: "Kings",
        sport: "Hockey",
    },
    {
        title: "Clippers",
        sport: "Basketball",
    },
    {
        title: "Lakers",
        sport: "Basketball",
    },
    {
        title: "Sparks",
        sport: "Basketball",
    },
    {
        title: "Angel City FC",
        sport: "Soccer",
    },
    {
        title: "Los Angeles FC",
        sport: "Soccer",
    },
    {
        title: "LA Galaxy",
        sport: "Soccer",
    },
    {
        title: "Chargers",
        sport: "Football",
    },  {
        title: "Rams",
        sport: "Football",
    },

];


// This function adds cards the page to display the data in the array
function displayCatalog(teams) {
    const catalog = document.getElementById('card-container');
    catalog.innerHTML = '';

    teams.forEach(function(team) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${team.title}</h3>
            <img src="${getImages(team.title)}" alt="${team.title} Poster">
        `;
        catalog.appendChild(card);
    });
}
     
//Images
function getImages(team) {
    if (team === "Angels") {
        return Angels_URL;
    } else if (team === "Dodgers") {
        return Dodgers_URL;
    } else if (team === "Ducks") {
        return Ducks_URL;
    } else if (team === "Kings") {
        return Kings_URL;
    } else if (team === "Clippers") {
        return Clippers_URL;
    } else if (team === "Lakers") {
        return Lakers_URL;
    } else if (team === "Sparks") {
        return Sparks_URL;
    } else if (team === "Angel City FC") {
        return ACFC_URL;
    } else if (team === "Los Angeles FC") {
        return LAFC_URL;
    } else if (team === "LA Galaxy") {
        return LAGalaxy_URL;
    } else if (team === "Chargers") {
        return Chargers_URL;
    } else if (team === "Rams") {
        return Rams_URL;
    } 
}

//Filter by Sport
function filterSport(sport) {
    if (sport === 'All') {
        displayCatalog(teams);
    } else {
        const filteredSports = teams.filter(sportType => sportType.sport === sport);

        displayCatalog(filteredSports)
    }
}

document.addEventListener("DOMContentLoaded", function() {                              //This line is needed to make the function runs after the HTML is loaded. Otherwise, the .js runs first, causing an error.
    //Filter by Sport Event Listener
    document.getElementById('sport').addEventListener('change', function() {
        filterSport(this.value);
    });
   
});


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function() {
    displayCatalog(teams);
});


// A function that adds a new card 
function addNewCard() {
    const title = prompt("Enter the name of the team")
    const sport = prompt("Enter the type of sport")
    if (title && sport) {
        teams.push({ title, sport });
        displayCatalog(teams);
    }
}

 // Event listener for addNewCard 
 document.getElementById('addCard').addEventListener('click', addNewCard);


// A function that removes the last card
function removeLastCard() {
    teams.pop(); // Remove last item in titles array
    displayCatalog(teams); // Call displayCatalog again to refresh
}



