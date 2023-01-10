import React from 'react'


const BooknowPage = () => {

    return (
        <div className='container'>
            <div>
                <img className='FImg'  src='https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp' />
                <img className='headerImg' src='https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp' />   
                <img className='SImg' src='https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp' />
                {/* <img className='amazonImg' src='https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp' /> */}
                <a href='#subcontainer'><button className='btn'>Book Demo</button></a>
            </div>
                
            <div id='subcontainer'>
                    <div className='fDiv'>
                        <div className='book'>Book A Demo Now</div>
                        <div className='bookdemoDiv'>
                            <label>Name</label>
                            <input type="text" name='name'  placeholder='Ex John Doe'  />
                            <label>Email</label>
                            <input type="email" name='email'  placeholder='Ex mail@website.com'  />
                            <label>Company Name</label>
                            <input type="text" name='cname'  placeholder='Ex XYZ PVT LTD'  />
                            <label>Your title</label>
                            <input type="text" name='title'  placeholder='Ex Opertational head'  />
                            <div className='bookdemobtn' >Book Demo</div>
                        </div>
                   </div>
            </div>

        </div>
               
           
    )
}

export default BooknowPage
