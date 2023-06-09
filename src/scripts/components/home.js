class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <hero-section></hero-section>  
    <card-home></card-home>
      <faq-section></faq-section>
    `;
  }
}

customElements.define('home-page', HomePage);
