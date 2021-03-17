import {React} from 'react';
import {Link} from 'react-router-dom';
import data from '../data.js';

function CategoryScreen(){
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
    return <div>
     <div className="dropdown">
            <button onClick={dropdownmenu} class="dropbtn"><i class="fas fa-bars"></i>Danh mục sản phẩm</button>
            <div id="myDropdown" className="dropdown-content">
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
         <ul className="product-content">
                        {data.products.filter(product => product.loaihang === "thiet bi nganh giay").map(filteredProduct => (
                        <li>
                            <div className="product">
                                <Link to={"/product/" + filteredProduct._id}>
                                    <img src={filteredProduct.image} alt="hinh-anh-san-pham" />
                                    <p  className="product-name">{filteredProduct.name}</p>
                                </Link>
                                <p><strong>Hãng sản xuất</strong>: {filteredProduct.hangsx}</p>
                                <p><strong>Model</strong>:{filteredProduct.model}</p>
                                <div className="btn-container">
                                    <Link className="norm-btn" to="#">Báo giá</Link>
                                    <Link className="norm-btn" to={"/product/" + filteredProduct._id}>Chi tiết</Link>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
    </div>
}

export default CategoryScreen;