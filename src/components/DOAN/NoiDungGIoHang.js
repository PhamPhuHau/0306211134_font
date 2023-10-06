function NoiDungGioHang()
{
    return(
        <>
      

    

        <section class="vh-100" style={{backgroundcolor: '#fdccbc'}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">

        <div class="card mb-4">
          <div class="card-body p-4">

            <div class="row align-items-center">
              <div class="col-md-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                  class="img-fluid" alt="Generic placeholder image"/>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Tên</p>
                  <p class="lead fw-normal mb-0">iPad Air</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Màu</p>
                  <p class="lead fw-normal mb-0"><i class="fas fa-circle me-2" style={{color: '#fdd8d2'}}></i>
                    pink rose</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Số lượng</p>
                  <div class="def-number-input number-input safari_only">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"></button>
                        <input class="quantity fw-bold text-black" min="0" name="quantity" value="1"
                          type="number"/>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"></button>
                      </div>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Giá</p>
                  <p class="lead fw-normal mb-0">$799</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Tổng</p>
                  <p class="lead fw-normal mb-0">$799</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="card mb-5">
          <div class="card-body p-4">

            <div class="float-end">
              <p class="mb-0 me-5 d-flex align-items-center">
                <span class="small text-muted me-2">Tổng đơn hàng:</span> <span
                  class="lead fw-normal">$799</span>
              </p>
            </div>

          </div>
        </div>

        <div class="d-flex justify-content-end">
          <button href='/' type="button" class="btn btn-light btn-lg me-2">Tiếp tục mua hàng</button>
          <button href='/thanh-toan' type="button"  class="btn btn-primary btn-lg">Thanh toán</button>
        </div>

      </div>
    </div>
  </div>
</section>
       

        <div class="Rong">

        </div>

       
        </>
    );
}
export default NoiDungGioHang;