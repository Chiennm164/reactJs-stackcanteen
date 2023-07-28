
// import { useTranslation } from 'react-i18next';

import { OnlyHeaderLayout } from '../../components/layouts';
import NavBar from './Navbar';
import Carousel from './Carousel';
import ListDish from './ListDish';
function OrderPage() {
              let choseCarousel= ""
              function sendData(params: any) {
                            console.log(params);

                            choseCarousel= params?.value
              }
              return (
                            <OnlyHeaderLayout>
                                          <NavBar choseCarousel={sendData} />
                                          <Carousel dataChoseCarousel={choseCarousel} />
                                          <ListDish />

                            </OnlyHeaderLayout>
              )
}
export default OrderPage;
