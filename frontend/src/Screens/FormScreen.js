import React from 'react';
import data from '../data.js';
import {Link} from 'react-router-dom';

function FormScreen(props){
  console.log(props.match.params.id);
  const product = data.products.find(x => x._id === props.match.params.id);
  window.onload = function(){
  const form = document.getElementById('form');
  const username = document.getElementById('name');
  const email = document.getElementById('email');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    checkInputs();
  });

  function checkInputs(){
    //get the value from the input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    
    if(usernameValue === ''){
      //show error message
      //add error class
      setErrorFor(username, 'Tên không được để trống');
    } else{
      //add success class
      setSuccessFor(username);
    }
    if(emailValue === ''){
      setErrorFor(email, 'Email không được để trống');
    } else if(!isEmail(emailValue)){
      setErrorFor(email, 'Email không hợp lệ');
    } else{
      setSuccessFor(email);
    }
    
  }
  function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    
    //add mesage
    small.innerText = message;
    
    //add Error class
    formControl.className = 'form-control error';
  }
  function setSuccessFor(input){
    const formControl = input.parentElement; //.form-control
    
    //add Success class
    formControl.className = 'form-control success';
  }
  function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
}
  return <div className="form-container">
          <form id="form" className="form">
            <div className="header">
                <h2>Gửi yêu cầu báo giá</h2>
            </div>
            
            <div className="form-control">
              <label>Tên</label>
              <input type="text" placeholder="Nguyễn Văn A" id="name" />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            
            <div className="form-control">
              <label>Email</label>
              <input type="email" placeholder="nguyenvana@gmail.com" id="email" />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label>Số điện thoại</label>
              <input type="number" placeholder="090xxx" />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            
            <div className="form-control">
              <label>Địa chỉ</label>
              <input type="address" placeholder="..." />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
            <button>Xác nhận</button>
          </form>
        </div>
  
}

export default FormScreen;