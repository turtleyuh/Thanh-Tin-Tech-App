import React from 'react';
import data from '../data.js';
import { Link} from 'react-router-dom';

function HomeScreen(props){
      /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function dropdownmenu() {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          }
      }
      }
  }
    return  <div>
            <div className="upper-content">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./images/giaiphap-slide.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/4.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="news">
              <div className="news-title">Tin mới</div>
              <div className="news-content">
                <Link to="/news">
                  <p>
                    <i className="fas fa-chevron-right"></i>Công ty Thành Tín là nhà phân phối chính thức cho dòng cân HE/TLE/HE của hãng METTLER TOLEDO (Thụy Sỹ) 
                  </p>
                </Link>
                <Link to="#">
                  <p>
                    <i className="fas fa-chevron-right"></i>Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                  </p>
                </Link>
                <Link to="#">
                  <p>
                    <i className="fas fa-chevron-right"></i>Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                  </p>
                </Link>
                <Link to="#">
                  <p>
                    <i className="fas fa-chevron-right"></i>Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                  </p>
                </Link>
                <Link to="#">
                  <p>
                    <i className="fas fa-chevron-right"></i>Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="dropdown">
              <button onClick={dropdownmenu} class="dropbtn"><i class="fas fa-bars"></i>Danh mục sản phẩm</button>
              <div id="myDropdown" className="dropdown-content">
                <div className="dropdown-large row">
                  <div className="column">
                    <Link className="category menu-item1" to="/category">
                    THIẾT BỊ NGÀNH GIẤY
                    </Link>
                    <Link className="category menu-item2" to="#">
                    THIẾT BỊ NGÀNH BAO BÌ GIẤY
                    </Link>
                    <Link className="menu-item3 category" to="#">
                    THIẾT BỊ NGÀNH BAO BÌ NHỰA
                    </Link>
                    <Link className="menu-item4 category" to="#">
                    THIẾT BỊ NGÀNH CAO SU - NHỰA
                    </Link>
                    <Link className="menu-item5 category" to="#">
                    THIẾT BỊ THỬ NGHIỆM THÉP
                    </Link>
                  </div>
                  <div className="column">
                    <Link className="menu-item6 category" to="#">
                    THIẾT BỊ NGÀNH SƠN - XI MẠ
                    </Link>
                    <Link className="menu-item7 category" to="#">
                    THIẾT BỊ NGÀNH VẬT LIỆU XÂY DỰNG
                    </Link>
                    <Link className="menu-item8 category" to="#">
                    THIẾT BỊ NGÀNH THỰC PHẨM
                    </Link>
                    <Link className="menu-item9 category" to="#">
                    THIẾT BỊ NGÀNH NƯỚC VÀ MÔI TRƯỜNG
                    </Link>
                    <Link className="menu-item10 category" to="#">
                    THIẾT BỊ NGÀNH Y TẾ - SINH HỌC
                    </Link>
                  </div>
                  <div className="column">
                    <Link className="menu-item11 category" to="#">
                    THIẾT BỊ NGÀNH DƯỢC PHẨM
                    </Link>
                    <Link className="menu-item12 category" to="#">
                    THIẾT BỊ ĐO ONLINE (KHÍ THẢI - NƯỚC THẢI - NƯỚC CẤP)
                    </Link>
                    <Link className="menu-item13 category" to="#">
                    HỆ THỐNG QUAN TRẮC NƯỚC THẢI - KHÍ THẢI TỰ ĐỘNG
                    </Link>
                    <Link className="menu-item14 category" to="#">
                    THIẾT BỊ CƠ BẢN PHÒNG THÍ NGHIỆM
                    </Link>
                  </div>
                </div>
                <div className="dropdown-small column">
                    <Link className="category menu-item1" to="/category">
                    THIẾT BỊ NGÀNH GIẤY
                    </Link>
                    <Link className="category menu-item2" to="#">
                    THIẾT BỊ NGÀNH BAO BÌ GIẤY
                    </Link>
                    <Link className="menu-item3 category" to="#">
                    THIẾT BỊ NGÀNH BAO BÌ NHỰA
                    </Link>
                    <Link className="menu-item4 category" to="#">
                    THIẾT BỊ NGÀNH CAO SU - NHỰA
                    </Link>
                    <Link className="menu-item5 category" to="#">
                    THIẾT BỊ THỬ NGHIỆM THÉP
                    </Link>
                    <Link className="menu-item6 category" to="#">
                    THIẾT BỊ NGÀNH SƠN - XI MẠ
                    </Link>
                    <Link className="menu-item7 category" to="#">
                    THIẾT BỊ NGÀNH VẬT LIỆU XÂY DỰNG
                    </Link>
                    <Link className="menu-item8 category" to="#">
                    THIẾT BỊ NGÀNH THỰC PHẨM
                    </Link>
                    <Link className="menu-item9 category" to="#">
                    THIẾT BỊ NGÀNH NƯỚC VÀ MÔI TRƯỜNG
                    </Link>
                    <Link className="menu-item10 category" to="#">
                    THIẾT BỊ NGÀNH Y TẾ - SINH HỌC
                    </Link>
                    <Link className="menu-item11 category" to="#">
                    THIẾT BỊ NGÀNH DƯỢC PHẨM
                    </Link>
                    <Link className="menu-item12 category" to="#">
                    THIẾT BỊ ĐO ONLINE (KHÍ THẢI - NƯỚC THẢI - NƯỚC CẤP)
                    </Link>
                    <Link className="menu-item13 category" to="#">
                    HỆ THỐNG QUAN TRẮC NƯỚC THẢI - KHÍ THẢI TỰ ĐỘNG
                    </Link>
                    <Link className="menu-item14 category" to="#">
                    THIẾT BỊ CƠ BẢN PHÒNG THÍ NGHIỆM
                    </Link>
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="products-box">
                <div className="product-section">
                    <div className="product-title">
                        <Link to="#">Sản phẩm mới</Link>
                        <img src="./images/bannerviif20192.jpg" alt="" />
                        <img src="./images/thiet-bi-ptn.jpg" alt="" />
                    </div>
                    <ul className="product-content">
                        {data.products.filter(product => product.status === "new").map(filteredProduct => (
                        <li>
                            <div className="product">
                                <Link to={"/product/" + filteredProduct._id}>
                                    <img src={filteredProduct.image} alt="hinh-anh-san-pham" />
                                    <p  className="product-name">{filteredProduct.name}</p>
                                </Link>
                                <p><strong>Model</strong>:{filteredProduct.model}</p>
                                <div className="btn-container">
                                    <Link className="norm-btn" to="/form">Yêu cầu báo giá</Link>
                                    
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="product-section">
                    <div className="product-title">
                        <Link to="#">Sản phẩm bán chạy</Link>
                        <img src="./images/bannerviif20192.jpg" alt="" />
                        <img src="./images/thiet-bi-ptn.jpg" alt="" />
                    </div>
                    <ul className="product-content">
                        {data.products.filter(product => product.status === "hot").map(filteredProduct => (
                        <li>
                            <div className="product">
                                <Link to={"/product/" + filteredProduct._id}>
                                    <img src={filteredProduct.image} alt="hinh-anh-san-pham" />
                                    <p  className="product-name">{filteredProduct.name}</p>
                                </Link>
                                <p><strong>Hãng sản xuất</strong>: {filteredProduct.hangsx}</p>
                                <p><strong>Model</strong>:{filteredProduct.model}</p>
                                <div className="btn-container">
                                    <Link className="norm-btn" to="/form">Yêu cầu báo giá</Link>
                                    
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div className="product-section">
                    <div className="product-title">
                        <Link to="#">Tất cả sản phẩm</Link>
                    </div>
                    <ul className="product-content">
                        {data.products.map(product => 
                        <li>
                            <div className="product">
                                <Link to={"/product/" + product._id}>
                                    <img src={product.image} alt="hinh-anh-san-pham" />
                                    <p  className="product-name">{product.name}</p>
                                </Link>
                                <p><strong>Hãng sản xuất</strong>: {product.hangsx}</p>
                                <p><strong>Model</strong>:{product.model}</p>
                                <div className="btn-container">
                                    <Link className="norm-btn" to="/form">Yêu cầu báo giá</Link>
                                </div>
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="sidebar">
              <div className="sidebar-title">
                <Link to="#">Giải pháp công nghệ tự động</Link>
              </div>
              <div className="sidebar-content">
                <Link to="#" className="content-img">
                  <img
                    src="./images/sidebar-img.png"
                    alt="giai-phap-cong-nghe-tu-dong"
                  />
                  <div className="caption">
                    <h5> Lorem ipsum dolor sit amet.</h5>
                    <p>15-1-2020, 4:51 pm</p>
                  </div>
                </Link>
              </div>
              <div className="sub-content">
                <Link to="#">
                  <img
                    src="./images/thumb_DM4A300.jpg"
                    alt="thiet-bi-phong-thi-nghiem"
                  />
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas eu nulla malesuada,
                    vehicula eros ac
                  </span>
                </Link>
              </div>
              <div className="sub-content">
                <Link to="#">
                  <img
                    src="./images/thumb_DM4A300.jpg"
                    alt="thiet-bi-phong-thi-nghiem"
                  />
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas eu nulla malesuada,
                    vehicula eros ac
                  </span>
                </Link>
              </div>
              <div className="sidebar-title">
                <Link to="#">Giải pháp công nghệ tự động</Link>
              </div>
              <div className="sidebar-content">
                <Link to="#" className="content-img">
                  <img
                    src="./images/sidebar-img.png"
                    alt="giai-phap-cong-nghe-tu-dong"
                  />
                  <div className="caption">
                    <h5> Lorem ipsum dolor sit amet.</h5>
                    <p>15-1-2020, 4:51 pm</p>
                  </div>
                </Link>
              </div>
              <div className="sub-content">
                <Link to="#">
                  <img
                    src="./images/thumb_DM4A300.jpg"
                    alt="thiet-bi-phong-thi-nghiem"
                  />
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas eu nulla malesuada,
                    vehicula eros ac
                  </span>
                </Link>
              </div>
              <div className="sub-content">
                <Link to="#">
                  <img
                    src="./images/thumb_DM4A300.jpg"
                    alt="thiet-bi-phong-thi-nghiem"
                  />
                  <span>
                    {" "}
                    Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas eu nulla malesuada,
                    vehicula eros ac
                  </span>
                </Link>
              </div>
            </div>
        </div>
        </div>

        
}

export default HomeScreen;