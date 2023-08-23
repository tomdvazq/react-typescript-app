import { useState } from "react"

interface User {
    uid: string,
    name: string
}

const Usuario = () => {

    const [user, setUser] = useState<User>({
        uid: 'ERC20',
        name: 'Ethereum'
    });

    const login = ():void => {
        setUser({
            uid: 'AKWK23',
            name: 'Tomás Vazquez'
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>

            <button
            onClick={login}
            className="btn btn-outline-primary">
            Login
            </button>

            {
                (!user)
                ? <span>No hay usuario</span>
                : <pre className="text-white mt-5"> {JSON.stringify(user)} </pre>
            }

        </div>
    )
}

export default Usuario