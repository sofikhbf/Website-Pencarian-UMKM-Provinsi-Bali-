class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <footer class="w-full bg-lime-950 py-16 px-2">
        <div class="md:px-12 lg:px-28">
          <div class="container m-auto space-y-6 text-gray-300">
            <img src="images/logo/logo_capstone-removebg.png" alt="logo tailus" class="m-auto w-80" />
            <ul
              role="list"
              class="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
            >
              <li role="listitem"><a href="#/home" class="hover:text-gray-600 transition-all">Home</a></li>
              <li role="listitem"><a href="#/katalog" class="hover:text-gray-600 transition-all">Katalog</a></li>
              <li role="listitem"><a href="#/favorite" class="hover:text-gray-600 transition-all">Produk Yang Anda Sukai</a></li>
            </ul>
            <div class="text-center">
              <span class="text-sm tracking-wide"
                >Copyright © UMKM KITA | All right reserved</span
              >
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
