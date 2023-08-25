import React from 'react';

import { InfoCard } from './components/InfoCard'

// import { pdfjs } from 'react-pdf';

// import { Document, Page } from 'react-pdf'
// import 'react-pdf/dist/Page/TextLayer.css';
// import 'react-pdf/dist/Page/AnnotationLayer.css';

import './App.css'

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();



const infoCards = [
  <InfoCard
    heading="Lake Ice Map"
    body="Interactive map for exploring weather and ice on lakes"
    className='bg-primary-dark'
    image={process.env.PUBLIC_URL + "/lake-ice-map.png"}
    link="https://lake-freeze.kevin-mcquate.net/"
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
    link="https://github.com/kgmcquate/infra"
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
    link='https://github.com/kgmcquate/weather-etl'
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
    image={process.env.PUBLIC_URL + "/fastapi_screenshot.png"}
    link='https://lake-freeze-api.kevin-mcquate.net/docs'
    logos={[
      process.env.PUBLIC_URL + "/fastapi.png",
      process.env.PUBLIC_URL + "/aws-lambda.png",
    ]}
  />,
  <InfoCard
    heading="Satellite Image ETL"
    body="Loads daily satellite imagery using Spark on AWS EMR Serverless"
    className='bg-primary-light'
    image={process.env.PUBLIC_URL + "/lake.PNG"}
    link='https://github.com/kgmcquate/lake-satellite-image-etl'
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
    link='https://github.com/kgmcquate/ice-thickness-ml-models'
    logos={[
      process.env.PUBLIC_URL + "/logo-xgboost.png",
      process.env.PUBLIC_URL + "/Pandas_logo.webp",
    ]}
  />,
  <InfoCard
    heading="Portfolio Website"
    body="Written with React and Tailwind.css and hosted on AWS CloudFront"
    className='bg-primary-dark'
    image={process.env.PUBLIC_URL + "/portfolio_screenshot.png"}
    link='https://home.kevin-mcquate.net/'
    logos={[
      process.env.PUBLIC_URL + "/react-logo.png",
      process.env.PUBLIC_URL + "/tailwindcss-logotype.svg",
    ]}
  />,
  <InfoCard
    heading="Solar Plant ML Project"
    body="Jupyter Notebook of my analysis of solar plant data. Completed as part of an EdX course."
    className='bg-primary-light'
    image={process.env.PUBLIC_URL + "/solar-plant.png"}
    link={process.env.PUBLIC_URL + "/solar-panel-data.html"}
    logos={[
      process.env.PUBLIC_URL + "/Pandas_logo.webp",
      process.env.PUBLIC_URL + "/sklearn.png",
    ]}
  />
]


function App() {
  return (
    <div className='font-display text-2xl text-primary-text '>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-4 p-4  " >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <InfoCard
            heading="Kevin McQuate"
            body={<ul ><li style={{ marginBottom: "10px" }}>Big Data and Software Engineer</li><li>kgmcquate@gmail.com</li></ul>}
            className="bg-primary-main text-left"
            image={<img className="h-44 w-44 rounded-full border-2 border-primary-light shadow-2xl" srcSet={process.env.PUBLIC_URL + "/profile.jpg"} alt='profile' />}
            imageLink='https://www.linkedin.com/in/kevin-mcquate/'
            logos={[
              process.env.PUBLIC_URL + "/github.png",
              process.env.PUBLIC_URL + "/linkedin.png",
              process.env.PUBLIC_URL + "/icons8-resume.svg",
            ]}
            logoLinks={["https://github.com/kgmcquate", "https://www.linkedin.com/in/kevin-mcquate/", process.env.PUBLIC_URL + "/Resume.pdf"]}
          />
        </div>

        <div className="grid bg-primary-main p-8 rounded-lg">
          <b>Hi, I'm Kevin!</b>
          {/* <br></br> */}
          <p className='text-lg'>
            I am a "Big Data" Software Engineer, which means I enable businesses to understand, analyze, and make decisions using large amounts of data.
          </p>
        </div>



        {/* <h1 className="text-center">Personal Projects</h1> */}
        <div className=" bg-primary-light p-4 rounded-lg ">
          <h1 className="text-center">Personal Projects</h1>

          <div className="grid colored-list bg-primary-light p-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {infoCards}
          </div>
        </div>





        <div className="bg-primary-dark p-4 rounded-lg content-center">
          <h1 className="text-center  mb-4">Cover Letter</h1>
          <div className="bg-primary-main rounded-xl p-4">

            <div>
              <h1>To whom it may concern,</h1>
              <br></br>
              <p>
                I am a Big Data Engineer with a heavy focus on software engineering and solving difficult
                problems. My primary skills are with “big data” technologies, like Spark, Hive, Kafka, SQL
                databases, Databricks, RedShift, and others. I am also a programming enthusiast, and I enjoy
                writing readable, extensible, stable, and performant code. I also do platform and development
                operations work, which includes technologies like EMR, Databricks, CI/CD pipelines, Docker,
                Linux, Terraform, and CloudFormation.
              </p>
              <br></br>
              <p>
                I have always had a passion for computing and engineering, which includes using Linux since
                age 12, nuclear engineering and high-performance computing, embedded systems, full-stack
                web development, and machine learning. I love engineering because it enables me to do things
                that otherwise would be infeasible or impossible, and I enjoy using my skills to enable others to
                do their best work.
              </p>
              <br></br>
              <p>
                I recommend that you take a look at my GitHub page, where you can see some examples of my
                code and my CI/CD pipelines. I only have limited time to contribute to my personal projects, so
                my GitHub code is relatively limited, but it’s a good starting point.
                Working with collaborative and cross-functional teams is important to me. I find that developing
                good working relationships, communicating difficult concepts effectively, and helping teammates
                gives me a sense of satisfaction and contributes to team success.
              </p>
              <br></br>
              {/* <p>
                Open-mindedness is a part of my personality, so I’m always looking for better technologies and
                better ways of working. I am open to criticism and prefer to have open and free discussion about
                technical decisions.
              </p> */}
              {/* <br></br> */}
              <p>
                I appreciate your time and your attention in reading this cover letter. Please feel free to contact
                me if you want to discuss anything.
              </p>
              <br></br>
              Kevin McQuate
            </div>
          </div>

        </div>

        <div className="bg-primary-light p-4 rounded-lg content-center">
          <h1 className="text-center">Resume</h1>
          <a href={process.env.PUBLIC_URL + "/Resume.pdf"} target="_blank" rel="noreferrer">
            <img className="p-4 rounded-lg content-center" srcSet={process.env.PUBLIC_URL + "/Resume.png"} alt="resume"></img>
          </a>
          {/* <Document file={process.env.PUBLIC_URL + "/Resume.pdf"} className="p-4 rounded-lg content-center"> 
            
              <Page pageNumber={1} className="p-4 rounded-lg content-center"  />
          </Document> */}
        </div>

      </div>
    </div>
  )
}

export default App;
