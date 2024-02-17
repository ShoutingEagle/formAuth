import './App.css';
import React,{useState} from 'react'

function App() {
  const [data,setData] = useState({
    email : '',
    password : '',
    confirmPassword : '',
    emailText: 'Invalid Email',
    passwordText : 'Password must be atleast 8 characters',
    confirmPasswordText : 'Passwords do not match'
  })


function handleEmail (e) {

    setData(prevData => ({
        ...prevData,
        email : e.target.value
    }))

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    isValidEmail && (setData(prevData => ({
      ...prevData,
      emailClass: 'email',
      emailText : ''
    }))) 
}



function handlePassword (e) {

      setData(prevData => ({
        ...prevData,
        password : e.target.value
      }))

      const isValidPassword = data.password.length>=7;
      isValidPassword && (setData(prevData => ({
        ...prevData,
        passwordClass: 'password',
        passwordText : ''
      }))) 
}


function handleConfirmPassword (e) {
      const {value} = e.target

      setData(prevData => ({
        ...prevData,
        confirmPassword : value,
      }))

      const isValidConfirmPassword = value === data.password;
      console.log(isValidConfirmPassword);

      isValidConfirmPassword && (setData(prevData => ({
        ...prevData,
        confirmPasswordClass: 'confirmPassword',
        confirmPasswordText : ''
      }))) 
}


function handleSubmit(e) {
    if(data.password !== data.confirmPassword){
      alert('Passwords do not match')
      e.preventDefault();
      return;
    }

    alert('Form Submitted');

    setData({
      email : '', 
      password : '',
      confirmPassword : '',
      
    })
}
 
  return (
    <div className="App">
        <form className='form' onSubmit={handleSubmit}>
          <div className='container'>
          <div className='inputs'>
            <label>Email</label>
            <input type="email"  onChange={handleEmail}
             value={data.email}
             required
             className={data.emailClass}
             />
            <span>{data.emailText}</span>
          </div>
          <div className='inputs'>
            <label>Password</label>
            <input type='text' onChange={handlePassword}
             value={data.password}
             required
             className={data.passwordClass}
             />
            <span>{data.passwordText}</span>
          </div>
          <div className='inputs'>
            <label>Confirm Password</label>
            <input type='text' onChange={handleConfirmPassword}
             value={data.confirmPassword}
             required
             className={data.confirmPasswordClass}
             />
            <span>{data.confirmPasswordText}</span>
          </div>
          </div> 
          <div>
            <button>Submit</button>
          </div>
        </form>
    </div>
  );
}

export default App;
