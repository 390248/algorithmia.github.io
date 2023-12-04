const search = () => {
    //convert to uppercase for case-insensitive comparison
    const searchbox = $("#search-item").val().toUpperCase();
    // Select all elements with class 'accordion-item'
    const jobs = $(".accordion-item");
    // Select all 'h3' elements within 'accordion-item'
    const jname = $(".accordion-item h3");

    // Loop through each 'h3' element for searching
    jname.each(function(index) {
        // Check if the text value contains the search text
        if ($(this).text().toUpperCase().indexOf(searchbox) > -1) {
            // Display the 'accordion-item' if the text matches
            jobs.eq(index).css('display', '');
        } else {
            // Hide the 'accordion-item' if the text doesn't match
            jobs.eq(index).css('display', 'none');
        }
    });
}
