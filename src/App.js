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

        <div class="navigation">
			    <ul>
        <li class="list active">
          <b></b>
          <b></b>
          <a href="#" >
            <span class="icon"><ion-icon 
            name="speedometer-outline"></ion-icon></span>
            <span class="title">Dashboard</span>

          </a>
        </li>
  
        <li class="list">
          <a href="#">
            <span class="icon"><ion-icon
            name="bar-chart-outline"></ion-icon></span>
            <span class="title">Expenses</span>

          </a>
        </li>
  
        <li class="list">
          <a href="#">
            <span class="icon"><ion-icon 
            name="wallet-outline"></ion-icon></span>
            <span class="title">Budget</span>

          </a>
        </li>
  
        <li class="list">
          <a href="#">
            <span class="icon"><ion-icon 
            name="people-outline"></ion-icon></span>
            <span class="title">Household Members</span>

          </a>
        </li>
  
        <li class="list">
          <a href="#">
            <span class="icon"><ion-icon 
            name="reader-outline"></ion-icon></span>
            <span class="title">Reports</span>
            
          </a>
        </li>
          </ul>
		    </div>

        <main>
			    <div class="content">
				    <h2>Dashboard</h2>
			    </div>
		    </main>

      </div>

      <div class="toggle">
        <ion-icon name="chevron-forward-outline" class="open"></ion-icon>
        <ion-icon name="chevron-forward-outline" class="close"></ion-icon>
      </div>


    </html>
  );
}

export default App;