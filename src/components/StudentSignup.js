import React, { useState } from 'react'
import signstyle from './Ssignup.module.css';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Signup = (props) => {

    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        contact_no: "",
        passwd: ""
    })

    const add = (event) => {
        event.preventDefault(); // Don't want to page refresh
        if (state.first_setStatename === "" || state.last_name === "" || state.email === "" || state.contact_no === "" || state.passwd == "") {
            alert("All the fields are mandatory!");
            return;
        }
        props.getValue(state); // to send value child to parent
        setState({ first_name: "", last_name: "", email: "", contact_no: "", passwd: "" }) // after clicking the input will be get empty
    }

    return (
        <div className={signstyle.body}>

            <div className={signstyle.border}>
                <div className={signstyle.center}>
                    <div className={signstyle.img}></div>
                    <div className={signstyle.log}>
                        <div className={signstyle.logs}>
                            <div className={signstyle.Login}>
                                <h3><b>Signup</b></h3>
                            </div>
                            <div className={signstyle.icons}>
                                <a href=''><span>
                                    <FontAwesomeIcon className='social-media' icon={faFacebook} />
                                </span></a>
                                <a href=''><span>
                                    <FontAwesomeIcon className='social-media' icon={faTwitter} />
                                </span></a>
                            </div>
                        </div>

                        <form onSubmit={add}>
                            <div className={signstyle.user}>
                                <label className='label' htmlFor='firstname'>First Name</label>
                                <input id='firstname' type='text' className={signstyle.formcontrol}
                                    required=""
                                    placeholder='First Name'
                                    value={state.first_name}
                                    onChange={(event) => setState({...state, first_name: event.target.value })} />
                            </div>
                            <div className={signstyle.user}>
                                <label className='label' htmlFor='lastname'>Last Name</label>
                                <input id='lastname' type='text' className={signstyle.formcontrol}
                                    required=""
                                    placeholder='Last Name'
                                    value={state.last_name}
                                    onChange={(event) => setState({...state, last_name: event.target.value })} />
                            </div>
                            <div className={signstyle.user}>
                                <label className='label' htmlFor='emailid'>Email-ID</label>
                                <input id='emailid' type='text' className={signstyle.formcontrol}
                                    required=""
                                    placeholder='Email-ID'
                                    value={state.email}
                                    onChange={(event) => setState({...state, email: event.target.value })} />
                            </div>
                            <div className={signstyle.user}>
                                <label className='label' htmlFor='contactno'>Contact No</label>
                                <input id='contactno' type='text' className={signstyle.formcontrol}
                                    required=""
                                    placeholder='Contact Number'
                                    value={state.contact_no}
                                    onChange={(event) => setState({...state, contact_no: event.target.value })} />
                            </div>
                            <div className={signstyle.user}>
                                <label className='label' htmlFor='password'>Password</label>
                                <input id='password' type='text' className={signstyle.formcontrol}
                                    required=""
                                    placeholder='Password'
                                    value={state.passwd}
                                    onChange={(event) => setState({...state, passwd: event.target.value })} />
                            </div>    
                            <div className={signstyle.user}>
                                <button type='submit' className={signstyle.formcontrol}>Sign in</button>
                            </div>  

                            <div className={signstyle.user} id='userforgot'>
                                <div className={signstyle.checkBox}>
                                    <label for="">
                                        <input className='checkbox' type="checkbox" />&nbsp;
                                        <b>Remember Me</b>
                                    </label>

                                </div>
                            </div>

                        </form>
                    </div>


                </div>
            </div>

            

        </div>

    )
}


export default Signup
