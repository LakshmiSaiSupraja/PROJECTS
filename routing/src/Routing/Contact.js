import React from 'react'
import NavBarr from '../Components/Nav'

function Contact() {
  return (
    <div>
      <NavBarr/>
        <form className='cont'>
          <table className='cvb'>
          <tr>
                    <td><label className={'label'}>Name</label></td>
                    <td><input type='text' placeholder='enter your name'className={'inp'}></input></td>
                    </tr>
                    <tr>
                    <td><label className={'label'}>E-mail</label></td>
                    <td><input type='e-mail' placeholder='enter your mail id' className={'inp'}></input></td>
                    </tr>
                    </table>
                    <textarea cols={70} rows={10} placeholder='enter ur questions or any suggestions or queries' className='jkl'>Message</textarea>
        </form>
      </div>
      
  )
}

export default Contact