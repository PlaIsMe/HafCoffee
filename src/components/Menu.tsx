import product_arabica from '../image/product_arabica.png';
import product_blend from '../image/product_blend.png';
import product_culi_robusta from '../image/product_culi_robusta.png';
import product_robusta from '../image/product_robusta.png';
import product_robusta_honey from '../image/product_robusta_honey.png';

interface MenuItem {
  name: string;
  price_250g: string;
  price_500g: string;
  image: string;
  description: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Êm - Cân Bằng',
    items: [
      {
        name: 'Arabica',
        price_250g: '130000 VND',
        price_500g: '250000 VND',
        image: product_arabica,
        description: 'Thơm thanh, vị êm, hậu nhẹ.',
      },
      {
        name: 'Robusta Blend Arabica',
        price_250g: '130000 VND',
        price_500g: '250000 VND',
        image: product_blend,
        description: 'Tròn vị, dễ uống mỗi ngày.',
      },
      {
        name: 'Robusta Honey',
        price_250g: '130000 VND',
        price_500g: '250000 VND',
        image: product_robusta_honey,
        description: 'Đậm vừa, ngọt dịu, ít gắt.',
      },
    ],
  },
  {
    title: 'Đậm - Mạnh Mẽ',
    items: [
      {
        name: 'Robusta',
        price_250g: '130000 VND',
        price_500g: '250000 VND',
        image: product_robusta,
        description: 'Đậm đà, mạnh mẽ, gu Việt',
      },
      {
        name: 'Culi Robusta',
        price_250g: '130000 VND',
        price_500g: '250000 VND',
        image: product_culi_robusta,
        description: 'Đậm lực, tỉnh táo, hậu sâu.',
      }
    ],
  },
];

const Menu = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
            Sản phẩm
          </h4>
          <h1 className="display-4">Các loại cà phê nguyên chất</h1>
        </div>

        <div className="row">
          {menuData.map((category, idx) => (
            <div className="col-lg-6" key={idx}>
              {/* <h1 className={`mb-5 ${idx === 1 ? 'text-end' : ''}`}>{category.title}</h1> */}
              {category.items.map((item, i) => (
                <div className="menu-item-card mb-5 p-4" key={i}>
                  <div className="menu-item-image mb-4">
                    <img
                      className="product-image"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="menu-item-info text-center text-sm-start">
                    <h4 className="mb-2">{item.name}</h4>
                    <p className="menu-item-desc mb-3">{item.description} sản phẩm gồm <strong>dạng bột</strong> và <strong>dạng hạt</strong> với hai kích thước <strong>250g</strong> và <strong>500g</strong>.</p>
                    <div className="menu-price-list mx-auto mx-sm-0">
                      <div className="menu-price-item">250g: {item.price_250g}</div>
                      <div className="menu-price-item">500g: {item.price_500g}</div>
                    </div>
                    <div className="text-center mt-4">
                      <a href="#" className="btn btn-sm facebook-btn rounded-pill">
                        <i className="fab fa-facebook-f me-2"></i>
                        Liên hệ ngay
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
