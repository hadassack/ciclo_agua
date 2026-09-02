@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    color: #183b56;
    background: #f7fcff;
    overflow-x: hidden;
}

.hero {
    min-height: 720px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(145deg, #36c5f0, #287be5);
    color: white;
}

.hero::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    right: -200px;
    top: -200px;
}

nav {
    max-width: 1200px;
    margin: auto;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    position: relative;
    z-index: 10;
}

.logo,
.footer-logo {
    font-family: 'Baloo 2', sans-serif;
    font-size: 28px;
    font-weight: 800;
}

.nav-links {
    display: flex;
    gap: 28px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: .3s;
}

.nav-links a:hover {
    color: #ffe66d;
    transform: translateY(-2px);
}

.hero-content {
    max-width: 1200px;
    min-height: 600px;
    margin: auto;
    padding: 50px 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-text {
    max-width: 580px;
}

.tag,
.section-title span {
    display: inline-block;
    background: rgba(255,255,255,.2);
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .5px;
}

.hero h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: clamp(60px, 7vw, 92px);
    line-height: .9;
    margin: 22px 0;
}

.hero h1 span {
    color: #ffe66d;
}

.hero p {
    max-width: 540px;
    font-size: 18px;
    line-height: 1.8;
    color: #e9faff;
}

.buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.btn {
    display: inline-block;
    border: none;
    padding: 15px 24px;
    border-radius: 50px;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    transition: .3s;
}

.btn:hover {
    transform: translateY(-4px) scale(1.03);
}

.primary {
    background: #ffe66d;
    color: #17476a;
    box-shadow: 0 10px 25px rgba(0,0,0,.15);
}

.secondary {
    color: white;
    border: 2px solid white;
}

.water-illustration {
    height: 500px;
    position: relative;
}

.sun {
    position: absolute;
    right: 50px;
    top: 20px;
    font-size: 90px;
    animation: float 3s infinite ease-in-out;
}

.cloud {
    position: absolute;
    font-size: 90px;
    filter: drop-shadow(0 10px 5px rgba(0,0,0,.1));
}

.cloud1 {
    top: 100px;
    left: 60px;
    animation: cloudMove 5s infinite ease-in-out;
}

.cloud2 {
    top: 180px;
    right: 80px;
    font-size: 65px;
    animation: cloudMove 6s infinite ease-in-out reverse;
}

.mountains {
    position: absolute;
    bottom: 80px;
    font-size: 100px;
    white-space: nowrap;
}

.rain {
    position: absolute;
    top: 180px;
    left: 180px;
    font-size: 25px;
    line-height: 1.1;
