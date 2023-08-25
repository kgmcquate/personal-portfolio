import React from 'react';

export function InfoCard(
    {
      heading,
      body,
      className,
      image,
      link,
      imageLink,
      logos = [],
      logoLinks = []
    }:
    { 
      heading: string,
      body: string | React.ReactNode,
      className: string,
      image: string | React.ReactNode,
      link?: string,
      imageLink?: string,
      logos?: string[],
      logoLinks?: string[]
    }
    ) {
    return (
      // p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4
      <a href={link}  target='_blank' rel='noreferrer'>
        <div className={
          className + 
          " h-54 overflow-clip grid grid-cols-2 p-2 gap-2 rounded-lg  md:brightness-100 lg:brightness-90 transition  duration-100 ease-linear hover:brightness-100 hover:drop-shadow-2xl"
        }>
            <div className='place-self-center '>
              <a href={imageLink}  target='_blank' rel='noreferrer'>
                    {
                    typeof image === 'string' ? 
                        <img 
                            srcSet={image} 
                            className="rounded-lg h-44 w-44"
                            alt={heading}
                        /> 
                        : image
                    }
                </a>
            </div>
            <div className="grid grid-cols-1 ">
                <div className="break-words ">
                    {heading}
                    <hr />
                </div>
                

                <div className="text-base break-words ">
                  {body}
                </div>
                
                <div className='grid grid-cols-3 items-center gap-x-4'>
                  {logos.map((logo, i) => {
                    return <a href={logoLinks[i]} target='_blank' rel='noreferrer'>
                            <img srcSet={logo} className='min-h-16 max-h-20' alt="logo"/>
                          </a> 
                  })}
                </div>
            </div>
          
        </div>
      </a>
    )
  }