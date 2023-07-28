import Header from "../../component/Header"


function OnlyHeaderLayout(cpn: any) {
              return (
                            <div>
                                          <Header></Header>
                                          {cpn.children}
                            </div>
              )
}
export default OnlyHeaderLayout;
