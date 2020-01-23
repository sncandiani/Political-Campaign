const elizabethSanger = {
        congressionalDistrict: "5th Congressional District of Tennessee",
        platformStatements: {
            taxes: "I support taxes", 
            jobs: "I support jobs", 
            infrastructure: "I support an infrastructure", 
            healthCare: "I support health care", 
            crimeEnforcement: "I support crime enforcement"
        },
        donationForm: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftodayifoundout.com%2Fwp-content%2Fuploads%2F2016%2F06%2Frubber-duck.png&f=1&nofb=1",
        calendar: {
            january: "birthday party in venice", 
            february: "dahli visits elizabeth from the grave", 
            april: "april fools day prank on the president", 
            december:"reform everything"
        },
        volunteerInfo: {
            name: "Elizabeth Sanger", 
            address: "111 Volunteer St", 
            email: "elizabeth.sangs@gmail.com", 
            phoneNumber: "777666313",
            availability:"Never, but also always", 
            activities: "Everything?"
        },
        biography: "This is my biography, these are things about me. I am Elizabeth Sanger. Yes.", 
        imageGallery: [
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftodayifoundout.com%2Fwp-content%2Fuploads%2F2016%2F06%2Frubber-duck.png&f=1&nofb=1"
        ], 
        missionStatement: "This is my mission statement! I care about stuff. A lot.", 
        urlToRegister: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftodayifoundout.com%2Fwp-content%2Fuploads%2F2016%2F06%2Frubber-duck.png&f=1&nofb=1"
}

function addToImageGallery (newImage) {
     elizabethSanger.imageGallery.push(newImage)  
}
addToImageGallery("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftodayifoundout.com%2Fwp-content%2Fuploads%2F2016%2F06%2Frubber-duck.png&f=1&nofb=1")

function changeBiography (newBiography) {
    elizabethSanger.biography = newBiography 
}
changeBiography("Hello? I'd like to change the biography now")

function changePlatform (topic, newPlatformStatement) {
    console.log(elizabethSanger.platformStatements.topic = newPlatformStatement)
}
changePlatform("people", "I do not support people no no")

console.log(elizabethSanger.platformStatements)