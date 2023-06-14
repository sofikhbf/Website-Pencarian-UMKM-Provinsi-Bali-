class MessageInfo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <div class="grid h-screen px-4 bg-white place-content-center">
        <div class="text-center">
            <img
              src="images/picture/search.png"
              alt="Favorite Kosong"
              class="w-[27rem] mx-auto"
            />
            <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ooopss!
            </p>

            <p class="mt-4 text-gray-500">Silahkan cari produk yang anda sukai.</p>
  
            <a
              href="#/katalog"
              class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-secondary hover:bg-primary rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring"
            >
              <button>Cari</button>
            </a>
        </div>
      </div>
  
        `;
  }
}

customElements.define('message-info', MessageInfo);
