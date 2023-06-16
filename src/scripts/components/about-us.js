import DATA from '../../public/TEAM.json';

class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const { teams } = DATA;

    const cardTeamProfile = (data) => {
      const {
        name, role, instagram, linkedin, github,
      } = data;

      return /* html */ `
        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-secondary">
          <h1 class="mt-4 text-xl text-center font-semibold text-gray-700 capitalize group-hover:text-white">${name}</h1>
          <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">${role}</p>

          <div class="flex mt-3 -mx-2">
            <a href="${instagram}" target="_blank" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Instagram">
              <i class="fa-brands fa-square-instagram text-3xl"></i>
            </a>

            <a href="${linkedin}" target="_blank" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin text-3xl"></i>
            </a>

            <a href="${github}" target="_blank" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Github">
              <i class="fa-brands fa-square-github text-3xl"></i>
            </a>
          </div>
        </div>
      `;
    };

    this.innerHTML = /* html */ `
      <section class="w-full bg-gradient-to-r from-secondary to-[#6c71b4] text-center">
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div class="flex w-full mx-auto text-left">
            <div class="relative inline-flex items-center mx-auto align-middle">
              <div class="text-center">
                <h1 class="animate__animated animate__zoomIn max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-3xl lg:text-4xl lg:max-w-7xl">
                  UMKM KITA<br class="hidden lg:block">
                </h1>
                <p class="animate__animated animate__zoomIn max-w-xl mx-auto mt-8 text-base leading-relaxed text-white"> UMKM Kita berkomitmen untuk membantu Anda dalam mencari UMKM yang tersedia. Explore lebih jauh untuk mengetahui UMKM terbaru yang sudah dirilis.</p>
                <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div class="animate__animated animate__fadeInUp mt-3 rounded-lg sm:mt-0">
                    <button id="read-more" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="items-center block px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-500 lg:px-10 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Lihat Selengkapnya</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <article class="md:p-[100px] p-[60px] ">
        <section class="overflow-hidden">
        <div class="w-full px-4 lg:w-5/12 xl:w-5/12 self-center">
         <div class="mt-10 lg:mt-0">
            <h2 id="tentang-kami" tabindex="0" class="text-dark opacity-0 mb-8 text-3xl font-bold sm:text-4xl">
            UMKM KITA
            </h2>
            <p class="aboutParagraf text-body-color mb-8 text-base opacity-0 text-gray-500">
            UMKM KITA berdiri ditahun 2023 yang merupakan sebuah website pencarian UMKM di provinsi Bali dan tentu saja kami berkomitmen untuk memberikan kemudahan bagi pengguna
            </p>
            <p class="aboutParagraf2 text-body-color mb-12 text-base opacity-0 text-gray-500">
            Industri UMKM (usaha mikro, kecil dan menengah) di Indonesia merupakan salah satu industri yang terus berkembang. Namun, masih banyak UMKM yang kesulitan untuk mempromosikan produk atau jasanya karena terbatasnya akses ke pasar yang lebih luas. Sehingga disini kami berinisiasi membuat platform pencarian UMKM yang terintegrasi dan mudah diakses dapat membantu UMKM memperluas pasar dan meningkatkan pendapatan mereka.
            </p>
          </div>
        </div>
      </section>
      
        <section class="bg-white pt-24 lg:pt-[100px]">
          <div class="container mx-auto">
            <h1 class="text-3xl text-dark mb-8 font-bold sm:text-4xl text-center capitalize lg:text-4xl">Our Team</h1>
            <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
              Tim Ini terdiri dari 4 orang yang berasal dari 2 kampus berbeda yang saling berkolaborasi untuk membangun sebuah platform yang bermanfaat. 
            </p>
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              ${teams.map((profileData) => cardTeamProfile(profileData)).join('')}
            </div>
          </div>
        </section>
      </article>
    `;
  }
}

customElements.define('about-us', AboutUs);
