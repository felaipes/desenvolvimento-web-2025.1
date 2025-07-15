
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f4f6fa;
  color: #333;
  padding: 0;
}


main {
  padding-top: 100px;
  padding-bottom: 100px; 
}


/* Cabeçalho e Rodapé (Layout Fixo) */
header {
    background: rgba(0, 31, 78, 0.75); /* Aumentei a translucidez */
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    color: white;
    backdrop-filter: blur(12px); /* Efeito de vidro fosco */
    -webkit-backdrop-filter: blur(12px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

footer {
    background-color: rgba(0, 31, 78, 0.75); /* Deixei translúcido */
    color: white;
    padding: 1.5rem;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    backdrop-filter: blur(12px); /* Adicionei o efeito de vidro fosco */
    -webkit-backdrop-filter: blur(12px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}


/* Navegação */
nav {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease; 
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

nav a:hover {
  color: #00bfff;
  background-color: rgba(255, 255, 255, 0.05);
}

/* Tipografia */
h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
  color: #001f4e;
  margin-top: 0;
}

h1 {
  font-size: 2.5rem;
}

h2 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 2rem;
}

/* --- ANIMAÇÕES --- */
.fade-in-section {
  opacity: 0;
  transform: translateY(25px);
  visibility: hidden;
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  will-change: opacity, visibility;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.fade-enter { opacity: 0; }
.fade-enter-active { opacity: 1; transition: opacity 500ms; }
.fade-exit { opacity: 1; }
.fade-exit-active { opacity: 0; transition: opacity 500ms; }


/* Estilos para Páginas de Conteúdo (Empresa, Serviços, etc.) */
.page-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
}

.empresa-container, .services-container {
    background-color: white;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 900px;
}

.empresa-container p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.empresa-intro {
    font-weight: bold;
    color: #001f4e;
}

.mvv-section {
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.mvv-card {
    flex: 1;
    background-color: #f4f6fa;
    padding: 2rem;
    border-radius: 8px;
    border-left: 5px solid #001f4e;
}

.mvv-card h3 {
    margin-bottom: 1rem;
}

.mvv-card p {
    font-size: 1rem;
    line-height: 1.6;
    font-style: italic;
    color: #333;
}

.valores-section h3 {
    text-align: center;
    margin-bottom: 2rem;
}

.valores-section ul {
    list-style: none;
    padding: 0;
    column-count: 2;
    column-gap: 2rem;
}

.valores-section li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
}

.valores-section li::before {
    content: '✔';
    color: #00bfff;
    position: absolute;
    left: 0;
}

/* Página de Serviços */
.services-container > p {
    text-align: center;
    margin-bottom: 2.5rem;
    color: #555;
    font-size: 1.1rem;
}

.services-list {
    list-style: none;
    padding: 0;
}

.services-list li {
    background-color: #f9f9f9;
    border-left: 5px solid #001f4e;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 0 8px 8px 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.services-list li:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}

.services-list h3 {
    margin: 0 0 0.5rem 0;
    color: #001f4e;
}

.services-list p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
}


/* Seção Home */
.home-container {
  background: url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png');
  background-color: #f4f6fa;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.home-texto {
  max-width: 900px;
  width: 100%;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.home-texto h1 {
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  color: #001f4e;
}

.home-texto p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #333;
}

.home-texto strong {
  color: #001f4e;
  font-weight: 700;
}

.home-texto .home-final-phrase {
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2.5rem;
  color: #001f4e;
  background-color: rgba(0, 191, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
}


.sobre-nos-overlay {
  position: relative;
  padding: 10;
  height: 150vh; 
  color:  #ffffff;
;
}

.sobre-imagem-background {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh; 
  width: 100%;
  z-index: 1;
}

.sobre-imagem-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 31, 78, 0.5); 
  z-index: 2;
}

.sobre-imagem-background img {
  width: 100%;
  height: 175%;
  object-fit: cover; 
}

.sobre-texto-content-overlay {
  position: relative;
  z-index: 3; 
  max-width: 800px;
  margin: 0 auto;
  padding: 15vh 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.sobre-texto-content-overlay h3 {
  color: #00bfff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.2rem;
}

.sobre-texto-content-overlay h1 {
  color: white;
  font-size: 3rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin-bottom: 2rem;
}

.sobre-texto-content-overlay p {
  font-size: 1.2rem;
  line-height: 1.8;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 2rem;
}

.sobre-texto-content-overlay ul {
  list-style: none;
  padding: 0;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.sobre-texto-content-overlay li {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}

.sobre-texto-content-overlay li::before {
  content: '✔';
  color: #00bfff;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 2px;
}


/* Responsividade */
@media (max-width: 768px) {
  main {
    padding-top: 180px;
  }
  
  header {
    flex-direction: column;
    padding: 1rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .home-container, .page-container {
    padding: 2rem 1rem;
  }

  .home-texto, .empresa-container, .services-container {
    padding: 2rem;
  }

  .home-texto h1 {
    font-size: 2rem;
  }

  .home-texto p, .empresa-container p {
    font-size: 1rem;
  }
  
  .mvv-section {
    flex-direction: column;
  }

  .valores-section ul {
    column-count: 1;
  }
}
