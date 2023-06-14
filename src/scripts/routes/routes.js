import Home from '../views/pages/home';
import ProductList from '../views/pages/product-list';
import ProductDetail from '../views/pages/product-detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/katalog': ProductList,
  '/katalog/:id': ProductDetail,
  '/favorite': Favorite,
};

export default routes;
