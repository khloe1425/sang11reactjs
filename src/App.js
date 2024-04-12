import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import HomeComponent from './BTComponent/HomeComponent';


//component chính
// các object thẻ build in (có sẵn): div, p, a, li...
// Các UI , thẻ dev tự tạo: components => viết hoa chữ cái đầu của tên (pascal case)

function App() {
  // gọi component
  return (
    <div className='container homeStyle'>
      {/* ctrl+ /: ghi chú */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent/> */}
      {/* .row: emmet react giúp tạo div có class row */}
      {/* crush relationship management */}
      {/* .col-3*4 */}
      {/* <div className="row">
       
          <ClassComponent />
          <ClassComponent />
          <ClassComponent />
          <ClassComponent />
      </div> */}
      <HomeComponent/>
      
    </div>
  );
}

export default App;

// những nội dung HTML trong reactjs => đối tượng jsx
// <div class="container" ></div>
// document.getElementById("id").className = "house red"
// <div></div>, <img/>, <br />