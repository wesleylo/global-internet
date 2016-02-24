// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<h3>Thanks for viewing! Test what you learned with our quiz!",
        "results": "<br>Sources:<br><a href='http://www.statista.com/statistics/269329/penetration-rate-of-the-internet-by-region/'>http://www.statista.com/statistics/269329/penetration-rate-of-the-internet-by-region/</a><br><a href='http://www.mckinsey.com/industries/high-tech/our-insights/the-great-transformer'>http://www.mckinsey.com/industries/high-tech/our-insights/the-great-transformer</a><br><a href='http://www.wired.com/insights/2014/11/internet-access-drones/'>http://www.wired.com/insights/2014/11/internet-access-drones/</a><br><br><br>",
        "level1":  "Perfect!!",
        "level2":  "Great!",
        "level3":  "Not bad.",
        "level4":  "Try again.",
        "level5":  "Try again." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "How much of the world's population does not have regular Internet access?",
            "a": [
                {"option": "22%",	"correct": false},
                {"option": "57%",	"correct": true},
                {"option": "63%",	"correct": false},
                {"option": "45%",	"correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Every other person in the world does not have internet access.</p>",
            "incorrect": "<p><span>Uhh no.</span> Try again.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The Internet contributes, on average, what percent of G20 countries's (USA, UK, China, etc.) GDPs?",
            "a": [
                {"option": "1.7%",	"correct": false},
                {"option": "3.3%",	"correct": false},
                {"option": "4.5%",	"correct": false},
                {"option": "5.3%",	"correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You got it.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How much more money would be generated yearly if current low Internet countries had extensive Internet access?",
            "a": [
                {"option": "$4,148,000,000,000",	"correct": false},
                {"option": "$41,480,000,000",	"correct": false},
                {"option": "$3,400,000,000",	"correct": false},
                {"option": "$340,000,000,000",	"correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> Were you thinking of G20 countries?.</p>" // no comma here
        },
        { // Question 4
            "q": "What companies are investing resources in helping to provide global Internet access?",
            "a": [
                {"option": "Facebook, Google",	"correct": true},
                {"option": "GoDaddy, Time Warner Cable",	"correct": false},
                {"option": "Ben & Jerry's, PETA",	"correct": false},
                {"option": "Tesla, Nike",	"correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You were close, though.</p>" // no comma here
        },
        { // Question 5
            "q": "Should you support global Internet access?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};