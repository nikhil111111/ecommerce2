import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Tribal Goods: where culture meets commerce. Ethical, authentic, and effortless shopping experience. Every purchase feels like a meaningful connection to different cultures, making Tribal Goods more than just an ecommerce site—it's a bridge between communities."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">customer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">I'm blown away by the quality and authenticity of the tribal products available on Tribal Goods. From intricately crafted jewelry to beautifully woven textiles, each piece is a testament to the rich cultural heritage of indigenous communities. What sets Tribal Goods apart is their dedication to fair trade and sustainability. .</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">priya</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">customer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/4814/4814842.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Tribal Goods has revolutionized my shopping experience. Their collection of authentic tribal products is unmatched, and each item tells a story of tradition and artistry. I love knowing that my purchases support artisans and communities worldwide. The website is easy to navigate, and the customer service is exceptional."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">harish</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial