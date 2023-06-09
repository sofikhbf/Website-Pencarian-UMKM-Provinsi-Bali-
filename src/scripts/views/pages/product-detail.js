import UrlParser from '../../routes/url-parser';
import UmkmSource from '../../data/umkm-data-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const ProductDetail = {
  async render() {
    return /* html */`
      <detail-section></detail-section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;

    const detailElement = document.querySelector('detail-section');
    const detailProduct = (productById) => {
      detailElement.products = productById;
    };

    UmkmSource.getDetailAllProductsForGuest(id).then((product) => {
      detailProduct(product.data);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        product,
      });
    });

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default ProductDetail;
