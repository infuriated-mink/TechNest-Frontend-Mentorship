const profiles = {
    ross: {
        image: "../assets/ross.png",
        header: "Ross Geller",
        about: "Ross Geller, played by David Schwimmer, is a paleontologist and Monica’s older brother. He is known for his on-again, off-again relationship with Rachel Green and his humorous “pivot!” moment.",
        facts: [
            "Has been married three times.",
            "Has a son named Ben and a daughter named Emma.",
            "Is a dinosaur enthusiast and works at a museum and university."
        ]
    },
    rachel: {
        image: "../assets/rachel.png",
        header: "Rachel Green",
        about: "Rachel Green, played by Jennifer Aniston, starts as a runaway bride and becomes a fashion enthusiast. Her relationship with Ross is a central storyline, and she grows into an independent professional.",
        facts: [
            "Worked at Central Perk before entering the fashion industry.",
            "Has a daughter named Emma with Ross.",
            "Has an iconic hairstyle named after her: 'The Rachel.'"
        ]
    },
    monica: {
        image: "../assets/monica.png",
        header: "Monica Geller",
        about: "Monica Geller, played by Courteney Cox, is a chef and Ross’s younger sister. She is known for her obsession with cleanliness and organization.",
        facts: [
            "Is married to Chandler Bing.",
            "Was famously overweight during her teenage years.",
            "Dreamed of being the head chef at her own restaurant."
        ]
    },
    chandler: {
        image: "../assets/chandler.png",
        header: "Chandler Bing",
        about: "Chandler Bing, played by Matthew Perry, is known for his sarcastic humor. He works in statistical analysis and data reconfiguration before switching to advertising.",
        facts: [
            "His middle name is Muriel.",
            "Had a pet duck and chicken with Joey.",
            "Overcame commitment issues to marry Monica."
        ]
    },
    joey: {
        image: "../assets/joey.png",
        header: "Joey Tribbiani",
        about: "Joey Tribbiani, played by Matt LeBlanc, is an aspiring actor best known for his role as Dr. Drake Ramoray on *Days of Our Lives*. He is Monica and Chandler's roommate and the group’s lovable foodie.",
        facts: [
            "His catchphrase is “How you doin’?”",
            "Loves pizza and sandwiches more than anything.",
            "Has a soft heart despite his goofy personality."
        ]
    },
    phoebe: {
        image: "../assets/phoebe.png",
        header: "Phoebe Buffay",
        about: "Phoebe Buffay, played by Lisa Kudrow, is the quirky, free-spirited friend with a heart of gold. She is a musician known for her eccentric songs like “Smelly Cat.”",
        facts: [
            "Has a twin sister named Ursula.",
            "Worked as a masseuse while pursuing music.",
            "Believes in a variety of spiritual concepts."
        ]
    }
};

$(document).ready(function() {
    // Extract the profile key from the URL (e.g., ?character=joey)
    const params = new URLSearchParams(window.location.search);
    const characterKey = params.get("character");
    const profile = profiles[characterKey];

    if (profile) {
        // Dynamically set the content
        $(".profile-image").attr("src", profile.image);
        $(".title").text(profile.header);
        $(".character-info p").text(profile.about);

        const funFactsList = $(".fun-facts ul");
        funFactsList.empty(); // Clear any existing list items
        profile.facts.forEach(fact => {
            funFactsList.append(`<li>${fact}</li>`);
        });
    } else {
        // Handle case where character key is invalid or missing
        $(".cast-profile").html("<p>Character not found. Please go back to the main page.</p>");
    }
});
