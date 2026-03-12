import React from 'react'
import PropTypes from 'prop-types'
import style from './Auth.module.scss'
import { useForm } from 'react-hook-form'

function LoginPage(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm()
    return (
        <div className={style.wrapper}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <label htmlFor="login">Login</label>
                <input 
                    type="text" 
                    id='login'
                    {...register("login", {
                        required: true,
                        minLength: {
                            value: 3,
                            message: "Login must be at least 3 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Login must be at most 20 characters"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: "Login must be only letters and numbers"
                        }
                    })} 
                />
                <span>{errors.login?.message}</span>
                <br />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id='password'
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 6,
                            message: "Password must be at least 3 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Password must be at most 20 characters"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: "Password must be only letters and numbers"
                        }
                    })}  
                />
                <span>{errors.password?.message}</span>
                <br />
                <button className={style.button}>Login</button>
            </form>
        </div>
    )
}

LoginPage.propTypes = {}

export default LoginPage
