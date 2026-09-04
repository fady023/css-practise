import React from 'react'
import { UserConsumer } from "./UserContext"

const CompA = () => {
    return (
        <div>

            <UserConsumer>
                {
                    (el) => <h2>welcome {el}</h2>
                }
            </UserConsumer>
        </div>
    )
}

export default CompA
