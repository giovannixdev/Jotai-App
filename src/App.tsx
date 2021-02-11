import React from 'react'
import {Input} from './components/Input'
import {Stats} from './components/Stats'
import {Tasks, tasksAtom} from './components/Tasks'
import {ThemeProvider, GlobalStyles, Page} from './components/theme'
import {Header, darkModeState} from './components/Header'
//import {useRecoilValue} from 'recoil'
import { useAtom, atom } from 'jotai'


const Home = () => {
    return (
        <Page>
            <Header />
            <Stats />
            <Tasks />
            <Input />
        </Page>
    )
}



const App = () => {
    //const darkMode = useRecoilValue(darkModeState)
    const [darkMode, setDarkMode] = useAtom(darkModeState)

    return (
        <ThemeProvider darkMode={darkMode}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    )
}

export default App
