import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Authentication.css';
import 'boxicons/css/boxicons.min.css';
import PageHeader from '../../components/PageHeader';
import Testimonial from '../../components/Testimonial';
import { Link } from 'react-router-dom';

const Login = () => {
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

        <form id="login-form">
          <h1 className="title">Đăng nhập</h1>

          <div className="box">
            <div className="icon"><i className="bx bx-user-circle"></i></div>
            <div className="input-box">
              <label className="label">Email hoặc số điện thoại</label>
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

          <div className="forgot"><Link to="/forgot-password" >Quên mật khẩu</Link></div>

          <input type="submit" className="login-button" value="Đăng nhập" />

          <div className="sign">
            Chưa có tài khoản? <Link to="/register#register-form" >Đăng ký ngay</Link><br></br><b>Hoặc đăng nhập bằng </b>
          </div>
          <div className="social-login">
            <div className="social-btn facebook"
              onClick={() => {
                window.location.href = "http://localhost:8080/oauth2/authorization/google";
              }}>
              <div className="icon"><i className='bx bxl-facebook'></i></div>
              <span className="text">Facebook</span>
            </div>
            <div className="social-btn google"
              onClick={() => {
                window.location.href = "http://localhost:8080/oauth2/authorization/google";
              }}>
              <div className="icon"><i className='bx bxl-google-plus'></i></div>
              <span className="text">Google</span>
            </div>
          </div>
        </form>
      </div>
      <Testimonial />
    </>

  );
};

export default Login;
