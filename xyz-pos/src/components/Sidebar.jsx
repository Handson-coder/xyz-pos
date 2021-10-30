import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAllCustomers } from "../store/actions/index";

import "./sidebar.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  const customers = useSelector((state) => state.customers);
  const customerOne = useSelector((state) => state.customerOne);
  const customerTwo = useSelector((state) => state.customerTwo);
  const customerThree = useSelector((state) => state.customerThree);
  const customerFour = useSelector((state) => state.customerFour);
  const customerFive = useSelector((state) => state.customerFive);

  const history = useHistory();
  const [openedSideNav, setOpenedSideNav] = useState(false);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "20%";
    setOpenedSideNav(true);
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    setOpenedSideNav(false);
  };

  const signOut = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div id="sidebar">
      <div id="mySidenav" className="sidenav">
        <div className="flex-sidebar">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76.771"
              height="76.771"
              viewBox="0 0 70.771 70.771"
            >
              <path d="M0,0H70.771V70.771H0Z" fill="none" />
              <path
                d="M31.488,2A29.488,29.488,0,1,0,60.976,31.488,29.5,29.5,0,0,0,31.488,2Zm0,8.846a8.846,8.846,0,1,1-8.846,8.846A8.834,8.834,0,0,1,31.488,10.846Zm0,41.873a21.233,21.233,0,0,1-17.693-9.5c.088-5.868,11.8-9.082,17.693-9.082,5.868,0,17.6,3.214,17.693,9.082A21.233,21.233,0,0,1,31.488,52.719Z"
                transform="translate(3.898 3.898)"
                fill="#eb414f"
              />
            </svg>
          </div>
          <div className="user">
            <div className="nama">
              <b>Test</b>
            </div>
            <div className="email">test@mail.com</div>
            <div onClick={signOut} className="keluar">
              Keluar
            </div>
          </div>
        </div>
        <div className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <div>
          <div className="flex-sidebar-menu-dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.895"
              height="45.895"
              viewBox="0 0 33.895 33.895"
            >
              <path d="M0,0H33.895V33.895H0Z" fill="none" />
              <path
                d="M13.3,27.009V18.535h5.649v8.474h7.061V15.71h4.237L16.123,3,2,15.71H6.237v11.3Z"
                transform="translate(0.825 1.237)"
              />
            </svg>
            <div className="menu">
              <p>Dashboard</p>
            </div>
            <div className="next-dashboard">
              <p>
                <b>{">"}</b>
              </p>
            </div>
          </div>
          <div className="flex-sidebar-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.895"
              height="45.895"
              viewBox="0 0 28 28"
            >
              <path d="M0,0H28V28H0Z" fill="none" />
              <path
                d="M12.917,2,6.5,12.5H19.333Z"
                transform="translate(1.083 0.333)"
              />
              <circle cx="5.5" cy="5.5" r="5.5" transform="translate(15 15)" />
              <path
                d="M3,13.5h9.333v9.333H3Z"
                transform="translate(0.5 2.25)"
              />
            </svg>
            <div className="menu">
              <p>Produk</p>
            </div>
            <div className="next-produk">
              <p>
                <b>{">"}</b>
              </p>
            </div>
          </div>
          <div className="flex-sidebar-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.895"
              height="45.895"
              viewBox="0 0 28 28"
            >
              <path d="M0,0H28V28H0Z" fill="none" />
              <path
                d="M15.667,2H6.333A2.33,2.33,0,0,0,4.012,4.333L4,23a2.33,2.33,0,0,0,2.322,2.333H20.333A2.34,2.34,0,0,0,22.667,23V9ZM18,20.667H8.667V18.333H18ZM18,16H8.667V13.667H18Zm-3.5-5.833V3.75l6.417,6.417Z"
                transform="translate(0.667 0.333)"
              />
            </svg>
            <div className="menu">
              <p>Laporan</p>
            </div>
            <div className="next-laporan">
              <p>
                <b>{">"}</b>
              </p>
            </div>
          </div>
          <div className="flex-sidebar-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45.895"
              height="45.895"
              viewBox="0 0 28 28"
            >
              <path d="M0,0H28V28H0Z" fill="none" />
              <path
                d="M26.324,21.983,15.707,11.367a7.488,7.488,0,0,0-1.75-8.05A7.712,7.712,0,0,0,5.324,1.8l5.017,5.017-3.5,3.5L1.707,5.3a7.519,7.519,0,0,0,1.517,8.633,7.488,7.488,0,0,0,8.05,1.75L21.891,26.3a1.128,1.128,0,0,0,1.633,0l2.683-2.683a1.051,1.051,0,0,0,.117-1.633Z"
                transform="translate(0.159 0.183)"
              />
            </svg>
            <div className="menu">
              <p>Pengaturan</p>
            </div>
            <div className="next-pengaturan">
              <p>
                <b>{">"}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Dashboard */}
      <div
        id="dashboard"
        className={openedSideNav ? "dashboard-small" : "dashboard-big"}
      >
        <div className="dashboard-first">Dashboard</div>
        <div className="dashboard-second">Halo, Test!</div>
        <div className="flex">
          <div className="box">
            <div className="lighter">Masa Berlaku Langganan</div>
            <div>11 Juni 2040</div>
          </div>
          <div className="box">
            <div className="lighter">Total Produk</div>
            <div>
              {customerOne?.quantity
                ? customerOne.quantity +
                  customerTwo.quantity +
                  customerThree.quantity +
                  customerFour.quantity +
                  customerFive.quantity
                : 0}
            </div>
          </div>
          <div className="box">
            <div className="lighter">Produk Terjual</div>
            <div>
              {customerOne?.quantity
                ? customerOne.quantity +
                  customerTwo.quantity +
                  customerThree.quantity +
                  customerFour.quantity +
                  customerFive.quantity
                : 0}
            </div>
          </div>
          <div className="box">
            <div className="lighter">Total Penghasilan Hari ini</div>
            <div className="flex">
              <p className="font-kecil">Rp</p>
              <p>
                {customerOne?.quantity
                  ? (
                      customerOne.quantity * customerOne.item_price +
                      customerTwo.quantity * customerTwo.item_price +
                      customerThree.quantity * customerThree.item_price +
                      customerFour.quantity * customerFour.item_price +
                      customerFive.quantity * customerFive.item_price
                    )
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  : 0}
              </p>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="table">
          <div className="first-table">
            <b>Penjualan hari ini</b>
          </div>
          <div>{new Date().toDateString()}</div>
          <table>
            <thead>
              <tr>
                <th className="align-center">Customer</th>
                <th className="align-center">Barang</th>
                <th className="align-center">Harga Barang</th>
                <th className="align-center">Qty</th>
                <th className="align-center">Total</th>
                <th className="align-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers?.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="align-center">{customer.name}</td>
                    <td className="align-center">{customer.item}</td>
                    <td className="align-center">
                      Rp{" "}
                      {customer.item_price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </td>
                    <td className="align-center">{customer.quantity}</td>
                    <td className="align-center">
                      Rp{" "}
                      {(+customer.quantity * +customer.item_price)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </td>
                    <td>
                      <button className="button-table">Lihat Detail</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {openedSideNav ? (
        <div></div>
      ) : (
        <div className="cursor" onClick={openNav}>
          <b>Menu</b>{" "}
        </div>
      )}
    </div>
  );
}
