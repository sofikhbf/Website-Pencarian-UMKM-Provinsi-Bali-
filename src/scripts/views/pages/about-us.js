const AboutUs = {
  async render() {
    return /* html */`
      <about-us></about-us>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');

    const readMore = document.querySelector('#read-more');
    readMore.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#tentang-kami').focus();
    });

    window.addEventListener('scroll', () => {
      const aboutHeading = document.querySelector('#tentang-kami');
      const paragraf1 = document.querySelector('.aboutParagraf');
      const paragraf2 = document.querySelector('.aboutParagraf2');

      if (window.pageYOffset >= 370) {
        aboutHeading.classList.remove('opacity-0');
        aboutHeading.classList.add('animate__animated', 'animate__slideInRight', 'animate__slow');

        paragraf1.classList.remove('opacity-0');
        paragraf1.classList.add('animate__animated', 'animate__slideInRight', 'animate__delay-1s', 'animate__faster');

        paragraf2.classList.remove('opacity-0');
        paragraf2.classList.add('animate__animated', 'animate__slideInRight', 'animate__delay-1s');
      }
    });
  },
};

export default AboutUs;
