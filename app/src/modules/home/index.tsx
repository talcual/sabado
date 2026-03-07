
import { useState } from "react"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Thumb from "../../components/thumb"

const fotos = [
    {nombre: 'foto 1', url:'https://es.gizmodo.com/app/uploads/2025/05/Diseno-sin-titulo-49-10.jpg', texto: 'gdshgfdghfdhfdghfdghfdghfdghfdghfdhgfdghfdghfdghfd'},
    {nombre: 'foto 2', url:'https://es.gizmodo.com/app/uploads/2025/05/Diseno-sin-titulo-49-10.jpg', texto: 'rgsetghfdhdfhggfhdfghfdhfdghfdghfdghfghdfhfdghfdgh'},
    {nombre: 'foto 3', url:'https://es.gizmodo.com/app/uploads/2025/05/Diseno-sin-titulo-49-10.jpg', texto: 'cxbnvvcbnvcbnvcbnvcbnvcbnvcbnvcnvcbnvcbnvcbnbvcnvcb'},
    {nombre: 'foto 4', url:'https://es.gizmodo.com/app/uploads/2025/05/Diseno-sin-titulo-49-10.jpg', texto: 'uyyurtyurutryutryutryutrurtyurtyurtyutryutryutryutr'},
    {nombre: 'foto 5', url:'https://www.elpais.com.co/resizer/v2/HRFVXNCIN5EWRMIY3ZMXCM4AKA.jpg?auth=47eff820c052b491319fac6956fb2a5ddfce5c4966e0063a58fc7b1a3ab6f4f7&smart=true&quality=75&width=1280&height=720', texto: 'klhjklhjklhjklhjlhjklhjklhjklhjklhjklhjklhjkljkljlhj'},
    {nombre: 'foto 6', url:'https://www.elpais.com.co/resizer/v2/HRFVXNCIN5EWRMIY3ZMXCM4AKA.jpg?auth=47eff820c052b491319fac6956fb2a5ddfce5c4966e0063a58fc7b1a3ab6f4f7&smart=true&quality=75&width=1280&height=720', texto: 'qwrqwerqwrwqrqwerqwerqwerqwrqwerqwerqwerqwerqwerwqer'},
]

function Home(){

    const [photos, setPhotos] = useState(fotos)

    return (
        <>
            <Header />

                <main>
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Album example</h1>
                            <p className="lead text-body-secondary">
                            Something short and leading about the collection below—its
                            contents, the creator, etc. Make it short and sweet, but not too
                            short so folks don’t simply skip over it entirely.
                            </p>
                            <p>
                            <a href="#" className="btn btn-primary my-2">Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                            </p>
                        </div>
                        </div>
                    </section>    
                    
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                
                                {
                                    photos.map((photo:any) => (
                                        <Thumb title={photo.nombre} url={photo.url} textx={photo.texto}  key={photo.nombre}/>
                                    ))
                                }

                            </div>                    
                        </div>
                    </div>
                </main>           

            <Footer />
        </>
    )


}

export default Home