import React,{useState, useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/App.css';
import firebase from 'firebase';
import Product from '../components/product';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {db,auth} from "./firebase.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './cart';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function App() {

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      backgroundColor: "black",
      display: 'flex',
      flexDirection: 'row',
    },
  }));

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState('');
  const[product, setProducts] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
         <a className="home">Signup</a>
         <a className="about">login</a>
         <a className="productbtn">Products</a>
         <a className="cart" href="./checkout">cart</a>
    </div>
  );

  useEffect(() =>{

    db.collection('Product').onSnapshot(snapshot => {
      setProducts(snapshot.docs.map( doc => ({
       id: doc.id,
       product: doc.data()})));
    }) },[])

  return (
<Router>
  <div className="App">
      <div className="header">
         <img className="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
         <SearchIcon className="searchicon"></SearchIcon>
         <input
         className="search"
         placeholder="Search"
         typeof="text"></input>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         {body}
      </Modal>
         <button className="menu_button" onClick={()=> handleOpen()}><MoreVertIcon className="menuicon"/></button>
      </div>
    <Switch>
      <Route path="/checkout">
        <Cart/>
      </Route>
      <Route path="/">
      <img className="banner" src="https://res.cloudinary.com/practicaldev/image/fetch/s--BuxgnUTN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://i.postimg.cc/hjgkMVHT/black-and-white-books-connection-251225.jpg"/>
        <h1 className="centered">WELCOME TO MY AMAZON-CLONE</h1>

      <div className="h_products_r1">
      {
          product.map(({id, product}) => (

            <Product key={id} title={product.title} price={product.price} rating={product.rating} image= {product.image}/>
          ))
        }
      </div>

      <div className="h_products_r2">
        <Product
        title="Zebronics ZEB-KM2100 Multimedia USB Keyboard Comes with 114 Keys."
        price="10"
        rating="⭐⭐⭐⭐"
        image="https://images-na.ssl-images-amazon.com/images/I/81shebPwe0L._SL1500_.jpg"/>
        <Product
        title="XP Pen Star03 V2 Graphics Drawing Tablet Pen Tablet."
        price="80"
        rating="⭐⭐⭐⭐⭐"
        image="https://images-na.ssl-images-amazon.com/images/I/51yUx-wAO5L._SL1500_.jpg"/>
      </div>

      <div className="h_products_r3">
          <Product
          title="Mi TV 50 Inches 4K Ultra HD Android LED TV."
          price="570"
          rating="⭐⭐⭐⭐⭐"
          image="https://images-na.ssl-images-amazon.com/images/I/71el-PAu1IL._SL1500_.jpg"/>
      </div>
    </Route>
    </Switch>
      
  </div>
</Router>
  );
}

export default App;