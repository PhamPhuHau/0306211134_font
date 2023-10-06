import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
        
            <div class="head row">
                <div className="bodyhead row">
                    <div class="baavatar col-sm-3">

                        <a href="/"><img href="" class='avatar' src={"Hinhxe03.png"} alt=""></img></a>

                    </div>
                    <div class="batimkiem col-sm-6  ">
                        <input class="timkiem" type="search" id="search" placeholder="Nhập tên sản phẩm" ></input>

                    </div>
                    <div class="dkdn col-sm-3">
                        <button type="button" class="btn btn-primary"> <a href="register"class="link-light">Đăng ký</a><a href="#"class="link-light">/</a><a href="/login"class="link-light">Đăng nhập</a></button>

                       
                    </div>
                </div>
            
                <div class="menu">
                <div class="container">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                <a href="#" class="menucon"></a>
                <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">TRANG CHỦ</a></li>
                    <li class="menucon"><a href="/chi-tiet"class="nav-link">VỀ CHÚNG TÔI</a></li>
                    <li class="menucon"><a href="/gio-hang" class="nav-link">GIỎ HÀNG</a></li>
                    <li class="menucon"><a href="#" class="nav-link">TIN TỨC</a></li>
                    <li class="menucon"><a href="#" class="nav-link">LIÊN HỆ</a></li>
                </ul>
                </header>
            </div>

                </div>
            </div>


        </>
    );
}
export default Header;