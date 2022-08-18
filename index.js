function Header() {
    return (
        <header>
            <nav className="nav">
                <a href="index.html" class="name-icon">
                    <h1>Jonathan Lin</h1>
                </a>
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="index.html" className="nav-item-text">
                            <p class="hover-underline-animation-dark">Home</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index.html#row-projects-anchor" className="nav-item-text">
                            <p class="hover-underline-animation-dark">Projects</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/jonathanlin0?tab=repositories" className="nav-item-text" target="_blank" rel="noopener noreferrer">
                            <p class="hover-underline-animation-dark">Github</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index.html#contact-anchor" className="nav-item-text">
                            <p class="hover-underline-animation-dark">Contact</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function LandingScreen() {
    return (
        <div class="banner">
            <div class="banner-container">
                <div class="banner-text">
                    <h1>Jonathan Lin</h1>
                    <div class="landing_list">
                        <ul>
                            <li>Incoming student at the California Institute of Technology and planning to major in Computer Science</li>
                            <li>Interested in AI and big data analysis</li>
                            <li>Plays for Caltech's Division 3 tennis team</li>
                        </ul>
                    </div>
                    
                    <div class="landing-buttons">
                        <LandingButton 
                            text="My Projects"
                            anchor_id="#projects-anchor"
                        />
                        <LandingButton
                            text="Contact"
                            anchor_id="#contact-anchor"
                        />
                    </div>
                </div>
            </div>
            <div id="arrow-section-container">
                <section id="arrow-section">
                    <p>Projects</p>
                    <a href="#cards_anchor"><span></span></a>
                </section>
            </div>
            
        </div>
    )
}

function LandingButton(properties) {
    return (
        <div class="landing-button">
            <a href={properties.anchor_id} class="landing-button-text">
                <p class="hover-underline-animation-dark">{properties.text}</p>
            </a>
        </div>
    )
}


function RowProjects() {
    return (

        <div id="row-projects-anchor">
            <div id="row-projects-anchor-2">
            <div class="row-project-container">
                <h1 class="subtitle">Projects</h1>
                <RowCard 
                    title="Instagram Follower Generator"
                    description="Social media is saturated nowadays, and the only way to grow on Instagram within a reasonable amount of time is by paying for a service that automates actions, such as liking, commenting, following, and engaging with other accounts."
                    description2="This program can generate Instagram followers completely for free and autonomously. There are multiple options for follower growth within the algorithm. The user can choose from multiple proven methods of growth, or a custom option which combines all of the best methods together. The backend logic required me to experiment with the Instagram bot detection systems so that the program's users would not get banned by Instagram. To evade being detected as a bot, I incorporated arbitrary pauses and randomized the bot's overall behavior to mimic human behavior. I sold around 20 copies before open-sourcing the bot's code."
                    image_src="media/Instagram-growth.jpeg"
                    languages="Python, JS, HTML, CSS"
                    technologies="Django, Repl, Selenium, BeautifulSoup, Requests"
                    github="https://github.com/jonathanlin0/Instagram-Bot"
                />
                <RowCard 
                    title="Malware Prevention Website & API"
                    description="When scouring the internet, I came across a website that was a link-shortening service, similar to Bitly and TinyURL. But this service forced users to download malware before allowing users to proceed to the final, shortened link. To solve this problem, I built a website and an accompanying Application Programming Interface (API) where users can input the long link and immediately get the shortened link without downloading any viruses. I used Netlify to host my website and Repl to host my API. My website reached approximately 150,000 users before I took it down (I had to study for upcoming AP exams). But I published the source-code, allowing anyone to recreate the website if they wish."
                    image_src="media/virus.jpeg"
                    languages="Python"
                    technologies="Pygame, Tkinter, Postman, Requests"
                    github="https://github.com/jonathanlin0/Bypass-Website-API"
                />
                <RowCard 
                    title="Twitter Fake News Checker Bot"
                    description="I noticed high amounts of fake news spreading across social media, so I created a bot to help combat this. This Twitter bot helps to predict whether a given news article is real or fake by running it through a machine learning model. The model compares the syntax and diction of the given news articles to articles from credited sources, such as Forbes and the New York Times."
                    description2="To use the bot, the user simply has to reply to a given tweet with a link to a news article and mention the bot. Then the bot will use BeautifulSoup to scan the article and retrieve the article's text. The text is then ran through the model. Disclaimer: SATSifaction's tutorial on Youtube helped me with building the core logic of the machine learning model, but I made some adjustments and connected it to a Twitter bot through Tweepy."
                    image_src="media/twitter gear.png"
                    languages="Python"
                    technologies="Pandas, Scikit-learn, BeautifulSoup, Tweepy, Requests, Postman"
                    github="https://github.com/jonathanlin0/Fake-News"
                />
                <RowCard 
                    title="Theseus: A Legend's Rising"
                    description="This game was my team's submission for the Computer Game and Simulation Programming event for Future Business Leaders of America (FBLA) competitions 2021-2022. On top of the game, we have an external server hosted on Repl that contains the users' scores, allowing people worldwide to compete against one another. The game follows the story of Theseus defeating the Minotaur. It features multiple mazes for the player to find their way through, with different enemies and a unique boss for each level. In addition to singleplayer, we have multiplayer and endless mode. Players can fight each other in multiplayer, and endless mode has the player fight an infinite amount of levels - the levels get harder as the player progresses. Our game contains features such as knockback, realistic lighting, different weapons, unique enemies/bosses, and different game modes. We produced all code, art, sound effects, and music that appear in this game."
                    description2="Awards for this game: FBLA State Leadership Conference: 1st place. FBLA Area Leadership Conference: 1st place."
                    image_src="media/theseus icon 2x enlarged.png"
                    languages="Python, GDScript"
                    technologies="Django, Repl, Godot, Logic Pro, Aseprite, Davinci Resolve, GIMP"
                    github="https://github.com/jonathanlin0/Theseus"
                />
                <RowCard 
                    title="Android Quiz App"
                    description="This app was my very first project, and it was my team's submission for the Mobile Application Development event for Future Business Leaders of America (FBLA) competitions 2018-2019. The app follows the competitions' given prompt: to create an Android app that helps Parliamentary Procedure competitors practice for their event."
                    description2="Awards for this app: FBLA State Leadership Conference: 3rd place. FBLA Area Leadership Conference: 1st place."
                    image_src="media/android studio.png"
                    languages="Java"
                    technologies="Android Studio, GIMP"
                    github="https://github.com/jonathanlin0/FBLA-Mobile-Application-Development"
                />
                <RowCard 
                    title="Piano Tiles Bot"
                    description="As a way to further my knowledge with automation and web scrapping, I revisited a childhood game: Piano Tiles. This program allows a user to automatically beat any Piano Tiles game."
                    image_src="media/piano.png"
                    languages="Python"
                    technologies="PyAutoGUI, Selenium, Win32API"
                    github="https://github.com/jonathanlin0/piano-tiles-bot"
                />
                <RowCard 
                    title="Pi Visualizer"
                    description="This pi estimation visualizer uses the Monte Carlo Method to estimate the value of pi. The program randomly generates points in a square with a circle inscribed into the square. Then pi is caluclated by multiplying 4 with the ratio between the number of points generated in the circle and the number of total points."
                    image_src="media/color pi.jpeg"
                    languages="Python"
                    technologies="Pygame"
                    github="https://github.com/jonathanlin0/Pi-Estimation-Visualizer"
                />
            </div>
            </div>
        </div>
    )
}

function RowCard(properties) {
    return (
        <div class="row-entire-card">
            <div class="row-project">
                <div class="row-card-image">
                    <img src={properties.image_src} alt="logo" class="row-project-pic"></img>
                </div>

                <div class="row-card-text">
                    <h2 class="row-card-text-title">{properties.title}</h2>
                        <p class="row-card-text-description">{properties.description}</p>
                    <p>{properties.description2}</p>
                </div>
            </div>
            <div class="row-card-tools-used">
                <p>Languages used: {properties.languages}</p>
                <p>Technologies used: {properties.technologies}</p>
                <CardButtons 
                    text="Source Code"
                    github={properties.github}
                />
            </div>
        </div>
        
    )
}


function CardContainer(properties) {
    return (
        <div id="projects-anchor">
            <div id="cards_anchor">
                <h1 class="subtitle">Projects</h1>
                <div class="cards">
                    <Card 
                        title="Instagram Bot"
                        image_src="media/gifs/720p/Instagram_Bot.gif"
                        image_src_alt="Instagram Bot Gif"
                        text_1="Sold 20+ licensed copies and created frontend using Tkinter and Pygame. Utilized HTTP Requests to create numerous propriety, targeted algorithms that autonomously generate thousands of real Instagram followers for any user. Employed BeautifulSoup and Selenium to scrape data from Instagram and optimize the account growth algorithms."
                        text_2=""
                        text_3=""
                        technologies="Python, JS, HTML, CSS, Django, Repl, Selenium, BeautifulSoup, Requests"
                        source_code="https://github.com/jonathanlin0/Instagram-Bot"
                    />
                    <Card 
                        title="Malware Prevention Website & API"
                        image_src="media/gifs/720p/Instagram_Bot.gif"
                        image_src_alt="Malware Prevention Website & API Gif"
                        text_1="250,000+ visits, 44,000+ unique users. Coded frontend website and backend to protect users’ computers from malicious, link-shortening websites. Backend successfully handled 10+ requests per second by using rotating proxies, Django, and Replit. Utilized custom Rest APIs and data processing for frontend backend communication."
                        text_2=""
                        text_3=""
                        technologies="Python, Pygame, Tkinter, Postman, Requests"
                        source_code="https://github.com/jonathanlin0/Bypass-Website-API"
                    />
                    <Card 
                        title="Twitter Fake News Checker Bot"
                        image_src="media/gifs/720p/Twitter_Fake_News_Bot.gif"
                        image_src_alt="Twitter Fake News Checker Bot Gif"
                        text_1="Machine learning algorithm to compare syntax and diction of a given news article to credible sources to determine if a given news article is real. Connected model to a Twitter bot through Tweepy."
                        text_2=""
                        text_3=""
                        technologies="Python, Pandas, Scikit-learn, BeautifulSoup, Tweepy, Requests, Postman"
                        source_code="https://github.com/jonathanlin0/Fake-News"
                    />
                    <Card 
                        title="Theseus: A Legend's Rising"
                        image_src="media/gifs/720p/Twitter_Fake_News_Bot.gif"
                        image_src_alt="Instagram Bot Gif"
                        text_1="Full-stack video game with 34,400 lines of code, including creating a database and an online multiplayer server. Utilized GET HTTP Requests and Django for worldwide client-database communication. Used TCP and UDP connection protocols for global and LAN client-server communication. Deployable on any VPS."
                        text_2="Awards for this game: FBLA Nationals Competition: 2nd place. FBLA State Competition: 1st place. FBLA Area Competition: 1st place."
                        text_3=""
                        technologies="Python, GDScript, Django, Repl, Godot, Logic Pro, Aseprite, Davinci Resolve, GIMP"
                        source_code="https://github.com/jonathanlin0/Theseus"
                    />
                    <Card 
                        title="Android Quiz App"
                        image_src="media/gifs/720p/Quiz_App.gif"
                        image_src_alt="Android Quiz App Gif"
                        text_1="First computer science project. Utilized Android Studio and Java to create quiz app that helps students prepare for Parliamentary Procedure event."
                        text_2="Awards for this app: FBLA Nationals Comeptition qualifier and competitor. FBLA State Comeptition: 3rd place. FBLA Area Comeptition: 1st place."
                        text_3=""
                        technologies="Java, Android Studio, GIMP"
                        source_code="https://github.com/jonathanlin0/FBLA-Mobile-Application-Development"
                    />
                    <Card
                        title="Instagram Message Unsender/Deleter"
                        image_src="media/gifs/720p/Instagram_DM_Unsender.gif"
                        image_src_alt="Instagram Message Unsender Gif"
                        text_1="Utilized computer vision (OpenCV) and PyAutoGUI to automatically and permanently delete sent messages, images, and posts in Instagram Direct Messages. Bot performance averages around 1,000 messages deleted per hour, depending on the computer's processing speeds and bandwidth speeds."
                        text_2=""
                        text_3=""
                        technologies="Python, PyAutoGUI, Win32API , Python-ImageSearch"
                        source_code="https://github.com/jonathanlin0/Instagram-DM-Unsender"
                    />
                    <Card 
                        title="Piano Tiles Bot"
                        image_src="media/gifs/720p/Piano_Tiles.gif"
                        image_src_alt="Piano Tiles Gif"
                        text_1="Employed PyAutoGUI to recognize black tiles on the screen and Win32API to control the mouse and keyboard to automatically play Piano Tiles."
                        text_2=""
                        text_3=""
                        technologies="Python, PyAutoGUI, Selenium, Win32API"
                        source_code="https://github.com/jonathanlin0/piano-tiles-bot"
                    />
                    <Card 
                        title="Pi Visualizer"
                        image_src="media/gifs/720p/Pi_Visualizer.gif"
                        image_src_alt="Instagram Bot Gif"
                        text_1="This pi estimation visualizer uses the Monte Carlo Method to estimate the value of pi. The program randomly generates points in a square with a circle inscribed into the square. Then pi is caluclated by multiplying 4 with the ratio between the number of points generated in the circle and the number of total points."
                        text_2=""
                        text_3=""
                        technologies="Python, Pygame"
                        source_code="https://github.com/jonathanlin0/Pi-Estimation-Visualizer"
                    />
                </div>
            </div>
        </div>
    )
}

function Card(properties) {
    return (

            <div class="card">
                <img src={properties.image_src} alt={properties.image_src_alt} class="card_gif"></img>
                <div class="card_content">
                    <h2 class="row-card-text-title">{properties.title}</h2>
                    <p>{properties.text_1}</p>
                    <p>{properties.text_2}</p>
                    <p>{properties.text_3}</p>
                    <p>Technologies used: {properties.technologies}</p>
                </div>
                <div class="card_footer">
                    <CardButtons 
                        text="Source Code"
                        github={properties.source_code}
                    />              
                </div>
            </div>

    )
}


function CardButtons(properties) {
    return (
        <div class="card-button">
            <a href={properties.github} target="_blank">
                <p class="hover-underline-animation-light">{properties.text}</p>
            </a>
        </div>
    )
}

function Contact() {
    return (
        <div id="contact-anchor">
            <div class="contact-container">
                <h1 class="subtitle" id="contact-subtitle">Contact</h1>
                <p class="contact-container-text">
                    832-726-3338
                </p>
                <p class="contact-container-text">
                    jonathanlinonline@gmail.com
                </p>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© Jonathan Lin 2022. All rights reserved.</small>
        </footer>
    )
}

function Paragraph(properties) {
    return (
        <p>{properties.text}</p>
    )
}

function App() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <LandingScreen />
                <CardContainer />
                <Contact />
                <Footer />
            </div>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))