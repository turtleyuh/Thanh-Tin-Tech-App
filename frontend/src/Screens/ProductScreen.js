import React from 'react';
import data from '../data.js';
import {Link} from 'react-router-dom';

function ProductScreen(props){
    console.log(props.match.params.id);
	const product = data.products.find(x => x._id === props.match.params.id);
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
            <div className="dropdown">
            <button onClick={dropdownmenu} class="dropbtn"><i class="fas fa-bars"></i>Danh mục sản phẩm</button>
            <div id="myDropdown" className="dropdown-content">
               <div className="row">
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
            </div>
            </div>
            <div className="products-box2">
                <div>
                    <Link to="/"><i className="fas fa-arrow-left"></i> Quay lại</Link>
                </div>
                <div className="detail">
					<div className="detail-image">
						<img src={product.detailImage} alt="product"/>
					</div>
					<div className="detail-info">
						<ul>
							<li>
								<h2>{product.name}</h2>
							</li>
							<li>
								<h4>Hãng sản xuất: {product.hangsx}</h4>
							</li>
							<li>
								Model: <b>{product.model}</b>
							</li>
							<li>
								<Link to={"/form/" + product._id}>Yêu cầu báo giá</Link>
							</li>
							<li>
								<b>Mô tả sản phẩm:</b>
								<div>
									{product.mota}
								</div>
							</li>
						</ul>
					</div>
				</div>
                <div className="parameter">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Thông số kỹ thuật</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Đặc tính nổi bật</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ứng dụng</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Video</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Download catalog</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Thông tin hãng sản xuất</button>
                        </li>
                    </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <ul className="ul-parameter">
                                    <li>Dải đo: </li>
                                    <li>Độ phân giải : </li>
                                    <li>Độ chính xác : </li>
                                    <li>Đường kính trục : </li>
                                    <li>Kiểu : </li>
                                    <li>Hệ đơn vị :</li>
                                </ul>
                            </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                    </div>
                </div>
            </div>
            
            </div>
}

export default ProductScreen;