class FaqSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="container lg:my-16 px-6 mx-auto">
      <section class="mb-14 lg:mb-0 text-gray-800">
        <div class="container mx-auto xl:px-32 text-center lg:text-left">
          <div class="grid lg:grid-cols-2 items-center">
            <div>
              <div
                class="block rounded-xl shadow-lg bg-white/70 px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14 backdrop-blur-xl"
              >
              <h3 class="text-2xl font-bold mb-3">UMKM KITA ?</h3>

              <p class="font-bold mb-4">Apa yang kami sediakan ?</p>
              <p class="text-gra-500 mb-6">
                Apa sih yang kami sediakan? disini kami menyediakan daftar umkm terbaru yang tersedia atau baru launching.
              </p>

              <p class="font-bold mb-4">Apa saja kategori UMKM yang disediakan ?</p>
              <p class="text-gra-500 mb-6">
              Disini kami menyediakan 3 kategori UMKM yang mencakup Fashion, Kerajinan Tangan, dan Makanan
              
              </p>
              </div>
            </div>

            <div>
              <img
                src="images/picture/faq.png"
                class="w-full rounded-lg shadow-lg hidden lg:block"
                alt="UMKM KITA"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    `;
  }
}

customElements.define('faq-section', FaqSection);
