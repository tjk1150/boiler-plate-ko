import Axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

// eslint-disable-next-line import/no-anonymous-default-export
const Auth = (SpecificComponent, option, adminRoute = null) => {

    // null     => 아무나 출입이 가능한 페이지를 가려고 할 때
    // true     => 로그인한 유저만 출입이 가능한 페이지를 가려고 할 때
    // false    => 로그인한 유저는 출입 불가능한 페이지를 가려고 할 때

    function AuthenticationCheck (props) {

        const dispatch = useDispatch();

        useEffect(() => {
            
            dispatch(auth())
                .then(response => {
                    console.log(response);
                    // 로그인 하지 않은 상태
                    if(!response.payload.isAuth){ //로그인 하지 않은 상태의 사람이
                        if(option) {                // 로그인한 유저만 출입이 가능한 페이지를 가려고 할 때
                            props.history.push('/login') // 로그인 페이지로 이동시킨다.
                        }
                    } else {
                        
                        // 로그인 한 상태                              // 로그인 한 상태의 사람이
                        if(adminRoute && !response.payload.isAdmin) {   // 관리자가 아니고 관리자 유저만 출입 가능한 페이지에 가려고 할 때
                            props.history.push('/')                             // 첫페이지로 이동시킨다.
                        } else {                                    // 로그인 한 상태의 사람이
                            if(option === false){                       // 로그인한 유저는 출입 불가능한 페이지를 가려고 할 때
                                props.history.push('/')                     // 첫페이지로 이동시킨다.
                            }
                        }

                    }



                })

        }, [])

        return (
            <SpecificComponent />
        )
    }


    return AuthenticationCheck
}
export default Auth;