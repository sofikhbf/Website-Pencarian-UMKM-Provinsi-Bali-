import FavoriteProductIdb from '../../data/favorite-product-idb';

const Favorite = {
  async render() {
    return /* html */ `
      <product-favorite></product-favorite>
      <section id="message"></section>
    `;
  },

  async afterRender() {
    const productListElement = document.querySelector('product-favorite');
    const favorite = await FavoriteProductIdb.getAllProducts();
    const message = document.querySelector('#message');

    if (favorite.length === 0) {
      message.innerHTML = '<message-info></message-info>';
    }

    const allProduct = (productList) => {
      productListElement.products = productList;
    };

    FavoriteProductIdb.getAllProducts().then((data) => {
      allProduct(data);
    });

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default Favorite;
