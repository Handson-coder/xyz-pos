import React from "react";

export default function Navbar() {
  const buttonMasuk = () => {
    console.log("masuk");
  };
  return (
    <div className="container-navbar">
      <nav>
        <div className="logo">
          {/* <Link className="router" to="/"> */}
          <h1 className="font-lighter">xyz</h1>
          <h1 className="font-bolder">POS</h1>
          {/* </Link> */}
        </div>
        <div>
          <ul className="logo">
            <li className="list">
              {/* <Link className="router" to="/"> */}
              Fitur
              {/* </Link> */}
            </li>
            <li className="list">
              {/* <Link className="router list" to="/locations"> */}
              Berlangganan
              {/* </Link> */}
            </li>
            {/* {
              localStorage.getItem("access_token") ? 
              <li className="list">
            <Link className="router list" to="/history">
              History
            </Link>
          </li> : ''
          } */}

            {/* {
              localStorage.getItem("access_token") ?  <li className="list" onClick={()=>logOut()} style={{cursor: 'pointer'}}>
              <i class="fas fa-sign-out-alt"></i>
              </li> : ''
          } */}

            <li className="list">
              <button onClick={buttonMasuk} className="button-sign-in">
                Masuk
              </button>
              {/* <Link className="router button grow" to="/register"> */}
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
