import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Authentication.css';
import 'boxicons/css/boxicons.min.css';
import PageHeader from '../../components/PageHeader';
import Testimonial from '../../components/Testimonial';
import { Link } from 'react-router-dom';

const Register = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll<HTMLInputElement>('.input');

    const addFocus = function (this: HTMLInputElement) {
      this.parentElement?.parentElement?.classList.add('focus');
    };

    const removeFocus = function (this: HTMLInputElement) {
      if (this.value === '') {
        this.parentElement?.parentElement?.classList.remove('focus');
      }
    };

    inputs.forEach((input) => {
      input.addEventListener('focus', addFocus);
      input.addEventListener('blur', removeFocus);
    });

    const sr = ScrollReveal({
      distance: '20px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('section', { interval: 200, origin: 'left' });
    sr.reveal('form', { interval: 200, origin: 'right' });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', addFocus);
        input.removeEventListener('blur', removeFocus);
      });
    };
  }, []);

  return (
    <>
      <PageHeader title="Đăng nhập" />
      <div className="content">
        <section>
          <h2 className="title">More Than Just a Coffee Bean</h2>
          <p className="subtitle">
            A unique flavor, each recipe is made from more than two coffees. <br />
            You Can’t Buy Happiness, But You Can Buy Our Coffee, and That’s Pretty Close.
          </p>
        </section>

        <form id="register-form">
          <h1 className="title">Đăng ký</h1>

          <div className="box">
            <div className="icon"><i className="bx bx-user"></i></div>
            <div className="input-box">
              <label className="label">Họ</label>
              <input type="text" className="input" />
            </div>
          </div>

          <div className="box">
            <div className="icon"><i className="bx bx-id-card"></i></div>
            <div className="input-box">
              <label className="label">Tên</label>
              <input type="text" className="input" />
            </div>
          </div>

          <div className="box">
            <div className="icon"><i className="bx bx-phone"></i></div>
            <div className="input-box">
              <label className="label">Số điện thoại</label>
              <input type="text" className="input" />
            </div>
          </div>

          <div className="box">
            <div className="icon"><i className="bx bx-envelope"></i></div>
            <div className="input-box">
              <label className="label">Email</label>
              <input type="text" className="input" />
            </div>
          </div>

          <div className="box">
            <div className="icon"><i className="bx bx-lock"></i></div>
            <div className="input-box">
              <label className="label">Mật khẩu</label>
              <input type="password" className="input" />
            </div>
          </div>

          <input type="submit" className="login-button" value="Đăng ký" />

          <div className="sign">
            Đã có tài khoản ? <Link to="/login#login-form" >Đăng nhập ngay</Link><br></br><b>Hoặc đăng nhập bằng </b>
          </div>
          <div className="social-login">
            <Link to="/facebook-login" className="social-btn facebook">
              <div className="icon"><i className='bx bxl-facebook'></i></div>
              <span className="text">Facebook</span>
            </Link>
            <Link to="/google-login" className="social-btn google">
              <div className="icon"><i className='bx bxl-google-plus'></i></div>
              <span className="text">Google</span>
            </Link>
          </div>
        </form>
      </div>
      <Testimonial />
    </>

  );
};

export default Register;
