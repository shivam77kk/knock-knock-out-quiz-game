let sounds = {
    click: new Audio('button click.mp3'),
    correct: new Audio('wohohoo.mp3'),
    wrong: new Audio('buzzer.mp3'),
    final: new Audio('game-level-complete.mp3'),
    ghost: new Audio('are u ready.mp3'),
};

document.body.style.backgroundImage = "url('logoo.jpg')";

setTimeout(() => {
    document.body.style.backgroundImage = "url('user input.jpg')";
    document.getElementById('userInputContainer').style.display = 'block';
}, 3000);

function levelSelectionBackground() {
    document.body.style.backgroundImage = "url('quiz.jpg')";
}

function startQuizBackground() {
    document.body.style.backgroundImage = "url('quizz.jpg')";
}

let completedTopics = {
    easy: [],
    medium: [],
    hard: []
};

// Load completed topics from localStorage if they exist
if (localStorage.getItem('completedTopics')) {
    completedTopics = JSON.parse(localStorage.getItem('completedTopics'));
}


const questions = {
    Countries: {
        easy: [
            { question: "Which country is the largest in the world by area ?", options: ["USA", "Russia", "Canada", "China"], answer: 2 },
            { question: "Which country is known as the Land of the Rising Sun ?", options: ["China", "Japan", "South Korea", "Thailand"], answer: 2 },
            { question: "Which country has the largest population in the world ?", options: ["India", "China", "USA", "Brazil"], answer: 1 },
            { question: "Which country is famous for the Great Wall ?", options: ["Japan", "China", "Mongolia", "India"], answer: 2 },
            { question: "Which country is known for its pyramids ?", options: ["Iran", "Mexico", "Egypt", "Peru"], answer: 3 },
            { question: "What is the official currency of the United Kingdom ?", options: ["Euro", "Dollar", "Pound Sterling", "Yen"], answer: 3 },
            { question: "Which country is home to the Amazon Rainforest ?", options: ["Brazil", "Colombia", "Peru", "Venezuela"], answer: 1 },
            { question: "Which country is the smallest by land area ?", options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], answer: 3 },
            { question: "Which country is known for its kangaroos ?", options: ["South Africa", "New Zealand", "Australia", "Canada"], answer: 3 },
            { question: "Which country has the most official languages ?", options: ["Canada", "India", "Switzerland", "South Africa"], answer: 4 },

        ],
        medium: [
            { question: "Which country was formerly known as Persia ?", options: ["Iraq", "Iran", "Turkey", "Syria"], answer: 2 },
            { question: "Which country has the highest number of Nobel Prize winners ?", options: ["Uk", "Germany", "USA", "France"], answer: 3 },
            { question: "Which is the only country that spans all four hemispheres ?", options: ["Russia", "Indonesia", "Brazil", "Australia"], answer: 2 },
            { question: "Which country was the first to grant women the right to vote ?", options: ["USA", "UK", "New Zealand", "Canada"], answer: 3 },
            { question: "Which two countries share the longest international land border ?", options: ["USA & Canada", "Russia & China", "India & China", "Argentia & Brazil"], answer: 1 },

        ],
        hard: [
            { question: "Which country has the most time zones ?", options: ["USA", "Russia", "France", "China"], answer: 3 },
            { question: "Which country has the deepest lake in the world ?", options: ["Canada", "Russia", "USA", "China"], answer: 2 },
            { question: "Which country was the first to introduce paper money ?", options: ["China", "India", "Egypt", "Greece"], answer: 1 },
            { question: "Which country has the most UNESCO World Heritage Sites ?", options: ["India", "China", "Italy", "France"], answer: 3 },
            { question: "Which country has the highest average life expectancy ?", options: ["Switzerland", "Japan", "Australia", "Sweden"], answer: 2 },

        ]
    },

    Entertainment: {
        easy: [
            {
                question: "Which Indian film won the Oscar for Best Original Song in 2023?",
                options: ["RRR", "Kantara", "Brahmāstra", "Vikram"],
                answer: 1,

            },
            {
                question: "Which streaming platform produces the series 'Stranger Things'?",
                options: ["Amazon Prime Video", "Disney+ Hotstar", "Netflix", "Hulu"],
                answer: 3,

            },
            {
                question: "Which actress is known as 'Dhak Dhak Girl' in Bollywood?",
                options: ["Madhuri Dixit", "Sridevi", "Rekha", "Kajol"],
                answer: 1,

            },
            {
                question: "Which Harry Potter house does Harry belong to?",
                options: ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"],
                answer: 3,

            },
            {
                question: "Which reality TV show is hosted by Salman Khan?",
                options: ["KBC", "Indian Idol", "Bigg Boss", "Dance India Dance"],
                answer: 3,

            },
            {
                question: "Which actor played the role of Joker in 'The Dark Knight' (2008)?",
                options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
                answer: 2,

            },
            {
                question: "Which of these is a popular animated movie by Disney?",
                options: ["Avatar", "Frozen", "Jurassic Park", "Titanic"],
                answer: 2,

            },
            {
                question: "Who directed 'Avatar' (2009)?",
                options: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Zack Snyder"],
                answer: 1,

            },
            {
                question: "Which Bollywood actor is known as 'Bhai' among fans?",
                options: ["Hrithik Roshan", "Salman Khan", "Akshay Kumar", "Ranveer Singh"],
                answer: 2,

            },
            {
                question: "Which film franchise features the character Captain Jack Sparrow?",
                options: ["The Hunger Games", "Pirates of the Caribbean", "Harry Potter", "Lord of the Rings"],
                answer: 2,

            }
        ],
        medium: [

            {
                question: "Which Indian film was India’s first official entry to the Oscars?",
                options: ["Mother India", "Salaam Bombay", "Do Bigha Zamin", "Mughal-e-Azam"],
                answer: 1,
            },
            {
                question: "Which film features the song 'My Heart Will Go On'?",
                options: ["The Notebook", "Titanic", "La La Land", "The Greatest Showman"],
                answer: 2,
            },
            {
                question: "Which Hollywood film won the most Oscars in a single year?",
                options: ["Titanic", "Ben-Hur", "The Lord of the Rings: The Return of the King", "All of the Above (Each won 11)"],
                answer: 4,
            },
            {
                question: "Who played the main villain in 'No Country for Old Men'?",
                options: ["Javier Bardem", "Daniel Day-Lewis", "Josh Brolin", "Anthony Hopkins"],
                answer: 1,
            },
            {
                question: "Which was the first Indian film to win the Best Film Award at Cannes Film Festival?",
                options: ["Pather Panchali", "Mughal-e-Azam", "Salaam Bombay", "Masaan"],
                answer: 1,
            }
        ],
        hard: [
            {
                question: "Which movie beat 'Avatar' (2009) to become the highest-grossing film ever?",
                options: ["Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens", "The Lion King"],
                answer: 1,
            },
            {
                question: "Which filmmaker is famous for using the 'Dolly Zoom' effect in movies?",
                options: ["Christopher Nolan", "Alfred Hitchcock", "Quentin Tarantino", "Francis Ford Coppola"],
                answer: 2,
            },
            {
                question: "Which classic Hollywood film is known for the famous line 'Here's looking at you, kid'?",
                options: ["Casablanca", "Gone with the Wind", "The Godfather", "Citizen Kane"],
                answer: 1,
            },
            {
                question: "Which Indian film became the first to cross ₹1000 crore at the box office?",
                options: ["Baahubali 2", "Dangal", "RRR", "KGF: Chapter 2"],
                answer: 1,
            },
            {
                question: "Which legendary actor said, 'Acting is not about being famous, it's about exploring the human soul'?",
                options: ["Daniel Day-Lewis", "Al Pacino", "Marlon Brando", "Johnny Depp"],
                answer: 1,
            }
        ]
    },
    Gk: {
        easy: [

            {
                question: "Who was the first Prime Minister of India?",
                options: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Rajendra Prasad"],
                answer: 3,
            },
            {
                question: "Which is the national bird of India?",
                options: ["Crow", "Eagle", "Peacock", "Parrot"],
                answer: 3,
            },
            {
                question: "Which country is known as the 'Land of the Rising Sun'?",
                options: ["India", "Japan", "China", "Australia"],
                answer: 2,
            },
            {
                question: "What is the currency of the United Kingdom?",
                options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
                answer: 3,
            },
            {
                question: "Which is the largest continent in the world?",
                options: ["Europe", "Africa", "Asia", "Antarctica"],
                answer: 3,
            },
            {
                question: "Which animal is known as the 'Ship of the Desert'?",
                options: ["Elephant", "Camel", "Horse", "Kangaroo"],
                answer: 2,
            },
            {
                question: "Which sport is associated with Wimbledon?",
                options: ["Cricket", "Football", "Tennis", "Golf"],
                answer: 3,
            },
            {
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Mercury", "Mars", "Earth"],
                answer: 2,
            },
            {
                question: "Who discovered gravity?",
                options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
                answer: 4,
            },
            {
                question: "Which organ pumps blood in the human body?",
                options: ["Liver", "Kidney", "Heart", "Lungs"],
                answer: 3,
            }
        ],
        medium: [

            {
                question: "What is the full form of GDP?",
                options: ["Gross Domestic Product", "General Development Plan", "Government Distribution Process", "Global Development Policy"],
                answer: 1, // Gross Domestic Product
            },
            {
                question: "Who was the first Vice President of India?",
                options: ["Rajendra Prasad", "Sardar Patel", "Sarvepalli Radhakrishnan", "B.R. Ambedkar"],
                answer: 3, // Sarvepalli Radhakrishnan
            },
            {
                question: "Which vitamin is also known as Ascorbic Acid?",
                options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                answer: 3, // Vitamin C
            },
            {
                question: "Which Indian personality wrote the book Wings of Fire?",
                options: ["A.P.J. Abdul Kalam", "Ratan Tata", "Vikram Sarabhai", "Homi Bhabha"],
                answer: 1, // A.P.J. Abdul Kalam
            },
            {
                question: "Which is the oldest mountain range in India?",
                options: ["Himalayas", "Western Ghats", "Aravalli Range", "Satpura Range"],
                answer: 3, // Aravalli Range
            },
            {
                question: "Which Indian state has the largest forest cover?",
                options: ["Assam", "Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh"],
                answer: 2, // Madhya Pradesh
            }
        ],
        hard: [
            {
                question: "Who was the first President of the Indian National Congress?",
                options: ["Mahatma Gandhi", "W.C. Bonnerjee", "Dadabhai Naoroji", "Gopal Krishna Gokhale"],
                answer: 2, // W.C. Bonnerjee
            },
            {
                question: "Which Indian classical dance form originated in Kerala?",
                options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"],
                answer: 3, // Kathakali
            },
            {
                question: "Who wrote the famous book Arthashastra?",
                options: ["Chanakya", "Kalidas", "Bhasa", "Kautilya"],
                answer: 1,// Chanakya (Kautilya is another name for him)
            },
            {
                question: "Who was the first Indian to receive a Nobel Prize?",
                options: ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"],
                answer: 2, // Rabindranath Tagore
            },
            {
                question: "Which ancient civilization built the Machu Picchu?",
                options: ["Aztec", "Maya", "Inca", "Greek"],
                answer: 3, // Inca
            }
        ],
    },
    History: {
        easy: [

            {
                question: "Which of the following was the first civilization in history?",
                options: ["Mesopotamian Civilization", "Egyptian Civilization", "Indus Valley Civilization", "Chinese Civilization"],
                answer: 1,
            },
            {
                question: "Who was the last Viceroy of British India?",
                options: ["Lord Curzon", "Lord Mountbatten", "Lord Wavell", "Lord Canning"],
                answer: 2,
            },
            {
                question: "Who wrote the Indian National Anthem?",
                options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subramania Bharati", "Sarojini Naidu"],
                answer: 2,
            },
            {
                question: "Which movement was launched by Mahatma Gandhi in 1942?",
                options: ["Civil Disobedience Movement", "Quit India Movement", "Non-Cooperation Movement", "Salt Satyagraha"],
                answer: 2,
            },
            {
                question: "Which dynasty built the famous Ajanta and Ellora caves?",
                options: ["Cholas", "Guptas", "Rashtrakutas", "Mauryas"],
                answer: 3,
            },
            {
                question: "Who was the first Emperor of India?",
                options: ["Chandragupta Maurya", "Ashoka", "Akbar", "Samudragupta"],
                answer: 1,
            },
            {
                question: "Which Indian freedom fighter formed the Indian National Army (INA)?",
                options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh", "Lala Lajpat Rai"],
                answer: 2,
            },
            {
                question: "Who was the first woman Prime Minister of India?",
                options: ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
                answer: 2,
            },
            {
                question: "What was the original name of Buddha?",
                options: ["Raghunath", "Gautama Siddhartha", "Ashoka", "Mahavira"],
                answer: 2,
            },
            {
                question: "The Great Wall of China was built to protect against which invaders?",
                options: ["Mongols", "Persians", "Romans", "Greeks"],
                answer: 1,
            }
        ],
        medium: [

            {
                question: "What was the capital of the Vijayanagara Empire?",
                options: ["Madurai", "Hampi", "Kanchipuram", "Warangal"],
                answer: 2,
            },
            {
                question: "Who was known as the 'Napoleon of India'?",
                options: ["Ashoka", "Samudragupta", "Harsha", "Alauddin Khilji"],
                answer: 2,
            },
            {
                question: "The Magna Carta was signed in which year?",
                options: ["1215", "1315", "1415", "1515"],
                answer: 1,
            },
            {
                question: "Which war ended with the Treaty of Versailles?",
                options: ["World War I", "World War II", "Napoleonic Wars", "Cold War"],
                answer: 1,
            },
            {
                question: "Who was the last ruler of the Mughal Empire?",
                options: ["Akbar II", "Aurangzeb", "Bahadur Shah II", "Shah Alam II"],
                answer: 3,
            }
        ],
        hard: [

            {
                question: "The Opium Wars were fought between which two countries?",
                options: ["Britain and China", "France and China", "Portugal and India", "Japan and China"],
                answer: 1 // Index of the correct answer in the options array (A=0, B=1, C=2, D=3)
            },
            {
                question: "Which empire was ruled by Genghis Khan?",
                options: ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Persian Empire"],
                answer: 3
            },
            {
                question: "The Rosetta Stone helped scholars decipher which ancient language?",
                options: ["Latin", "Sanskrit", "Egyptian Hieroglyphics", "Aramaic"],
                answer: 3
            },
            {
                question: "Who was the first woman to rule China as Emperor in her own right?",
                options: ["Empress Dowager Cixi", "Wu Zetian", "Empress Meishō", "Empress Matilda"],
                answer: 2
            },
            {
                question: "The Hundred Years' War was fought between which two countries?",
                options: ["Spain and France", "England and France", "Portugal and Spain", "Austria and Germany"],
                answer: 2
            }

        ]
    },
    IT: {
        easy: [

            {
                question: "What does URL stand for?",
                options: ["Universal Resource Locator", "Uniform Resource Locator", "Unified Routing Link", "Unique Resource Link"],
                answer: 2,
            },
            {
                question: "Which file format is used for compressed files?",
                options: [".exe", ".zip", ".mp4", ".docx"],
                answer: 2,
            },
            {
                question: "Which key is used to undo an action in MS Office?",
                options: ["Ctrl + U", "Ctrl + Y", "Ctrl + Z", "Ctrl + X"],
                answer: 3,
            },
            {
                question: "What does Wi-Fi stand for?",
                options: ["Wireless Fidelity", "Wide Field", "Wireless Function", "Web Finder"],
                answer: 1,
            },
            {
                question: "What is the default file extension of MS Excel?",
                options: [".xls", ".doc", ".ppt", ".txt"],
                answer: 1,
            },
            {
                question: "What is the function of antivirus software?",
                options: ["Remove ads", "Protect against malware", "Speed up computer", "Create backups"],
                answer: 2,
            },
            {
                question: "Which is not a programming language?",
                options: ["Python", "Java", "C++", "HTML"],
                answer: 4, // HTML
            },
            {
                question: "A 1 Terabyte (TB) = ?",
                options: ["1000 MB", "1024 GB", "500 MB", "2048 MB"],
                answer: 2, // 1024 GB
            },
            {
                question: "Which company developed Windows OS?",
                options: ["Apple", "Google", "Microsoft", "IBM"],
                answer: 3, // Microsoft
            },
            {
                question: "Which device is used for video conferencing?",
                options: ["Mouse", "Printer", "Webcam", "Scanner"],
                answer: 3, // Webcam
            },
            {
                question: "What is cloud computing?",
                options: ["Storing data on physical hard drives", "Storing and accessing data over the internet", "A type of CPU", "A hardware device"],
                answer: 2, // Storing and accessing data over the internet
            }
        ],
        medium: [

            {
                question: "What is the purpose of a MAC address?",
                options: ["Identify a network switch", "Identify a unique device on a network", "Encrypt internet traffic", "Assign dynamic IP addresses"],
                answer: 2,
            },
            {
                question: "Which of the following is a cloud storage service?",
                options: ["AWS EC2", "Google Drive", "Docker", "Apache Hadoop"],
                answer: 2,
            },
            {
                question: "Which of the following is a valid IPv6 address?",
                options: ["192.168.1.1", "255.255.255.0", "2001:db8::ff00:42:8329", "10.0.0.1"],
                answer: 3,
            },
            {
                question: "Which data structure is best for implementing recursion?",
                options: ["Queue", "Stack", "Linked List", "Graph"],
                answer: 2,
            },
            {
                question: "Which cybersecurity attack involves sending fraudulent emails to trick users?",
                options: ["Phishing", "Ransomware", "DDoS", "Man-in-the-middle"],
                answer: 1,
            },

        ],
        hard: [
            {
                question: "Which algorithm is used for encryption in Bitcoin?",
                options: ["AES", "SHA-256", "RSA", "MD5"],
                answer: 2, // Index of the correct answer (0-based)
            },
            {
                question: "What is the time complexity of Binary Search?",
                options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
                answer: 3,
            },
            {
                question: "Which of the following is a cloud computing service model?",
                options: ["SaaS", "HTTP", "SSL", "XML"],
                answer: 1,
            },
            {
                question: "Which AI technique mimics the human brain?",
                options: ["Machine Learning", "Neural Networks", "Data Science", "Blockchain"],
                answer: 2,
            },
            {
                question: "Which programming language is best for system programming?",
                options: ["HTML", "JavaScript", "C", "Python"],
                answer: 3,
            }

        ]
    },
    Maths: {
        easy: [

            {
                question: "If x = 5, what is x + 3?",
                options: ["5", "6", "7", "8"],
                answer: 4
            },
            {
                question: "What is double of 25?",
                options: ["40", "50", "55", "60"],
                answer: 2,
            },
            {
                question: "The sum of angles in a triangle is?",
                options: ["90°", "120°", "180°", "270°"],
                answer: 3,
            },
            {
                question: "What is 5³ (5 raised to the power 3)?",
                options: ["25", "50", "125", "150"],
                answer: 3,
            },
            {
                question: "Which is the smallest prime number?",
                options: ["1", "2", "3", "5"],
                answer: 2,
            },
            {
                question: "What is 15 × 2?",
                options: ["25", "30", "35", "40"],
                answer: 2,
            },
            {
                question: "Which of these is a multiple of 7?",
                options: ["22", "28", "35", "40"],
                answer: 1,
            },
            {
                question: "If a rectangle’s length is 10 cm and breadth is 5 cm, what is its area?",
                options: ["50 cm²", "55 cm²", "60 cm²", "65 cm²"],
                answer: 1,
            },
            {
                question: "What is 75 – 25?",
                options: ["40", "45", "50", "55"],
                answer: 3,
            },
            {
                question: "What is 1 + 1?",
                options: ["1", "2", "3", "4"],
                answer: 2,
            },
        ],
        medium: [

            {
                question: "A dice is rolled. What is the probability of getting an even number?",
                options: ["1/6", "1/3", "1/2", "2/3"],
                answer: 3,
            },
            {
                question: "Convert 3/8 into a decimal",
                options: ["0.325", "0.375", "0.425", "0.450"],
                answer: 2,
            },
            {
                question: "The perimeter of a rectangle is 40 cm. If its length is 12 cm, what is its breadth?",
                options: ["6 cm", "8 cm", "10 cm", "12 cm"],
                answer: 2,
            },
            {
                question: "Solve: 7² - 5²",
                options: ["12", "20", "24", "24"],
                answer: 2,
            },
            {
                question: "What is the LCM of 12 and 18?",
                options: ["24", "36", "48", "60"],
                answer: 2,
            }
        ],
        hard: [
            {
                question: "What is cos 0°?",
                options: ["0", "1", "-1", "√2"],
                answer: 2,
            },
            {
                question: "Solve for x: x² – 4x + 3 = 0",
                options: ["1,3", "2,3", "3,4", "1,4"],
                answer: 1,
            },
            {
                question: "Solve: (2 + 3i) × (2 – 3i)",
                options: ["-13", "-5", "5", "13"],
                answer: 4,
            },
            {
                question: "What is the sum of first 20 even numbers?",
                options: ["220", "420", "820", "1020"],
                answer: 3,
            },
            {
                question: "The sum of angles in a pentagon is?",
                options: ["360°", "450°", "540°", "600°"],
                answer: 3,
            }

        ]
    },
    Science: {
        easy: [

            {
                question: "What is the closest planet to the Sun?",
                options: ["Venus", "Earth", "Mercury", "Mars"],
                answer: 3, // Mercury
            },
            {
                question: "Which vitamin is produced when the human body is exposed to sunlight?",
                options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
                answer: 3, // Vitamin D
            },
            {
                question: "What is the main gas found in the Earth's atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
                answer: 2, // Nitrogen
            },
            {
                question: "How many bones are there in an adult human body?",
                options: ["200", "206", "210", "220"],
                answer: 2, // 206
            },
            {
                question: "Which animal is known for changing its color to blend into its surroundings?",
                options: ["Chameleon", "Octopus", "Snake", "Frog"],
                answer: 1, // Chameleon
            },
            {
                question: "What is the boiling point of water in Celsius?",
                options: ["50°C", "75°C", "100°C", "150°C"],
                answer: 3, // 100°C
            },
            {
                question: "Which organ is responsible for filtering waste from the blood?",
                options: ["Lungs", "Kidney", "Liver", "Stomach"],
                answer: 2, // Kidney
            },
            {
                question: "Which metal is liquid at room temperature?",
                options: ["Gold", "Mercury", "Silver", "Copper"],
                answer: 2, // Mercury
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Mars", "Venus", "Jupiter", "Saturn"],
                answer: 1, // Mars
            },
            {
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "KCl", "HCl", "CaCl₂"],
                answer: 1, // NaCl
            }
        ],
        medium: [

            {
                question: "What is the chemical name of baking soda?",
                options: ["Sodium chloride", "Sodium bicarbonate", "Calcium carbonate", "Potassium sulfate"],
                answer: 2, // Sodium bicarbonate
            },
            {
                question: "Which part of the human brain is responsible for balance and coordination?",
                options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
                answer: 2, // Cerebellum
            },
            {
                question: "Which instrument is used to measure atmospheric pressure?",
                options: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"],
                answer: 2, // Barometer
            },
            {
                question: "Which planet in the solar system has the most moons?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                answer: 1, // Jupiter
            },
            {
                question: "What is the main component of Earth's core?",
                options: ["Aluminum", "Iron", "Nickel", "Magnesium"],
                answer: 2, // Iron
            }
        ],
        hard: [
            {
                question: "What is the name of the deepest part of the ocean?",
                options: ["Mariana Trench", "Challenger Deep", "Java Trench", "Tonga Trench"],
                answer: 1, // Mariana Trench
            },
            {
                question: "Which layer of the Earth is semi-molten and responsible for plate tectonics?",
                options: ["Crust", "Mantle", "Outer core", "Inner core"],
                answer: 2, // Mantle
            },
            {
                question: "Which radioactive element is used in smoke detectors?",
                options: ["Uranium", "Plutonium", "Americium", "Radium"],
                answer: 3, // Americium
            },
            {
                question: "Which is the only organ in the human body that can regenerate itself?",
                options: ["Heart", "Liver", "Brain", "Kidney"],
                answer: 2, // Liver
            },
            {
                question: "What is the charge of an electron?",
                options: ["Positive", "Negative", "Neutral", "Variable"],
                answer: 2, // Negative
            }
        ]
    },
};

let currentLevel = null;
let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;
let wrongAttempts = 0; // Track wrong attempts for each question
let maxWrongAttempts = 2; // Maximum wrong attempts allowed

function showStartQuiz() {
    let username = document.getElementById('username').value.trim();
    if (username === "") {
        alert("Please enter your name.");
        return; // Stop execution if the username is empty
    }
    sounds.click.play();
    document.getElementById('userInputContainer').style.display = 'none';
    document.getElementById('startQuizContainer').style.display = 'block';
}


function showLevelSelection() {
    sounds.click.play();
    document.getElementById('startQuizContainer').style.display = 'none';
    document.getElementById('levelSelection').style.display = 'block';
    levelSelectionBackground();

    // Unlock Medium level if all Easy topics are completed
    if (completedTopics.easy.length === Object.keys(questions).length) {
        document.getElementById('mediumBtn').classList.remove('locked');
        document.getElementById('mediumBtn').style.pointerEvents = 'auto';
    }

    // Unlock Hard level if all Medium topics are completed
    if (completedTopics.medium.length === Object.keys(questions).length) {
        document.getElementById('hardBtn').classList.remove('locked');
        document.getElementById('hardBtn').style.pointerEvents = 'auto';
    }

}

function showTopicSelection(level) {
    sounds.click.play();
    currentLevel = level;

    // Unlock Hard button if Easy and Medium are completed
    if (level === 'easy' || level === 'medium') {
        localStorage.setItem(level, 'completed');
    }

    document.getElementById('levelSelection').style.display = 'none';
    document.getElementById('topicSelection').style.display = 'block';
}


function startQuiz(topic) {
    sounds.click.play();
    currentTopic = topic;

    // Hide the topic selection container
    document.getElementById('topicSelection').style.display = 'none';

    // Show the ghost animation with a black background
    document.getElementById('ghostAnimation').style.display = 'block';
    sounds.ghost.play();

    // Use animationend event to trigger quiz start AFTER animation
    const ghostImage = document.getElementById('ghostImage');
    ghostImage.addEventListener('animationend', startQuizAfterGhost);
}

function startQuizAfterGhost() {
    const ghostImage = document.getElementById('ghostImage');
    ghostImage.removeEventListener('animationend', startQuizAfterGhost); // Important: Remove the listener!

    // Hide the ghost animation
    document.getElementById('ghostAnimation').style.display = 'none';

    // Show the quiz container and start the quiz
    document.getElementById('quizContainer').style.display = 'block';
    startQuizBackground();
    showQuestion();
}

function showQuestion() {
    resetAnswerButtons();
    let questionData = questions[currentTopic][currentLevel][currentQuestionIndex];
    document.getElementById('questionText').innerText = questionData.question;
    let optionsHTML = "";
    questionData.options.forEach((opt, index) => {
        optionsHTML += `<button class='btn btn-option' onclick='checkAnswer(${index})' 
        style="width: 80%; font-size: 26px; padding: 12px; margin: 5px;">${opt}</button>`;
    });
    document.getElementById('options').innerHTML = optionsHTML;

    wrongAttempts = 0; // Reset wrong attempts for the new question
}

function resetAnswerButtons() {
    let buttons = document.querySelectorAll('.btn-option');
    buttons.forEach(button => {
        button.classList.remove('btn-correct');
        button.classList.remove('btn-wrong');
    });
}

function checkAnswer(selectedIndex) {
    let questionData = questions[currentTopic][currentLevel][currentQuestionIndex];
    let buttons = document.querySelectorAll('.btn-option');
    let correctIndex = questionData.answer - 1;

    if (selectedIndex === correctIndex) {
        sounds.correct.play();
        buttons[selectedIndex].classList.add('btn-correct');
        score++;
        document.getElementById('scoreDisplay').innerText = `Score: ${score}`;
        showCorrectAnswerContainer(questionData.options[correctIndex]);
    } else {
        sounds.wrong.play();
        buttons[selectedIndex].classList.add('btn-wrong');
        wrongAttempts++;

        if (wrongAttempts >= maxWrongAttempts) {
            showLoserContainer(); // Call showLoserContainer directly
        } else {
            showRetryContainer();
        }
    }
}

function showRetryContainer() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('retryContainer').style.display = 'block';
    setTimeout(() => {
        document.getElementById('retryContainer').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';
        resetAnswerButtons(); // Reset button styles
    }, 2000); // Adjust the timeout duration as needed
}

function showCorrectAnswerContainer(correctOption) {
    // Display the correct answer text
    document.getElementById('correctAnswerText').innerText = `The correct answer is: ${correctOption}`;

    // Show the correct answer container
    document.getElementById('correctAnswerContainer').style.display = 'block';

    // Hide the quiz container
    document.getElementById('quizContainer').style.display = 'none';

    // Automatically hide the correct answer container after 1 second and show the next question
    setTimeout(() => {
        hideCorrectAnswerContainer();
    }, 1000); // 1 second delay
}

function hideCorrectAnswerContainer() {
    // Hide the correct answer container
    document.getElementById('correctAnswerContainer').style.display = 'none';

    // Show the quiz container
    document.getElementById('quizContainer').style.display = 'block';

    // Move to the next question and reset the timer
    nextQuestion();
}
function retryQuestion() {
    sounds.click.play();
    document.getElementById('retryContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    resetAnswerButtons();
    resetTimer(); // Reset the timer
    showQuestion(); // Show the question again with a new timer
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTopic][currentLevel].length) {
        showQuestion(); // Show the next question
    } else {
        // Mark the topic as completed
        if (!completedTopics[currentLevel].includes(currentTopic)) {
            completedTopics[currentLevel].push(currentTopic);
            localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
        }

        sounds.final.play();
        showCompletionContainer();
    }
}

function showCompletionContainer() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('completionContainer').style.display = 'block';
    document.getElementById('finalScore').innerText = `Your final score is: ${score}`;
}

function goBackToLevels() {
    sounds.click.play();
    document.getElementById('completionContainer').style.display = 'none';
    showLevelSelection();
}

function backToUserInput() {
    sounds.click.play();
    document.getElementById('loserContainer').style.display = 'none';
    document.getElementById('timeoutContainer').style.display = 'none';
    document.getElementById('userInputContainer').style.display = 'block';
    currentLevel = null;
    currentTopic = null;
    currentQuestionIndex = 0;
    score = 0;

    // Reset completed topics tracking
    completedTopics = {
        easy: [],
        medium: [],
        hard: []
    };
    localStorage.removeItem('completedTopics');
}

function areAllTopicsCompleted(level) {
    return completedTopics[level].length === Object.keys(questions).length;
}

function goToStartQuiz() {
    sounds.click.play();
    document.getElementById('loserContainer').style.display = 'none';
    document.getElementById('startQuizContainer').style.display = 'block';
    currentLevel = null;
    currentTopic = null;
    currentQuestionIndex = 0;
    score = 0;
    cleanupTimer();

    // Reset completed topics tracking (if needed) -  You might want to keep the completed topics
    // to maintain progress across games. If so, remove or comment out the following lines:
    completedTopics = {
        easy: [],
        medium: [],
        hard: []
    };
    localStorage.removeItem('completedTopics');
}


function resetAnswerButtons() {
    let buttons = document.querySelectorAll('.btn-option');
    buttons.forEach(button => {
        button.classList.remove('btn-correct');
        button.classList.remove('btn-wrong');
    });
}

function showLoserContainer() {
    document.getElementById('quizContainer').style.display = 'none'; // Hide quiz container
    document.getElementById('loserContainer').style.display = 'block';
    cleanupTimer();

    // Redirect to Start Quiz after 3 seconds
    setTimeout(() => {
        goToStartQuiz(); // Call the function to go back to the start quiz
    }, 3000); // 3000 milliseconds = 3 seconds
}