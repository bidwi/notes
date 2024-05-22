class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
  
    header {
      background-color: #6D9886;
      color: #F6F6F6;
      padding: 20px 0;
      
    }
  
    .container {
      width: 90%;
      margin: 0 auto;
      max-width: 1200px;
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      
    }
  
    h1 {
      font-size: 24px;
      font-family: Verdana, sans-serif;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  
    nav {
      justify-self: end;
      
    }
  
    nav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      text-align: right;
    }
  
    nav ul li {
      display: inline-block;
      margin-left: 40px;
    }
  
    nav ul li a {
      color: #F6F6F6;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s ease;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: bolder;
    }
  
    nav ul li a:hover {
      color: #D9CAB3;
  
    }
  

    @media only screen and (max-width: 420px) {
      .container {
        grid-template-columns: 1fr auto;
        justify-items: center;
      }
  
      h1 {
        text-align: center;
        margin-bottom: 10px;
        
      }
  
      nav {
        grid-column: span 2;
        justify-self: center;
        margin-bottom: 20px;
        padding-top: 10px;
      }
  
      nav ul {
        display: flex;
        justify-content: center;
      }
  
      nav ul li {
        margin: 0 10px;
      }
    }
  </style>


    <header>
        <div class="container" id="header-bookmark">
            <h1>Notes App</h1>
            <nav>
                <ul>
                    <li><a href="#header-bookmark">Buat Note</a></li>
                    <li><a href="#footer-bookmark">Kontak</a></li>
                </ul>
            </nav>
        </div>
    </header>



       `;
  }
}

customElements.define("header-component", HeaderComponent);
