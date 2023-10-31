import React from 'react'
import NavBarr from '../Components/Nav'
import "../Components/styling.css"

function RegistrationPage() {
return (
    <div className='body'>
    <div>
         <NavBarr/>
         <h3 style={{textAlign:"center"}}>REGISTRATION PAGE</h3>
        <form className='center-content'>
          <table>
                <tr>
                    <td><label className={'label'}>FirstName</label></td>
                    <td><input type='text' placeholder='enter your first name' className={'inp'}></input></td>
                    </tr>
                    <tr>
                    <td><label className={'label'}>LastName</label></td>
                    <td><input type='text' placeholder='enter your Last name'className={'inp'}></input></td>
                    </tr>
                    <tr>
                    <td><label className={'label'}>E-mail</label></td>
                    <td><input type='e-mail' placeholder='enter your mail id' className={'inp'}></input></td>
                    </tr>
                    <tr>
                      <td><label className='label'>Password</label></td>
                      <td><input type='password'placeholder='enter your password'></input></td>
                    </tr>
                    <tr>
                      <td><label className='label'>Confirm Password</label></td>
                      <td><input type='password'placeholder='enter your password'></input></td>
                    </tr>
                    <tr>
                    <td><label className={'label'}>PhoneNumber</label></td>
                    <td><input type='tel' placeholder='enter your Phone Number'className={'inp'}></input></td>
                    </tr>
                    <tr>
                    <td><label className={'label'}>Gender</label></td>
                    <td><input type='radio'id='female'value={'female'} className={'inp'}></input>
                    <label for='female'className={'label'}>Female</label><br></br>
                    <td><input type='radio'id='male'value={'male'}className={'inp'}></input>
                    <label className={'label'}>Male</label><br></br>
                    </td>
                    </td>
                    </tr>
                     </table>
        </form>
       
    </div>
    </div>
  )
}

export default RegistrationPage