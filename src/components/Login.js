import React, { Component } from 'react';

class LogIn extends Component {
    constructor(){
        super();
        this.state= {};
    }
    
    handleSubmit = (event) => {
        const formLogin = document.querySelector('#login');
        // formData incluye los datos del formulario.
        // creamos un nuevo objeto FormData del api de javascript para el navegador
        //  y le pasaremos el formulario en si
        // cogerá todos los valores del input y nos creará un objeto 
        // que podemos usar para enviar los datos.  
        const formData = new FormData(formLogin);
        // evento que escuche el submit, que recogerá una función callback con un evento.
        // le especificamos, que el método usado será POST (por defecto es GET)
        formLogin.addEventListener('submit', event => {
            // le indicamos que el comportamiento del form no sea recargar la página, que es lo que hace por defecto.
            event.preventDefault();
            debugger;
            fetch('/api/signin', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                //localStorage.setItem('token', data.token)
            })
        });
    }
    

    render (){
        return (
            <div id="login">
                <form onSubmit={this.handleSubmit}>
                    <label> Email: </label>
                    <input type="email" name="email"/> <br></br>
                    <label> Password </label>
                    <input type="password" name="password"/><br></br>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default LogIn;