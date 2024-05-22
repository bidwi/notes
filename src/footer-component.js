class FooterComponent extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
<style>
.site-footer {
  background-color: #6D9886;
  padding: 20px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 40vh;
}

.container {
  max-width: 1200px; 
  margin: 0 auto;
}

p {
  color: #F6F6F6;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-content p {
  margin: 0;
}

.footer-content a {
  text-decoration: none;
  color: #F6F6F6;
  margin: 0.4rem;
}

.footer-content a:hover {
  text-decoration: underline;
}

.nav-footer {
  margin: 1rem;
}


</style>

<footer class="site-footer">
    <div class="container">
        <div class="footer-content">

                <p>&copy; Notes App, Billy Dwi Prakoso. All rights reserved.</p>

            <nav class='nav-footer' id='footer-bookmark'>
                <a href="#"'>Email</a>  
                <a href="#">Instagram</a>
            </nav>
        </div>
    </div>
</footer>
       `;
  }
}

customElements.define("footer-component", FooterComponent);
