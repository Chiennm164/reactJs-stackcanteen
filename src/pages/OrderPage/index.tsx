import { useTranslation } from 'react-i18next';

function OrderPage() {
              const { t } = useTranslation();
              return (
                            <div>
                                          <h1> OrderPage</h1>
                                          <h1> {t("title")}</h1>


                            </div>
              )
}
export default OrderPage
