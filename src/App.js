import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>P-wise</title>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
        <link rel="stylesheet" href="style.css"/>
      </head>
      <div>
        <header>
      		<div className="topbar">
            <nav>
              <div className="logo">
                <a href="#"><img src="pwise-green-logo.png" alt="logo"/></a>
              </div>
              <ul>
                <a href="#" className="notification"><i className='bx bx-bell'></i><span className="badge"></span></a>

                <div className="dropdown">
                  <button className="dropbtn"><i className='bx bx-cog' ></i>
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Settings and Privacy</a>
                    <a href="#">Switch Account</a>
                    <a href="#">Log out</a>
                  </div>
                </div>
              </ul>
            </nav>
      		</div>
      	</header>

        <div className="wrapper">
      		<div className="sidebar">
      			<ul>
              <li>
                <a href="#" id="active">
                  <i className="bx bx-tachometer"></i>
                  <div>Dashboard</div>
                </a>
              </li>
        
              <li>
                <a href="#">
                  <i className="bx bx-right-top-arrow-circle"></i>
                    <div>Expenses</div>
                </a>
              </li>
        
              <li>
                <a href="#">
                  <i className="bx bx-wallet"></i>
                    <div>Budget</div>
                </a>
              </li>
        
              <li>
                <a href="#">
                  <i className="bx bx-user"></i>
                    <div>Household Members</div>
                </a>
              </li>
        
              <li>
                <a href="#">
                  <i className="bx bx-file"></i>
                    <div>Reports</div>
                </a>
              </li>
        
              </ul>
      		</div>

          <main>
      			<div className="content">
      				<h2>Dashboard</h2>
      			</div>
      		</main>

        </div>

        <script src="#"></script>
      </div>

    </html>
  );
}

export default App;
