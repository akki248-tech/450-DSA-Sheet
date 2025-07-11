import { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import DSA from './components/index.jsx'
import { Flex } from '@chakra-ui/react'
import { Reacteroids } from './components/NotFound/Reacteroids.jsx'

import Login from './pages/login.jsx';

function App({ fetchData }) {
    const [data, setData] = useState(fetchData)

    useEffect(() => {
        localStorage.setItem('A2Z_Archive', JSON.stringify(data))
    }, [data])

    return (
       
        <Routes>

              {/* Login Route */}
                <Route path="/" element={<Login />} />

            <Route
                path="/dsa"
                element={
                    <DSA
                        data={data}
                        setData={setData}
                        isHomeScreen={true}
                        selectedContentIndex={0}
                    />
                }
            />
            {data.data.content.map((contentData, index) => {
                return (
                    <Route
                        key={index}
                        path={contentData.contentPath}
                        element={
                            <DSA
                                data={data}
                                setData={setData}
                                isHomeScreen={false}
                                selectedContentIndex={index}
                            />
                        }
                    />
                )
            })}
            <Route
                path={'/play'}
                element={
                    <Flex w={'100vw'} h={'100vh'}>
                        <Reacteroids />
                    </Flex>
                }
            />
        </Routes>
      
    )
}

export default App
