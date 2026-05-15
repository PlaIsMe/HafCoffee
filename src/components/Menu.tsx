import menu1 from '../image/menu-1.jpg';
import menu2 from '../image/menu-2.jpg';
import menu3 from '../image/menu-3.jpg';


interface MenuItem {
  name: string;
  price: string;
  image: string;
  description: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Hot Coffee',
    items: [
      {
        name: 'Black Coffee',
        price: '$5',
        image: menu1,
        description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
      },
      {
        name: 'Chocolete Coffee',
        price: '$7',
        image: menu2,
        description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
      },
      {
        name: 'Coffee With Milk',
        price: '$9',
        image: menu3,
        description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
      },
    ],
  },
  {
    title: 'Cold Coffee',
    items: [
      {
        name: 'Black Coffee',
        price: '$5',
        image: menu1,
        description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
      },
      {
        name: 'Chocolete Coffee',
        price: '$7',
        image: menu2,
        description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
      },
      {
        name: 'Coffee With Milk',
        price: '$9',
        image: menu3,
        description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
      },
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
          <h1 className="display-4">Competitive Pricing</h1>
        </div>

        <div className="row">
          {menuData.map((category, idx) => (
            <div className="col-lg-6" key={idx}>
              <h1 className="mb-5">{category.title}</h1>
              {category.items.map((item, i) => (
                <div className="row align-items-center mb-5" key={i}>
                  <div className="col-4 col-sm-3">
                    <img
                      className="w-100 rounded-circle mb-3 mb-sm-0"
                      src={item.image}
                      alt={item.name}
                    />
                    <h5 className="menu-price">{item.price}</h5>
                  </div>
                  <div className="col-8 col-sm-9">
                    <h4>{item.name}</h4>
                    <p className="m-0">{item.description}</p>
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
