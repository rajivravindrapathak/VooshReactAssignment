import React, { useState } from 'react'


const BooknowPage = () => {

    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [cname, setCname] = useState('')
    const [title, setTitle] = useState('')

    const handleFName = (e) => {
        setFname(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleCompanyName = (e) => {
        setCname(e.target.value)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = () => {
        const LocalArray = localStorage.getItem('LocalArray') && localStorage.getItem('LocalArray').length > 0 ? JSON.parse(localStorage.getItem('LocalArray')) : []
        localStorage.setItem('LocalArray', JSON.stringify([...LocalArray, {fname, email, cname, title}])) 
        alert("Regiter successful datastore")
        window.location.reload()
    }

    return (
        <div className='container'>
            <div className='subcontainerf'>
                <img className='FImg'  src='https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp' />
                <img className='headerImg' src='https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp' />   
                <img className='SImg' src='https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp' />
                <img className='arrowImg' src='https://voosh.in/static/media/three_lines.cb3005e94acb8877cb80.webp' />
                <img className='grumbleImg' src='https://voosh.in/static/media/page1_6.2213ad7f35bd24758114.webp' />
                <img className='eatImg' src='https://voosh.in/static/media/page1_4.a2a22e7f5e42a50552ae.webp' />
                <img className='tirImg' src='https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp' />
                <img className='amazonImg' src='https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp' />
                <img className='zomatoImg' src='https://voosh.in/static/media/page1_3.1d108925b5e5156bb2d4.webp' />
                <img className='linearrowImg' src='https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp' />
                <img className='swiggyImg' src='https://voosh.in/static/media/page1_5.f505a37d3e86d1a571da.webp' />

                <a href='#subcontainer'><button className='btn'>Book Demo</button></a>
                <h1 className='head'>consolidate your resturant' insights in one placed. unlock growth</h1>
                <p className='para'>your one step solution to view mission-critical data and insighfrom all your location in one place.</p>
            </div>
                
            <div id='subcontainer'>
                    <div className='fDiv'>
                        <div className='book'>Book A Demo Now</div>
                        <div className='bookdemoDiv'>
                            <label>Name</label>
                            <input type="text" name='name'  placeholder='Ex John Doe' onChange={(e)=> handleFName(e)} value={fname} />
                            <label>Email</label>
                            <input type="email" name='email'  placeholder='Ex mail@website.com' onChange={(e)=> handleEmail(e)} value={email}  />
                            <label>Company Name</label>
                            <input type="text" name='cname'  placeholder='Ex XYZ PVT LTD' onChange={(e)=> handleCompanyName(e)} value={cname} />
                            <label>Your title</label>
                            <input type="text" name='title'  placeholder='Ex Opertational head' onChange={(e)=> handleTitle(e)} value={title}  />
                            <div className='bookdemobtn' onClick={handleSubmit} >Book Demo</div>
                        </div>
                   </div>
            </div>

        </div>
               
           
    )
}

export default BooknowPage
