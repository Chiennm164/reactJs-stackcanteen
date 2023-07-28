import Header from "../../component/Header"
import Footer from "../../component/Footer";

function DefaultLayout(cpn: any) {
              return (
                            <div>
                                          <Header></Header>
                                          {cpn.children}
                                          <Footer></Footer>
                            </div>
              )
}
export default DefaultLayout;
