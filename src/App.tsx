import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoute } from "./routes";
function App() {
  return (
    <div className="App">
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
