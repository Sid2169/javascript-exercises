const getTheTitles = function(books) {
    const titles = []; // Create an empty array to store the titles
    for (let i = 0; i < books.length; i++) {
        titles.push(books[i].title); // Add the title of each book to the titles array
    }
    return titles; // Return the array of titles
};

// Do not edit below this line
module.exports = getTheTitles;
