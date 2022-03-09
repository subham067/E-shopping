import React, { useRef, useContext, useState, useEffect } from 'react'
import cartimage1 from '../image/cart-img-1.png';
import cartimage2 from '../image/cart-img-2.png';
import cartimage3 from '../image/cart-img-3.png';
import { useNavigate, NavLink } from 'react-router-dom';
import NoteContext from '../contextApi/NoteContext'


function Header() {
    const Context = useContext(NoteContext)
    const { pData, AddAddress, logedIn, AllUserData, Loder, logOut, GetTotalCart } = Context;
    const [todo, setTodo] = useState(pData)
    const [Allnote, setAllnote] = useState(pData)
    const [AddressData, setAddressData] = useState({ State: "", City: "", Pincode: "", Address: "" })
    let navigate = useNavigate();

    const inputEl = useRef(null);
    const NavManu = useRef(null);
    const AddModal = useRef(null);
    const userD = useRef(null);
    const inputElement = useRef(null);
    function SearchStart(e) {
        setAllnote(pData)
        const SearchItem = pData.filter(f => f.name.toLowerCase().includes(e.toLowerCase()))
        setAllnote(SearchItem)
        if (e == "") {
            setAllnote([])
        }
    }
    function search_btn() {
        if (logedIn) {
            userD.current.classList.remove('active')
        }

        inputEl.current.classList.toggle('active');

        inputElement.current.classList.toggle('active2');
    }
    function InpAddress() {
        if (AddressData.Address == "" || AddressData.City == "" || AddressData.Pincode == "" || AddressData.State == "") {
            alert("All Fild Are Required")
        } else {
            AddAddress(AddressData, ChangeModel)
        }
    }
    function ChangeModel(a) {
        AddModal.current.style.top = "-50rem"
    }

    return (
        <>
            {/* header section starts  */}
            {Loder ? "" : <div className="Body_loader">
                <div className="loader ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="Loader..." />
                    <h1 >Loading...</h1>
                </div>

            </div>}


            <header className="header">
                <a href="#" className="logo">
                    {" "}
                    <i className="fas fa-shopping-basket" /> E-com{" "}
                </a>
                <nav className="navbar " ref={NavManu}>
                    <NavLink to="/">Home</NavLink >
                    <NavLink to="/Product">products</NavLink >
                    {logedIn ? <>
                        <NavLink to="/Wishlist">wishlist</NavLink>
                        <NavLink to="/Order">Order</NavLink></>
                        : ""
                    }
                    {/* <a >review</a> */}
                    <NavLink to="/Review">Review</NavLink>
                    <NavLink to="/Blog">Blogs</NavLink>
                </nav>
                <div className="icons">
                    <div className="fas fa-bars" id="menu-btn"  onClick={()=> NavManu.current.classList.toggle('active')}/>
                    <div className="fas fa-search" onClick={search_btn} />
                    {logedIn ? <>
                        <div className="fas fa-shopping-cart" id="cart-btn" onClick={() => { navigate("/cart") }} />
                        <div className="fas fa-user" id="login-btn" onClick={() => { inputElement.current.classList.remove('active2'); inputEl.current.classList.remove('active'); userD.current.classList.toggle('active'); }} /></>
                        : <NavLink to="/login" className='Login_span'>Login</NavLink>
                    }
                </div>
                <div className="search-form " ref={inputEl}>
                    <input type="search" id="search-box" placeholder="search here..." onChange={(e) => SearchStart(e.target.value)} />
                    <label htmlFor="search-box" className="fas fa-search" />

                </div>
                <div className="search-form2 " ref={inputElement}>
                    {Allnote.slice(0, 5).map((a) => {
                        return (
                            <>
                                <h4 onClick={() => {
                                    search_btn()
                                    navigate("/product/" + a.id)
                                }}
                                >{a.name} </h4><hr />
                            </>
                        )
                    })}
                </div>
                {logedIn ?
                    <div action="" className="login-form" ref={userD}>
                        <div className="UserImg mx-auto"></div>

                        <h3>Hii {AllUserData.UserName}</h3>
                        <h4 className='text-start'>Your Number </h4>
                        <h5 className='box text-start'>{AllUserData.UserMobile}</h5>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item ">
                                <h2 className="accordion-header " id="headingOne">

                                    <button
                                        className="accordion-button "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Your Address
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse "
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    {AllUserData.UserAddress == "" ?
                                        <div className="accordion-body ">
                                            <h1 className='my-2'>No Address Found</h1>
                                            <div className="mx-auto btn mx-auto  px-4 py-1" onClick={() => AddModal.current.style.top = "50rem"}>Add Address</div>
                                        </div> :
                                        <div className="accordion-body text-start">
                                            <h4 className='font-weight' >Address (area and street)</h4>
                                            {AllUserData.UserAddress.Address}
                                            <hr className='hrBox' />
                                            <h4 className='font-weight'>Your Pincode</h4>
                                            {AllUserData.UserAddress.Pincode}
                                            <hr className='hrBox' />

                                            <h4 className='font-weight'>City</h4>
                                            {AllUserData.UserAddress.City}
                                            <hr className='hrBox' />
                                            <h4 className='font-weight'>State</h4>
                                            {AllUserData.UserAddress.State}
                                            <hr className='hrBox' />
                                            <bt className="mx-auto btn mx-auto  px-4 py-1">Change Address</bt>
                                        </div>
                                    }


                                </div>
                            </div>

                        </div>

                        <div className="btn" onClick={() => logOut()}>Log Out </div>
                    </div>
                    : ""
                }

                <div className="Address_modal" ref={AddModal}>
                    <div className="modal-header" >
                        <h5 className="modal-title">Enter Your Address</h5>

                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="exampleInputEmail11" className="form-label">
                            Address (Area And Street)
                        </label>
                        <input
                            type="text"
                            value={AddressData.Address}
                            onChange={e => setAddressData({ ...AddressData, Address: e.target.value })}
                            className="form-control input-1"
                            id="exampleInputEmail11"

                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Your Pincode
                        </label>
                        <input
                            type="number"
                            value={AddressData.Pincode}
                            onChange={e => setAddressData({ ...AddressData, Pincode: e.target.value })}
                            className="form-control input-1"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            value={AddressData.City}
                            onChange={e => setAddressData({ ...AddressData, City: e.target.value })}
                            className="form-control input-1"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Your State
                        </label>
                        <input
                            type="text"
                            value={AddressData.State}
                            onChange={e => setAddressData({ ...AddressData, State: e.target.value })}
                            className="form-control input-1"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div class="modal-footer">
                        <div type="button" class="btn2 " onClick={() => AddModal.current.style.top = "-50rem"}>Close</div>
                        <div type="button" class="btn2 " onClick={InpAddress}>Save changes</div>
                    </div>

                </div>
            </header>

            {/* header section ends */}
        </>
    )
}

export default Header