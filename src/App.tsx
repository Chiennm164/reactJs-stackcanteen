import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoute } from "./routes";
import i18n from "i18next";
import { LANGUAGEVALUE } from './core/constants';
import { useTranslation } from 'react-i18next';
function App() {

  const { t } = useTranslation();
  const changeLanguage = (e: any) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return (
    <div className="App">
      <select onChange={changeLanguage}>
        <option value={LANGUAGEVALUE.ENG}>{t("langeng")}</option>
        <option value={LANGUAGEVALUE.VN}>{t("langvn")}</option>
      </select>

      <Router>
        <Routes>
          {
            publicRoute.map((p, i) => {
              const Page = p.component
              return <Route key={i} path={p.path} element={<Page />} />
            })
          }
        </Routes>
      </Router>

    </div>
  );
}

export default App;
