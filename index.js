function Header() {
    return (
        <header>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="index.html" className="nav-item-text">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="index.html#projects-anchor" className="nav-item-text">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/jonathanlin0?tab=repositories" className="nav-item-text" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                    <li className="nav-item">
                        <a href="index.html" className="nav-item-text">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function LandingScreen() {
    return (
        <div class="banner">
            <div class="landing_text">
                <h1>Jonathan Lin</h1>
                <div class="landing_list">
                    <ul>
                        <li>Incoming student at California Institute of Technology (Caltech) and planning to major in Computer Science</li>
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
                    />
                </div>
                
            </div>
        </div>
    )
}

function LandingButton(properties) {
    return (
        <div class="landing-button">
            <a href={properties.anchor_id} class="landing-button-text">{properties.text}</a>
        </div>
    )
}

function Projects() {
    return (
        <div id="projects-anchor">
            <div class="project-container">
                <h1>Projects</h1>
                <Card 
                    title="Instagram Follower Generator"
                    description="Social media is saturated nowadays, and the only way to grow on Instagram within a reasonable amount of time is by paying for a service that automates actions, such as liking, commenting, following, and engaging with other accounts."
                    description2="This program can generate Instagram followers completely for free and autonomously. There are multiple options for follower growth within the algorithm. The user can choose from multiple proven methods of growth, or a custom option which combines all of the best methods together. The backend logic required me to experiment with the Instagram bot detection systems so that the program's users would not get banned by Instagram. To evade being detected as a bot, I incorporated arbitrary pauses and randomized the bot's overall behavior to mimic human behavior. I sold around 20 copies before open-sourcing the bot's code."
                    image_src="media/Instagram-growth.jpeg"
                    languages="Python, JS, HTML, CSS"
                    technologies="Django, Repl, Selenium, BeautifulSoup, Requests"
                    github="https://github.com"
                />
                <Card 
                    title="Malware Prevention Website & API"
                    description="When scouring the internet, I came across a website that was a link-shortening service, similar to Bitly and TinyURL. But this service forced users to download malware before allowing users to proceed to the final, shortened link. To solve this problem, I built a website and an accompanying Application Programming Interface (API) where users can input the long link and immediately get the shortened link without downloading any viruses. I used Netlify to host my website and Repl to host my API. My website reached approximately 150,000 users before I took it down (I had to study for upcoming AP exams). But I published the source-code, allowing anyone to recreate the website if they wish."
                    image_src="media/virus.jpeg"
                    languages="Python"
                    technologies="Pygame, Tkinter, Postman, Requests"
                    github="https://github.com"
                />
                <Card 
                    title="Twitter Fake News Checker Bot"
                    description="I noticed high amounts of fake news spreading across social media, so I created a bot to help combat this. This Twitter bot helps to predict whether a given news article is real or fake by running it through a machine learning model. The model compares the syntax and diction of the given news articles to articles from credited sources, such as Forbes and the New York Times."
                    description2="To use the bot, the user simply has to reply to a given tweet with a link to a news article and mention the bot. Then the bot will use BeautifulSoup to scan the article and retrieve the article's text. The text is then ran through the model. Disclaimer: SATSifaction's tutorial on Youtube helped me with building the core logic of the machine learning model, but I made some adjustments and connected it to a Twitter bot through Tweepy."
                    image_src="media/twitter gear.png"
                    languages="Python"
                    technologies="Pandas, Scikit-learn, BeautifulSoup, Tweepy, Requests, Postman"
                    github="https://github.com"
                />
                <Card 
                    title="Theseus: A Legend's Rising"
                    description="This game was my team's submission for the Computer Game and Simulation Programming event for Future Business Leaders of America (FBLA) competitions 2021-2022. On top of the game, we have an external server hosted on Repl that contains the users' scores, allowing people worldwide to compete against one another. The game follows the story of Theseus defeating the Minotaur. It features multiple mazes for the player to find their way through, with different enemies and a unique boss for each level. In addition to singleplayer, we have multiplayer and endless mode. Players can fight each other in multiplayer, and endless mode has the player fight an infinite amount of levels - the levels get harder as the player progresses. Our game contains features such as knockback, realistic lighting, different weapons, unique enemies/bosses, and different game modes. We produced all code, art, sound effects, and music that appear in this game."
                    description2="Awards for this app: FBLA State Leadership Conference: 1st place. FBLA Area Leadership Conference: 1st place."
                    image_src="media/theseus icon 2x enlarged.png"
                    languages="Python, GDScript"
                    technologies="Django, Repl, Godot, Logic Pro, Aseprite, Davinci Resolve, GIMP"
                    github="https://github.com"
                />
                <Card 
                    title="Android Quiz App"
                    description="This app was my very first project, and it was my team's submission for the Mobile Application Development event for Future Business Leaders of America (FBLA) competitions 2018-2019. The app follows the competitions' given prompt: to create an Android app that helps Parliamentary Procedure competitors practice for their event."
                    description2="Awards for this app: FBLA State Leadership Conference: 3rd place. FBLA Area Leadership Conference: 1st place."
                    image_src="media/android studio.png"
                    languages="Java"
                    technologies="Android Studio, GIMP"
                    github="https://github.com"
                />
                <Card 
                    title="Piano Tiles Bot"
                    description="As a way to further my knowledge with automation and web scrapping, I revisited a childhood game: Piano Tiles. This program allows a user to automatically beat any Piano Tiles game."
                    image_src="media/piano.png"
                    languages="Python"
                    technologies="PyAutoGUI, Selenium, Win32API"
                    github="https://github.com"
                />
                <Card 
                    title="Pi Visualizer"
                    description="This pi estimation visualizer uses the Monte Carlo Method to estimate the value of pi. The program randomly generates points in a square with a circle inscribed into the square. Then pi is caluclated by multiplying 4 with the ratio between the number of points generated in the circle and the number of total points."
                    image_src="media/color pi.jpeg"
                    languages="Python"
                    technologies="Pygame"
                    github="https://github.com"
                />
            </div>
        </div>
    )
}

function Card(properties) {
    return (
        <div class="entire-card">
            <div class="project">
                <div class="card-image">
                    <img src={properties.image_src} alt="logo" class="project-pic"></img>
                </div>

                <div class="card-text">
                    <h2 class="card-text-title">{properties.title}</h2>
                    <p class="card-text-description">{properties.description}</p>
                    <p>{properties.description2}</p>
                </div>
            </div>
            <div class="card-tools-used">
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

function CardButtons(properties) {
    return (
        <div class="card-button">
            <a href={properties.github}>{properties.text}</a>
        </div>
    )
}

function ContactMe() {
    return (
        <div class="contact-me-container">
            <ul>
                <li>
                    832-726-3338
                </li>
                <li>
                    jonathanlinonline@gmail.com
                </li>
            </ul>
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

function App() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <LandingScreen />
                <Projects />
                <Footer />
            </div>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
