import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['One Punch'])
 
    return (
        <>
        <h2>GIFs App</h2>
        <AddCategory setCategorias = { setCategorias }/>
        <hr />
        <ol>
            {
                categorias.map( (categoria, idx ) => {
                return <GifGrid 
                            key={idx} 
                            category={ categoria }>
                        </GifGrid>
                })
            }
        </ol>
        </>
    )
}

export default GifExpertApp;
// A2141