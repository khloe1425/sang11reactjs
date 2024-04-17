import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import HomeComponent from './BTComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './DataBinding/HandleEvent';
import DemoState from './DemoState/DemoState';
import DemoFontSize from './DemoState/DemoFontSize';
import DemoCar from './DemoState/DemoCar';
import DemoProduct from './DemoSanPham/DemoProduct';


//component chính
// các object thẻ build in (có sẵn): div, p, a, li...
// Các UI , thẻ dev tự tạo: components => viết hoa chữ cái đầu của tên (pascal case)

function App() {
  // gọi component
  return (
    <div className='container'>
      {/* <div className="row">
        <DataBinding />
        <HandleEvent />
      </div> */}
      {/* <DemoState/> */}
      {/* <DemoFontSize/> */}
      {/* <DemoCar/> */}
      <DemoProduct/>
      
    </div>
  );
}

export default App;

// những nội dung HTML trong reactjs => đối tượng jsx
// <div class="container" ></div>
// document.getElementById("id").className = "house red"
// <div></div>, <img/>, <br />