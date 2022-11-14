import React from 'react';
import style from './Slogin.module.css'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
  
function Studenlogin() { 
    return (
        <div className={style.body}>
            <div className={style.border}>
                <div className={style.center}>
                    <div className={style.img}></div>
                    <div className={style.log}>
                        <div className={style.logs}>
                            <div className={style.Login}>
                                <h3><b>Login</b></h3>
                            </div>
                            <div className={style.icons}>
                                <a href=''><span> <FontAwesomeIcon className='social-media' icon={faFacebook} /></span></a>
                                <a href=''><span> <FontAwesomeIcon className='social-media' icon={faTwitter} /></span></a>
                            </div>
                        </div>

                        <form action='' >
                            <div className={style.user}>
                                <label className='label' for=''>User Name</label>
                                <input type='text' className={style.formcontrol} required="" placeholder='User Name' />
                            </div>
                            <div className={style.user}>
                                <label className='label' for=''>Password</label>
                                <input type='text' className={style.formcontrol} required="" placeholder='Password' />
                            </div>
                            <div className={style.user}>
                                <button type='submit' className={style.formcontrol}>Sign in</button>
                            </div>
                            <div className={style.user} id='user-forgot' >
                                <div className={style.checkBox}>
                                    <label for="">
                                        <input className='checkbox' type="checkbox" />&nbsp;
                                        <b>Remember Me</b>
                                    </label>

                                </div>
                                <div className={style.forgotPwd}>
                                    <a href='' >Forgot Password</a>
                                </div>
                            </div>



                        </form>
                        <p className={style.textcenter}>Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Studenlogin
