import Header from "./Header";
import NoidungChitiet from "./NoidungChitiet";
import Footer from "./Footer";

const member = [
    {
        Hinhsp: "Hinhxe04.png",
        Tensp: "SP thu 1",
        Giasp: 50000,
    }];

for (let i = 1; i < 8; i++) {
    member[i] = {
        Hinhsp: "Hinhxe04.png",
        Tensp: "SP thu " + i,
        Giasp: 50000,
    }
}
function Chitiet() {
    return (
        <>
            <div className="Trangchitiet">
                <Header />
                <NoidungChitiet />
                <Footer />
                
            </div>

        </>
    );
}
export default Chitiet;