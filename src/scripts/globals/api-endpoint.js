import CONFIG from './config';

const API_ENDPOINT = {
  ALL_PRODUCT: `${CONFIG.BASE_URL}umkm`,
  DETAIL_PRODUCT: (id) => `${CONFIG.BASE_URL}umkm/${id}`,
};

export default API_ENDPOINT;
