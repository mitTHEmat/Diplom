import React from 'react'

import LoginStore from "./LoginStore";

export const storesContext = React.createContext({
    loginStore: new LoginStore(),
})