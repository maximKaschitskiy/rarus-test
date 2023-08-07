import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "./redux/store.ts"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./styles/theme.ts"

export const Providers = ({ children }: { children: ReactNode }) => {

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Provider>
    )
}