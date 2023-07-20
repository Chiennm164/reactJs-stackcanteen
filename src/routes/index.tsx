import OrderPage from "../pages/OrderPage"
import MyOrderPage from "../pages/MyOrderPage"
import ProfilePage from "../pages/ProfilePage"
import SupportPage from "../pages/SupportPage"
import FeedBackPage from "../pages/FeedBackPage"
import NotFound from "../pages/NotFound"
const publicRoute: any[] = [
              {
                            path: '/',
                            component: OrderPage
              },
              {
                            path: '/order',
                            component: OrderPage
              },
              {
                            path: '/my-order',
                            component: MyOrderPage
              },
              {
                            path: '/profile',
                            component: ProfilePage
              },
              {
                            path: '/support',
                            component: SupportPage
              },
              {
                            path: '/feedback',
                            component: FeedBackPage
              },
              {
                            path: '*',
                            component: NotFound
              },
]
const privateRoute: any[] = []


export { publicRoute, privateRoute }
