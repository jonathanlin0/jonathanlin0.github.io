function Header() {
    return (
        <header>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="index.html" className="nav-item-text">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="index.html" className="nav-item-text">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="index.html" className="nav-item-text">Github</a>
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
                <h1>Welcome to my Portfolio</h1>
                <div class="landing_list">
                    <ul>
                        <li>My name is Jonathan Lin</li>
                        <li>I'm an incoming student at California Institute of Technology (Caltech) and planning to major in Computer Science</li>
                        <li>Within CS, I'm interested in AI and big data analysis</li>
                        <li>Plays for Caltech's D3 tennis team</li>
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
                    description="This program can generate Instagram followers completely for free and autonomously. There are multiple options for follower growth within the algorithm. The user can choose from multiple proven methods of growth, or a custom option which combines all of the best methods together. I sold around 20 copies before open-sourcing the bot's code."
                    languages="Python, JS, HTML, CSS"
                    technologies="Django, Repl, Selenium, BeautifulSoup, Requests"
                    github="https://github.com"
                />
                <Card 
                    title="Malware Prevention Website"
                    description="When scouring the internet, I came across a website that was a link-shortening service, similar to Bitly and TinyURl. But this service forced users to download malware before allowing users to proceed to the final, shortened link. To solve this problem, I built a website and accompanying Application Programming Interface (API) where users can input the long link and immediately get the shortened link without downloading any viruses. My website reached approximately 150,000 users before I took it down (I had to study for upcoming AP exams). But I published the source-code, allowing anyone to recreate the website if they wish."
                    languages="Python"
                    technologies="Pygame, Tkinter, Postman, Requests"
                    github="https://github.com"
                />
                <Card 
                    title="Twitter Fake News Checker Bot"
                    description="I noticed high amounts of fake news spreading across social media, so I created a bot to help combat this. This Twitter bot helps to predict whether a given news article is real or fake by running it through a machine learning model. The model compares the syntax and diction of the given news articles to articles from credited sources, such as Forbes and the New York Times. To use the bot, the user simply has to reply to a given tweet with a link to a news article and mention the bot. Then the bot will use BeautifulSoup to scan the article and retrieve the article's text. The text is then ran through the model. Disclaimer: SATSifaction's tutorial on Youtube helped me with building the core logic of the machine learning model, but I made some adjustments and connected it to a Twitter bot through Tweepy."
                    languages="Python"
                    technologies="Pandas, Scikit-learn, BeautifulSoup, Tweepy, Requests, Postman"
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
                    <img src="temp.png" alt="logo" class="project-pic"></img>
                </div>

                <div class="card-text">
                    <h2>{properties.title}</h2>
                    <p>{properties.description}</p>
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
