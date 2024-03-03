import { useState } from "react"


export default function Login() {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    return (
        <main>
            <div>
                <p>Hello there</p>
                <p>Username</p>
                <input name="Username"/>
                <p>Password</p>
                <input name="Password"/>

            </div>
            
        </main>
    )
}