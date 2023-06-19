import FavoriteProductIdb from '../data/favorite-product-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creators';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, product }) {
    this._likeButtonContainer = likeButtonContainer;
    this._product = product.data;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._product;

    if (await this._isProductExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isProductExist(id) {
    const product = await FavoriteProductIdb.getProduct(id);
    return !!product;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteProductIdb.putProduct(this._product);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteProductIdb.deleteProduct(this._product.uuid);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
