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
                        <a href="index.html#cards_anchor" className="nav-item-text">
                            <p class="hover-underline-animation-dark">Projects</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/jonathanlin0" className="nav-item-text" target="_blank" rel="noopener noreferrer">
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
            <div id="arrow-section-container">
                <section id="arrow-section">
                    <p>Projects</p>
                    <a href="#cards_anchor"><span></span></a>
                </section>
            </div>
            <div class="banner-container">
                <div class="banner-text">
                    <h1>Jonathan Lin</h1>
                    <h2 id="quote"><em>nothing worth having comes easy</em></h2>
                    <div class="landing_list">
                        <ul>
                            <li>Studying Computer Science at the California Institute of Technology</li>
                            <li>Passionate about solving complex problems with machine learning, applied math, and software engineering</li>
                            <li>Currently doing machine learning and computer vision related research</li>
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
                        title="Poker Bot (Texas Hold’em)"
                        image_src="media/poker_bot.jpg"
                        image_src_alt="Loading Instagram Bot Gif"
                        text_1="Created Game Theory Optimal (mathematically balanced) poker software that produces unexploitable epsilon Nash equilibrium strategy. Designed proprietary card/action abstraction algorithm. Developed new multithread reinforcement learning alg 15x faster than state-of-the-art RL poker algs."
                        text_2="Project currently not open-sourced. Paper in the works explaining the bot's inner workings and performance analysis."
                        text_3=""
                        technologies="Next.JS, TypeScript, Python, HTML, CSS, Django, Selenium, BeautifulSoup, Requests"
                        button_text="Poker Bot Paper"
                        button_link="files/poker-bot-paper.pdf"
                    />
                    <Card 
                        title="LloydGPT"
                        image_src="media/gifs/360p/LloydGPT.gif"
                        image_src_alt="Loading Instagram Bot Gif"
                        text_1="Created full-stack solution for custom Caltech chat bot [ lloydgpt.com ] with Next.JS and TypeScript front-end, Django back-end, Google Firebase and MongoDB database. Website receiving 600+ visits/day. Reduced response time by 97% (14s to 0.3s) by optimizing existing algorithm runtime from O(n) to O(logn). Lowered query price by 98% ($0.03 to $0.0001) by creating new algorithm and prompt engineering."
                        text_2=""
                        text_3=""
                        technologies="Next.JS, TypeScript, Google Firebase, MongoDB, Python, HTML, CSS, Django, Selenium, BeautifulSoup, Requests"
                        button_text="LloydGPT Website"
                        button_link="https://www.lloydgpt.com/"
                    />
                    <Card 
                        title="Instagram Follower Generation Tool"
                        image_src="media/gifs/360p/Instagram_Bot.gif"
                        image_src_alt="Loading Instagram Bot Gif"
                        text_1="Sold 20+ licensed copies (before open-sourcing) and created frontend using Tkinter and Pygame. Reverse engineered Instagram’s recommendation algorithm to create numerous propriety, targeted methods that increase account exposure by 10x and autonomously generate real Instagram followers for any user. Utilized Beautiful Soup and HTTP Requests to scrape data from Instagram and optimize the growth algorithms."
                        text_2=""
                        text_3=""
                        technologies="Python, JS, HTML, CSS, Django, Repl, Selenium, BeautifulSoup, Requests"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/Instagram-Bot"
                    />
                    <Card 
                        title="Malware Prevention Website & API"
                        image_src="media/gifs/1080p/Bypass_Website.png"
                        image_src_alt="Loading Malware Prevention Website & API Gif"
                        text_1="250,000+ visits, 44,000+ unique users. Coded frontend website and backend to protect users’ computers from malicious, link-shortening websites. Backend successfully handled 10+ requests per second by using rotating proxies, Django, and Replit. Utilized custom Rest APIs and data processing for frontend backend communication."
                        text_2=""
                        text_3=""
                        technologies="Python, Pygame, Tkinter, Postman, Requests"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/Bypasser-Website"
                    />
                    <Card 
                        title="Theseus Video Game"
                        image_src="media/gifs/360p/Theseus.gif"
                        image_src_alt="Loading Theseus Gif"
                        text_1="Full-stack video game with 34,400+ lines of code, including creating a database and an online multiplayer server. Utilized GET HTTP Requests and Django for worldwide client-database communication. Used TCP and UDP connection protocols for global and LAN client-server communication. Deployable on any VPS."
                        text_2="Awards for this game: FBLA Nationals Competition: 2nd place. FBLA State Competition: 1st place. FBLA Area Competition: 1st place."
                        text_3=""
                        technologies="Python, GDScript, Django, Requests, Repl, Godot, Logic Pro, Aseprite, Davinci Resolve, GIMP"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/Theseus"
                    />
                    <Card 
                        title="Chest X-Ray Pathology Classifier"
                        image_src="media/chest_xray.png"
                        image_src_alt="Loading Chest X-Ray Scan"
                        text_1="Created machine learning models that classify chest X-ray images into 9 different pathologies. Trained on 175,000+ images from the ChexPert dataset."
                        text_2="Placed 3rd in the class (done for Caltech's CS156b course)."
                        text_3="Achieved an average MSE of 0.816"
                        technologies="PyTorch, Scikit-learn, Matplotlib, Python, Caltech's High Performance Computing Center (HPC), Linux"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/chest-xray"
                    />
                    <Card 
                        title="Twitter Fake News Checker Bot"
                        image_src="media/gifs/360p/Twitter_Fake_News_Bot.gif"
                        image_src_alt="Loading Twitter Fake News Checker Bot Gif"
                        text_1="Machine learning algorithm to compare syntax and diction of a given news article to credible sources to determine if a given news article is real. Connected model to a Twitter bot through Tweepy."
                        text_2=""
                        text_3=""
                        technologies="Python, Pandas, Scikit-learn, BeautifulSoup, Tweepy, Requests, Postman"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/Fake-News"
                    />
                    <Card 
                        title="Physics Engine"
                        image_src="media/gifs/360p/Physics_Engine.gif"
                        image_src_alt="Loading Physics Engine Gif"
                        text_1="Coded physics sandbox solely in C from scratch that allows users to create physics-based games, simulations, or applications. Includes functionality for classical forces (gravity, drag, springs, etc.), collision detection, scene and body encapsulation, memory management, keyboard/mouse input. Has prebuilt demo examples and functional tests."
                        text_2=""
                        text_3=""
                        technologies="C, Emscripten, SDL2, Gitlab"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/Physics-Engine-C"
                    />
                    <Card 
                        title="Android Quiz App"
                        image_src="media/gifs/360p/Quiz_App.gif"
                        image_src_alt="Loading Android Quiz App Gif"
                        text_1="First computer science project. Utilized Android Studio and Java to create quiz app that helps students prepare for Parliamentary Procedure event."
                        text_2="Awards for this app: FBLA Nationals Competition qualifier and competitor. FBLA State Competition: 3rd place. FBLA Area Competition: 1st place."
                        text_3=""
                        technologies="Java, Android Studio, GIMP"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/FBLA-Mobile-Application-Development"
                    />
                    <Card 
                        title="Proxy Generator & Checker"
                        image_src="media/gifs/360p/Proxy_Generator.gif"
                        image_src_alt="Loading Proxy Generator Gif"
                        text_1="Built system to generate and check 3000+ proxies in <10 seconds. Proxy generator collects high quality proxies from online sources. Multi-threaded proxy checker has configurable rate (typically 300+ proxy checks per second on modern laptops)."
                        text_2=""
                        text_3=""
                        technologies="Python, Selenium, Requests, Beautiful Soup 4"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/Tools/tree/main/proxy_generator"
                    />
                    <Card
                        title="Instagram Message Unsender/Deleter"
                        image_src="media/gifs/360p/Instagram_DM_Unsender.gif"
                        image_src_alt="Loading Instagram Message Unsender Gif"
                        text_1="Utilized computer vision (OpenCV) and PyAutoGUI to automatically and permanently delete sent messages, images, and posts in Instagram Direct Messages. Bot performance averages around 1,000 messages deleted per hour, depending on the computer's processing speeds and bandwidth speeds."
                        text_2=""
                        text_3=""
                        technologies="Python, PyAutoGUI, Win32API , Python-ImageSearch"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/Instagram-DM-Unsender"
                    />
                    <Card 
                        title="Piano Tiles Bot"
                        image_src="media/gifs/360p/Piano_Tiles.gif"
                        image_src_alt="Loading Piano Tiles Gif"
                        text_1="Employed PyAutoGUI to recognize black tiles on the screen and Win32API to control the mouse and keyboard to automatically play Piano Tiles."
                        text_2=""
                        text_3=""
                        technologies="Python, PyAutoGUI, Selenium, Win32API"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/piano-tiles-bot"
                    />
                    <Card 
                        title="Pi Visualizer"
                        image_src="media/gifs/360p/Pi_Visualizer.gif"
                        image_src_alt="Loading Instagram Bot Gif"
                        text_1="This pi estimation visualizer uses the Monte Carlo method to estimate the value of pi. The program randomly generates points in a square with a circle inscribed into the square. Then pi is caluclated by multiplying 4 with the ratio between the number of points generated in the circle and the number of total points."
                        text_2=""
                        text_3=""
                        technologies="Python, Pygame"
                        button_text="Source Code"
                        button_link="https://github.com/jonathanlin0/Pi-Estimation-Visualizer"
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
                        text={properties.button_text}
                        github={properties.button_link}
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
                    jonathan [at] caltech [dot] edu
                </p>
                <p class="contact-container-text">
                    linkedin.com/in/j-lin0
                </p>
            </div>
        </div>
    )
}

function SiteInfo() {
    return (
        <div id="site-info">
            <h1 class="subtitle" id="site-info-subtitle">Site Info</h1>
            <div class="site-info-container">
                <p class="site-info-container-text">
                    Tools Used: HTML/CSS and React
                </p>
                <p class="site-info-container-text">
                    <a href="https://github.com/jonathanlin0/jonathanlin0.github.io" target="_blank">Website Source Code</a>
                </p>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© Jonathan Lin 2021-2024. All rights reserved.</small>
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
                <SiteInfo />
                <Footer />
            </div>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))