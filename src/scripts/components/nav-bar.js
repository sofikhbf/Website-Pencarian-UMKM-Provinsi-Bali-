class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <header class="bg-white/90 shadow-nav backdrop-blur-sm fixed top-0 left-0 w-full flex items-center z-50">
        <div class = "w-full py-2 lg:py-1">
          <div class="flex items-center justify-between relative">
            <div class="px-4">
              <a href="#/home" class="font-bold text-xl lg:text-3xl py-1 flex items-center">
                <img src="images/logo/logo_capstone-removebg.png" alt="Logo UMKM KITA" class="w-10 lg:w-14 mr-2">
                <span class="mt-1 text-gray-900">UMKM KITA</span>
              </a>
            </div>
            <div class="flex items-center px-4">
              <button id="hamburger" type="button" class="block absolute right-4 pt-3 lg:hidden">
                <span class = "hamburger-lines duration-200 ease-in-out origin-top-left"></span>
                <span class = "hamburger-lines duration-200 ease-in-out"></span>
                <span class = "hamburger-lines duration-200 ease-in-out origin-bottom-left"></span>
              </button>
              <nav id="drawer" class="scale-0 transition duration-200 ease-in-out absolute lg:block lg:scale-100 py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-3 top-16 lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul class = "block lg:flex">
                  <li>
                    <a href="#/home" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Home</a>
                  </li>
                  <li>
                    <a href="#/katalog" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Katalog</a>
                  </li>
                  <li>
                    <a href="#/favorite" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Produk Disukai</a>
                  </li>
                  <li>
                    <a href="#/about-us" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Tentang Kami</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
