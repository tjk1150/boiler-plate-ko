import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
// import { response } from 'express'

const LoginPage = (props) => {
    
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 없으면 이벤트가 발생할때마다 페이지가 리프레시됨.
        // console.log('Email',Email);
        // console.log('Password',Password);

        // 서버에다가 보낼때는 axios를 사용해서 보냄
        let body = {
            email: Email,
            password: Password
        }

        //  dispatch를 이용해서 action을 취하고 엑션다음에 리듀서로 가는 순서로 진행할것

        dispatch(loginUser(body))
            .then(response => {
                // console.log(response);
                // console.log(response.payload);
                // console.log(response.payload.loginSuccess);
                if (response.payload.loginSuccess) {
                    props.history.push('/') // 페이지를 이동시킬때 이렇게 사용
                } else {
                    alert('error')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>PassWord</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage);
