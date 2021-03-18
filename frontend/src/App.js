import React from "react";
import data from "./data.js";
import HomeScreen from "./Screens/HomeScreen.js";
import ProductScreen from "./Screens/ProductScreen.js";
import CategoryScreen from "./Screens/CategoryScreen.js";
import NewsScreen from "./Screens/NewsScreen.js";
import FormScreen from "./Screens/FormScreen.js";
import CartScreen from "./Screens/CartScreen.js"
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="header">
          <div className="upper-nav">
            <div className="hotline">Hotline: 090xxxx</div>
            <Link href="mailto:sales@thanhtin-tech.com">Email: sales@thanhtin-tech.com</Link>
            <div className="lang">
              <button>
                <img src="./images/vnese.png" alt="vietnamese" />
              </button>
              <button>
                <img src="./images/tải xuống.png" alt="english" />
              </button>
              <div className="lang-cur">VN</div>
            </div>
          </div>
          <nav>
            <div className="logo">
              <Link to="/">
                <img src="./images/logo.png" alt="thanhtin-tech" />
              </Link>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Nhập thiết bị, hoá chất, dụng cụ..."
              />
              <button><span>Tìm kiếm</span><i class="fas fa-search"></i></button>
            </div>
            <div className="cart">
              <Link to="/cart">
                <i className="fas fa-shopping-basket"></i>
              </Link>
              <div className="quantity"><span>Giỏ hàng: 0</span></div>
            </div>
          </nav>
        </div>
        <div className="content">
          
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/category" component={CategoryScreen} />
          <Route path="/news" component={NewsScreen} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/form" component={FormScreen} />
          <div className="logo-marquee">
            <marquee  behavior="scroll" direction="left" >
              <img
                src="./images/alp.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/consort.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/emco.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/exam.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/kruss.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/nabertherm.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/gfl.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/pta.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/pnshar.png"
                width="120"
                height="80"
                alt="Natural"
              />
            </marquee>  
          </div>
        </div>
        <div className="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-4 col-sm-6 footer-child">
                    <h5 className="footer-title">thông tin liên hệ</h5>
                    <h5>công ty tnhh thiết bị và hóa chất thành tín</h5>
                    <div className="vphcm ">
                      <strong>VPHCM:</strong><span> 78 Đường số 1A, Khu Phố 4, P.Bình Hưng Hòa B, Quận Bình Tân, Tp.HCM</span>
                      <p><strong>Điện thoại:</strong> <span> (028) 36 360 901 </span></p><p><strong>Fax:</strong> <span>(028) 36 360 902</span></p>
                    </div>
                    <div className="vphn">
                      <strong>Ha Noi Office: </strong><span>Lô 3, khu A1-A2-A3, Đường Cầu Thanh Trì, P.Cự Khối, Quận Long Biên, Hà Nội</span>
                      <p><strong>MST: </strong><span>0311941553 -001</span></p><p><strong>Email: </strong><span>hanoi@thanhtin-tech.com</span></p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 footer-child">
                    <h5 className="footer-title">phòng kinh doanh </h5>
                    <p><strong>HCM: </strong><span>sales@thanhtin-tech.com </span></p>
                    <p><strong>Hà Nội: </strong><span>hanoi@thanhtin-tech.com </span></p>
                  </div>
                  <div class="col-md-4 col-sm-6 footer-child">
                    <h5 className="footer-title">phòng kỹ thuật</h5>
                    <p><strong>HCM: </strong><span>service@thanhtin-tech.com </span></p>
                    <p><strong>Hà Nội: </strong><span>service@thanhtin-tech.com </span></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 footer-child">
                <div class="fb-page" data-href="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147" data-tabs="timeline" data-width="300" data-height="200" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147">Công ty TNHH Thiết Bị Và Hoá Chất  Thành Tín</a></blockquote></div>
                <div className="other-social">
                  <Link to="#"><i className="fab fa-facebook"></i></Link>
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-youtube"></i></Link>
                  <Link to="#"><i className="fab fa-pinterest"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div>COPYRIGHT &copy; 2021 CÔNG TY TNHH THIẾT BỊ VÀ HÓA CHẤT THÀNH TÍN</div>
          </div>
        </div>    
      </div>
    </BrowserRouter>
  );
}

export default App;
