const images = [
    "../assets/ross.png",
    "../assets/rachel.png",
    "../assets/monica.png",
    "../assets/chandler.png",
    "../assets/joey.png",
    "../assets/phoebe.png"
];

const headers = [
    "Ross Geller",
    "Rachel Green",
    "Monica Geller",
    "Chandler Bing",
    "Joey Tribbiani",
    "Phoebe Buffay"
];

const characters = [
    "ross",
    "rachel",
    "monica",
    "chandler",
    "joey",
    "phoebe"
];

$(document).ready(function() {
    $(".cast-member").each(function(index) {
        // Set the image source and header dynamically
        $(this).find(".cast-image").attr("src", images[index]);
        $(this).find("h2").text(headers[index]);

        // Set the "Learn More" button link dynamically
        $(this).find(".learn-more").attr("onclick", `window.location.href='individual.html?character=${characters[index]}'`);
    });
});
