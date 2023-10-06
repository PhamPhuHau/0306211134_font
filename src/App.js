import logo from './logo.svg';
import './App.css';
import './bootstrap-5.2.3-dist/css/bootstrap-grid.min.css';
import Header from './components/DOAN/Header';
import Banner from './components/DOAN/Banner';
import HeaderLoaisp from './components/DOAN/HeaderLoaisp';
import Loaisp from './components/DOAN/sp';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import GioiThieu from './components/DOAN/Chitiet';
import Example from './components/DOAN/Hbanner';
import Footer from './components/DOAN/Footer';
import Chitiet from './components/DOAN/Chitiet';
import Trangchinh from './components/DOAN/Trangchinh';
import Giohang from './components/DOAN/GioHang';
import NoiDungGioHang from './components/DOAN/NoiDungGIoHang';
import Dangnhap from './components/DOAN/dangnhap';
import Dangki from './components/DOAN/dangki';
import Thanhtoan from './components/DOAN/Thanhtoan';
import TaiKhoan from './components/DOAN/Taikhoan';
import QuanLyTK from './components/DOAN/QLTK';
import QuanLyDonHang from './components/DOAN/QuanLyDonHang';

// const Member=[
//   {
//     IMGSP: "Hinhxe04.png",
//     NameSP: "SP thu 1",
//     PriceSP: 50000,
//   }];

// for (let i=1;i<8;i++){
//   Member[i]={IMGSP: "Hinhxe04.png",
//   NameSP: "SP thu "+i,
//   PriceSP: 50000,}
// }
function App() {
  // const listMember= Member.map(function(item){
  //   return (
  //     <Loaisp member={item}/>
  // );
  // });
  return (

    <>
      <div className='Body'>      
        <Routes>
          <Route path='/' element={<Trangchinh />}></Route>
          <Route path='/chi-tiet' element={<Chitiet />}></Route>
          <Route path='/gio-hang' element={<Giohang />}></Route>
          <Route path='/QLDH' element={<QuanLyDonHang />}></Route>

          <Route path='/login' element={<Dangnhap />}></Route>
          <Route path='/register' element={<Dangki />}></Route>
          <Route path='/thanh-toan' element={<Thanhtoan />}></Route>
          <Route path='/tai-khoan' element={<TaiKhoan />}></Route>


        </Routes>


      </div>
    </>
  );
}
export default App;