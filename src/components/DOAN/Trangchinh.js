import Loaisp from "./sp";
import Header from "./Header";
import Example from "./Hbanner";
import Banner from "./Banner";
import HeaderLoaisp from "./HeaderLoaisp";
import Footer from "./Footer";
import LoaiSanPham from "./LoaiSanPham";
import Giohang from "./GioHang";
import NoiDungGioHang from "./NoiDungGIoHang";
const dsloaisanpham = [
    {
        'ten': 'Loại Sản Phẩm 1',
        'ds_san_pham': [
            {
                Hinh: "Hinhxe04.png",
                Ten: "SP thu 1",
                Gia: 50000,
                
            },
            {
                Hinh: "Hinhxe04.png",
                Ten: "SP thu 2",
                Gia: 50000,
            }
        ]
        
    },
    {
        'ten': 'Loại Sản Phẩm ',
        'ds_san_pham': [
            {
                Hinh: "Hinhxe04.png",
                Ten: "SP thu 1",
                Gia: 50000,
                
            },
            {
                Hinh: "Hinhxe04.png",
                Ten: "SP thu 2",
                Gia: 50000,
            }
        ]
        
    }

];



function Trangchinh() {
    const listloaisanpham = dsloaisanpham.map(function (item) {
        return (
            <LoaiSanPham data={item} />
        );
    });
    return (

        <>
            <div className='Body'>

                <div className="header">
                    <Header />
                </div>
                <div className='Hbanner'>
                    <Example />
                </div>
                <div className='banner'>
                    <Banner />
                </div>
                <div class="bodySP">
                    <HeaderLoaisp />
                    <div class="row">
                        {listloaisanpham}
                    </div>
                </div>
                <div className='footer'>
                    <Footer />
                </div>

            </div>
        </>
    );
}
export default Trangchinh;