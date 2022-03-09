import React, { useEffect, useState, } from 'react'
import NoteContext from './NoteContext'
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, updatePhoneNumber, signOut } from 'firebase/auth'
import { analytics, auth } from '../Config'
import { date } from 'yup'
import { number } from 'yup'
import swal from 'sweetalert';

function NoteState(props) {
  const [name, setName] = useState("subham")
  let allData;
  const [Loder, setLoder] = useState(true)
  const [AllData, setAllData] = useState([])
  const [UserCartItem, setUserCartItem] = useState([])
  const [AllId, setAllId] = useState(["3TST3zWD0SswwWC0FOBR"])
  const [AllUserData, setAllUserData] = useState()
  const [logedIn, setLogedIn] = useState(false)
  const [Subtotal, setSubtotal] = useState(0)
  const [pData, setpData] = useState([])
  const userCollectionRef = collection(analytics, "product");
  const userCollectionRef2 = collection(analytics, "user");


  function ChangeItem(Categorydata) {

    let paData = []
    pData.map((a) => {
      if (a.Category === Categorydata) {
        paData.push(a)
      }
    })
    setAllData(paData)
  }
  async function Register(name, email, mobile, password, changePage) {
    setLoder(false)
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        let LocalData = {
          email : email,
          password : password
      }
      localStorage.setItem("Itemkey-Ecom", JSON.stringify(LocalData))
        const UserData = {
          UaerId: auth.currentUser.uid,
          UserName: name,
          UserMobile: mobile,
          UserAddress: "",
          PinCode: "",
          proFileUrl: "",
          CreateAt: new Date(),
          UserCart: [],
          UserOrder: [],
          USerWistList: [],
          PendingOrder: []
        }
        addDoc(userCollectionRef2, UserData)
          .then(() => {

            GetAllUserData()
              .then(() => changePage())

          })
      })
      // .then(() => )
      .catch((a) =>{

        swal( "invalid credentials", "", "warning")
         setLoder(true)})
  }
  const logOut = () => {
    signOut(auth)
    setLogedIn(false)
    localStorage.removeItem("Itemkey-Ecom");
    swal("logout successful", "", "success")
  

  }
  function GetTotalCart() {
   let totalcost = 0
    UserCartItem.map((d)=>{
      pData.map((a)=>{
        if (a.id == d.id) {
          let num = Number(a.Prize)
          
          totalcost = totalcost + (num * Number(d.stock))
        }
      })
    })
    setSubtotal(totalcost)

  }
  async function Payment(OrderItem) {

    setLoder(false)
    const userDoc = doc(analytics, "user", AllUserData.id);
    await updateDoc(userDoc, { ...AllUserData, PendingOrder: [...AllUserData.PendingOrder, ...OrderItem] })
    // await updateDoc(userDoc, { ...AllUserData, PendingOrder: [ ...OrderItem] })
      .then((a) => {
    
        GetAllUserData()
      })
      .catch((a) => {
      
        setLoder(true)
      })
  }
  async function RemoveCart(aaa) {
    // 3TST3zWD0SswwWC0FOBR
    const Iremove = AllUserData.UserCart.filter((efw) => {
      return efw !== aaa;
    })
    

    const userDoc = doc(analytics, "user", AllUserData.id);
    setLoder(false)
    await updateDoc(userDoc, { ...AllUserData, UserCart: Iremove })
      .then((a) => {
        GetAllUserData()
       
        onchangeitm(aaa)
   

      })
      .catch((a) => console.log(a))

  }
  async function AddToCart(aaa) {
    if (logedIn == true) {
      let pCart = false;
      AllUserData.UserCart.filter(a => {
        if (a == aaa) {
          pCart = true;
        }
      })
      if (pCart === true) {
        swal("The product was already added to your Cart", "", "warning")
      } else {
        setLoder(false)
        const userDoc = doc(analytics, "user", AllUserData.id);
        await updateDoc(userDoc, { ...AllUserData, UserCart: [...AllUserData.UserCart, aaa] })
          .then((a) => {
            setSubtotal(0)
            GetAllUserData()
            .then(()=>  swal("The product was successfully added to your cart", "", "success"))
          })
          .catch((a) => console.log(a))
      }
    }
    else {
      swal("Please Login","","warning")
    }
  }
  async function AddToWistList(aaa) {
    if (logedIn == true) {
      let pCart = false;
      AllUserData.USerWistList.filter(a => {
        if (a == aaa) {
          pCart = true;
        }
      })
      if (pCart === true) {
        // alert("this item already add")
        swal("The product was already added to your wishlist", "", "warning");
      } else {
        setLoder(false)
        const userDoc = doc(analytics, "user", AllUserData.id);
        await updateDoc(userDoc, { ...AllUserData, USerWistList: [...AllUserData.USerWistList, aaa] })
          .then((a) => {
            GetAllUserData()
            .then(r => {
 swal("The product was successfully added to your wishlist", "", "success");
            })
          })
          .catch((a) => console.log(a))
      }
    }
    else {
      swal("Please Login","","warning")
    }
  }
  async function Removewishlist(aaa) {
    // 3TST3zWD0SswwWC0FOBR
    const Iremove = AllUserData.USerWistList.filter((efw) => {
      return efw !== aaa;
    })

    const userDoc = doc(analytics, "user", AllUserData.id);
    setLoder(false)
    await updateDoc(userDoc, { ...AllUserData, USerWistList: Iremove })
      .then((a) => {
        GetAllUserData()
        //  alert("Remove")

      })
      .catch((a) => console.log(a))

  }
  async function GetAllUserData() {
    setLoder(false)
    const data = await getDocs(userCollectionRef2)
    let allNotes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    allNotes.map(a => {
      if (a.UaerId === auth.currentUser.uid) {
        allData = a
      }
    })
    setAllUserData(allData);
    // setLogedIn(true)
    setSubtotal(0)
    setLogedIn(true)
    setLoder(true)
    
  }
  function onchangeitm(idd) {
    let totalArrI =[ ...UserCartItem]
    
  
    totalArrI.map((a,b,c)=> {
      if (a.id == idd) {
        const Iremove = totalArrI.filter((efw) => {
          return efw !== a;
        })
        
        setUserCartItem([...Iremove])
      }
     
    })
    GetTotalCart()
    
  }
  function UpdateTotal(pp, id) {
    let codisan = true;
    AllId.map((a) => {
      if (a == id) {
        codisan = false;

      }
    })
    if (codisan == true) {
      setAllId([...AllId, id])
      let num = Number(pp)
      setSubtotal(a => a + num)
      
    }

  }
  function changeTotal(pp,idd) {
    
    let num = Number(pp)
    // setSubtotal(a => a + num)
    let totalArrI =[ ...UserCartItem]
    
    
    totalArrI.map((a,b,c)=> {
      if (a.id == idd) {
        const Iremove = totalArrI.filter((efw) => {
          return efw !== a;
        })
        
        let item = {
          id: a.id,
        stock: a.stock + 1
        }
        setUserCartItem([...Iremove, item])
      }
     
    })
    GetTotalCart()
    

  }
  function MinTotal(pp,idd) {


    // setSubtotal(a => a - pp)
    let totalArrI =[ ...UserCartItem]
    
   
    totalArrI.map((a,b,c)=> {
      if (a.id == idd) {
        const Iremove = totalArrI.filter((efw) => {
          return efw !== a;
        })
        
        let item = {
          id: a.id,
        stock: a.stock - 1
        }
        setUserCartItem([...Iremove, item])
      }
     
    })
    GetTotalCart()
  }
  async function Login(email, password,Login) {
    setLoder(false)
    await signInWithEmailAndPassword(auth, email, password)
      .then((a) => {
        let LocalData = {
          email : email,
          password : password
      }
      localStorage.setItem("Itemkey-Ecom", JSON.stringify(LocalData))
      Login()
         GetAllUserData() })
      .catch((a) =>{
        swal( "invalid credentials", "", "warning")
       
         setLoder(true)})
  }
  async function AddAddress(ab, abc) {
    setLoder(false)
    const userDoc = doc(analytics, "user", AllUserData.id);
    await updateDoc(userDoc, { ...AllUserData, UserAddress: { ...ab } })
      .then((a) => {
        setSubtotal(0)
        GetAllUserData()
        abc()
      })
      .catch((a) => console.log(a))

  }
  async function getAllData() {
    const data = await getDocs(userCollectionRef)
    setAllData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setpData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  
  }
  function ChakOutPage() {
    // setUserCartItem
    // setUserCartItem([])
    let CartArr =[]
    AllUserData.UserCart.map((a) => {
      let item = {
        id: a,
        stock: 1
      }
      // setUserCartItem([...UserCartItem, item])
      CartArr.push(item)
      // CartArr=[...CartArr,  ]
    })
    
    setUserCartItem(CartArr)
    GetTotalCart()
  }
  function blogin() {
    console.log("subham");
  }
  useEffect(() => {
    getAllData().then(()=>{
       
     let intTodo = JSON.parse(localStorage.getItem("Itemkey-Ecom"));
      Login( intTodo.email , intTodo.password,blogin)
    })
  }, [])
  return (
    <NoteContext.Provider value={{ name, AllData, ChangeItem, pData, Removewishlist,UserCartItem,ChakOutPage, AddAddress, Register, Login, logOut, AllUserData, AddToCart, logedIn, Subtotal, changeTotal, MinTotal, RemoveCart, UpdateTotal, Loder, AddToWistList,Payment }} >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
