import React from 'react';

import { InfoCard } from './components/InfoCard'


const infoCards = [
  <InfoCard 
    heading="Lake Ice Map" 
    body="Interactive map for exploring weather and ice on lakes"
    className='bg-primary-dark'
    image={process.env.PUBLIC_URL + "/lake-ice-map.png"}
    imageLink="https://lake-freeze.kevin-mcquate.net/"
    logos={[
      process.env.PUBLIC_URL + "/react-logo.png",
      process.env.PUBLIC_URL + "/tailwindcss-logotype.svg",
      process.env.PUBLIC_URL + "/Google_Maps_Logo.svg"
    ]}    
  />,
  <InfoCard 
    heading="AWS Infrastructure" 
    body="Infrastructure written in Terraform for running personal projects"
    className='bg-primary-light'
    image={process.env.PUBLIC_URL + "/AWS_network_diagram.svg"}
    imageLink="https://github.com/kgmcquate/infra"
    logos={[
      process.env.PUBLIC_URL + "/Amazon_Web_Services_Logo.png",
      process.env.PUBLIC_URL + "/hashicorp-terraform-logo.png",
      process.env.PUBLIC_URL + "/github-actions.png"
    ]}
  />,
  <InfoCard 
    heading="Weather Data ETL"
    body="Loads daily weather using Spark on AWS EMR Serverless"
    className='bg-primary-main'
    image={process.env.PUBLIC_URL + "/weather-etl.png"}
    imageLink='https://github.com/kgmcquate/weather-etl'
    logos={[
      process.env.PUBLIC_URL + "/Apache_Spark_logo.png",
      process.env.PUBLIC_URL + "/Python-Symbol.png",
      process.env.PUBLIC_URL + "/emr.webp",
    ]}
  />,
  <InfoCard 
    heading="Lake Ice API" 
    body="REST API built with FastAPI running on AWS Lambda"
    className='bg-primary-dark'
    image={process.env.PUBLIC_URL + "/api_screenshot.png"}
    imageLink='https://lake-freeze-api.kevin-mcquate.net/docs'
    logos={[process.env.PUBLIC_URL + "/fastapi.png", process.env.PUBLIC_URL + "/aws-lambda.png",]}
  />,
  <InfoCard 
    heading="Satellite Image ETL" 
    body="Loads daily satellite imagery using Spark on AWS EMR Serverless"
    className='bg-primary-light'
    image={process.env.PUBLIC_URL + "/lake.PNG"}
    imageLink='https://github.com/kgmcquate/lake-satellite-image-etl'
    logos={[
      process.env.PUBLIC_URL + "/Apache_Spark_logo.png",
      process.env.PUBLIC_URL + "/Python-Symbol.png",
      process.env.PUBLIC_URL + "/emr.webp",
    ]}
  />,
  <InfoCard 
    heading="Snow Cover ML Model" 
    body="Predicts snow cover on bodies of water using an XGBoost model"
    className='bg-primary-main'
    image={process.env.PUBLIC_URL + "/snow.PNG"}
    imageLink='https://github.com/kgmcquate/ice-thickness-ml-models'
    logos={[process.env.PUBLIC_URL + "/logo-xgboost.png", process.env.PUBLIC_URL + "/Pandas_logo.webp",]}
  />,
]

function App() {
  return (
    <div className='h-full w-full bg-primary-bg font-display text-2xl text-primary-text bg-gradient-to-b from-primary-bg to-primary-darker'>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-4 p-4  " >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <InfoCard 
            heading="Kevin McQuate"
            body="Big Data and Software Engineer"
            className="bg-primary-main text-left"
            image={<img className="h-44 w-44 rounded-full border-2 border-primary-light shadow-2xl" srcSet={process.env.PUBLIC_URL + "/profile.jpg"} alt='profile'/>}
            imageLink='https://www.linkedin.com/in/kevin-mcquate/'
            logos={[
              process.env.PUBLIC_URL + "/github.png",
              process.env.PUBLIC_URL + "/linkedin.png",
              process.env.PUBLIC_URL + "/icons8-resume.svg",
            ]}
            logoLinks={["https://github.com/kgmcquate", "https://www.linkedin.com/in/kevin-mcquate/", process.env.PUBLIC_URL + "/Resume.pdf"]}
          /> 
        </div>

        <div className="grid bg-primary-main p-4 rounded-lg">
          <b>Hi, I'm Kevin!</b>
          {/* <br></br> */}
          <p className='text-lg'>
             I am a "Big Data" Software Engineer, which means I enable the business to understand, analyze, and make decisions using large amounts of data.
          </p>
          
        </div>
        
        <h1 className="text-center">Personal Projects</h1>
        <div className="grid bg-primary-lighter p-4 rounded-lg sm:grid-cols-1 md:grid-cols-2 gap-4 ">
          
          {infoCards}
        </div>
      </div>
    </div>
  )
}

export default App;
