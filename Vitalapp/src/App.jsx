
import Layout from './component/Layout';
import Dashboard from '../../doctor/Dashboard';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Dashboard/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
