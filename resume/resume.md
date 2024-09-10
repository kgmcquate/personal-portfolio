<meta charset="UTF-8" />

<style type="text/css">

/* @media print 
{
.class 
{
     background-color: #1a4567 !important;
     -webkit-print-color-adjust: exact;
}
} */

    
body {
    font-family: "Arial";
    font-size: 11pt;
    /* color: #0D1B2A; */

}
h1, h2, h3, h4, h5, h6 {
    margin: 2px;
}
h1 {
    text-align: center;
}
h2 {
    font-variant: small-caps;
    text-decoration: underline;
}
h4 {
}
p {
    margin: 0px;
    padding: 0px;
}
.centered {
    text-align: center;
    /* text-align: justify;
    text-justify: inter-word; */
    /* text-align: justify;
    text-justify: inter-word; */
}
ul {
    /* display: block; */
    /* list-style-type: disc; */
    margin: 0px;
    /* margin-block-start: -15px; */
    margin-block-end: 0px;
    margin-inline-start: 18px !important; 
    margin-inline-end: 0px; 
    padding-inline-start: 0px !important; 
    list-style: none;
}
ul > li {
}
ul > li > ul > li > ul > li > ul {
    list-style: square;
    /* list-style: '-  '; */
    /* list-style: disc; */
}
ul > li > ul > li > ul {
    margin-block-end: 0px;
}
ul > li > ul {
    margin-block-end: 6px;
}
</style>

# Kevin G. McQuate, Big Data Software Engineer
<div class="centered">
kgmcquate@gmail.com &nbsp;<bold>|</bold>&nbsp; 330-573-9965 &nbsp;<bold>|</bold>&nbsp; <a href="https://home.kevin-mcquate.net">home.kevin-mcquate.net</a>
</div>

<!-- <hr> -->

## Work Experience

- #### Big Data Software Engineer &nbsp; | &nbsp; [Availity](https://www.linkedin.com/company/availity/), Jacksonville, FL &nbsp; | &nbsp; _May 2024_
    - _Built Healthcare Provider Data Harmonization Pipeline_
      - __Data Topics__: Healthcare, Geolocation
      - __Platforms__: AWS, EMR, Airflow
      - __Tools__: Spark, Terraform, Gitlab CI/CD

- #### Senior Consultant &nbsp; | &nbsp; [Improving](https://www.linkedin.com/company/improving-enterprises/), Dallas, TX &nbsp; | &nbsp; _November 2023_
  
    - _Built Enterprise Data Ingestion Pipelines for [CHS, Inc.](https://www.linkedin.com/company/chs/)_
      - __Projects__:
        - Qualtrics Survey REST API integration
        - NOAA Climate Prediction Center REST API integration
        - Other REST API and HVR integrations to Snowflake
      - __Data Topics__: Agriculture, Weather, Energy
      - __Platforms__: Snowflake, AWS 
      - __Tools__: dbt, Python, Terraform, Lambda, StepFunctions, Snowflake Tasks/Streams

- #### Senior Big Data Engineer &nbsp; | &nbsp; [Bluestem Brands, Inc.](https://www.linkedin.com/company/bluestem-brands/), Eden Prairie, MN &nbsp; | &nbsp; _April 2021_

    - _Built, tested, supported, and migrated big data pipelines_
      - __Projects__:
          - FedEx Tracking API integration with Spark RDD API
          - Credit Scoring ML models in SparkR/PySpark
          - Custom Spark AWS Credentials Provider
          - Kinesis streaming pipeline for Customer Support phone data
          - On-prem Hadoop to AWS EMR migration
      - __Data topics__: Marketing, Supply Chain, Customer Credit, Customer Support, Merchandise, …
      - __Data sources__: Kafka, Kinesis, SQL Databases, REST APIs, Parquet, Delta tables, CSV, JSON, CDC
      - __Tools__: Spark, Python, Scala, Java, RedShift, Lambda, EC2, IAM, Kinesis, MS SQL, Kafka
      - __Platforms__: AWS, EMR, Databricks
  - _Built and maintained CI/CD pipelines for the Big Data team_
    - __Tools__: Docker, CloudFormation, Terraform, Python/Java build tools
    - __Platforms__: GitLab, Azure DevOps
  - _Built developer tooling and set up big data platforms_
    - __Tools__: Terraform, Python, Typer, Java, Scala, boto3/AWS SDK, IAM, Databricks Asset Bundles
    - __Platforms__: EMR, EMR Serverless, Databricks

- #### Data Engineer&nbsp; | &nbsp; [Naval Nuclear Laboratory](https://www.linkedin.com/company/naval-nuclear-laboratory/), Niskayuna, NY &nbsp; | &nbsp; _July 2019_

  - _Built big data pipelines for scientific data for the US Navy_
      - __Tools__: Spark, Scala, Python, SQL, Impala, Hive
      - __Platforms__: Cloudera Hadoop, Airflow
  - _Designed, built, and maintained web UIs for data manipulation and access_
      - __Tools__: Javascript/HTML/CSS, Python, Django, Docker Compose



<!-- - __Electromechanical Engineer/Technician__ &nbsp; __|__ &nbsp; Elkins Earthworks, Medina, OH &nbsp; __|__ &nbsp; August 2018 to June 2019

  - _Bluetooth thermometer design: mechanical design, circuit board layout, testing, repair and assembly_
<br> -->

<hr>

## Education
- __B.S. in Nuclear Engineering__ &nbsp; __|__ &nbsp; The Pennsylvania State University, University Park, PA

<hr>

## Personal Projects
- __dbt-testgen__ - _Open-source DBT package for autogenerating DBT tests_
  <!-- - __Link__: [hub.getdbt.com/kgmcquate/testgen](https://hub.getdbt.com/kgmcquate/testgen) -->
  - __GitHub__: [github.com/kgmcquate/dbt-testgen](https://github.com/kgmcquate/dbt-testgen)
  - __Technologies__: dbt, integration tests, Snowflake, RedShift, Databricks, BigQuery, DuckDB

- __Livestream Object Detection__ - _Interactive object detection statistics on YouTube Livestreams_
  - __Link__: [video-streams.kevin-mcquate.net](https://video-streams.kevin-mcquate.net/)
  - __GitHub__: [github.com/kgmcquate/video-stream-OR-app](https://github.com/kgmcquate/video-stream-OR-app)
  - __Technologies__: Spark, PyTorch, dbt, React, Airflow, Python 

- __Lake Ice Map__ - _Interactive map of lake ice thickness predictions_
  - __Link__: [lake-freeze.kevin-mcquate.net](https://lake-freeze.kevin-mcquate.net)
  - __ETL__: [github.com/kgmcquate/weather-etl](https://github.com/kgmcquate/weather-etl), [github.com/kgmcquate/lake-satellite-image-etl](https://github.com/kgmcquate/lake-satellite-image-etl)
  - __Website__: [github.com/kgmcquate/lake-freeze-frontend](https://github.com/kgmcquate/lake-freeze-frontend ), [lake-freeze-api.kevin-mcquate.net/docs](https://lake-freeze-api.kevin-mcquate.net/docs)
  - __Technologies__: FastAPI, React, PySpark, EMR, GitHub Actions, AWS SAM, CloudFront, Lambda, Python, Docker, RDS, Postgres
- __Infrastructure__ - _Infrastructure for personal projects written in Terraform_
  - __GitHub__: [github.com/kgmcquate/infra](https://github.com/kgmcquate/infra)

- __Personal Portfolio Site__ - _Portfolio of personal projects written with React_
  -  __Link__: [home.kevin-mcquate.net](https://home.kevin-mcquate.net)
  <!-- -  __GitHub__: [github.com/kgmcquate/personal-portfolio](https://github.com/kgmcquate/personal-portfolio)
  - __Technologies__: React, Markdown, Pandoc, GitHub Actions, CloudFront -->

<!-- - __Data Science Projects__ - _Short data science projects for EdX Data Science course_
    - __Links__: [home.kevin-mcquate.net/solar-panel-data.html](https://home.kevin-mcquate.net/solar-panel-data.html), [home.kevin-mcquate.net/nuclear-plants.html](https://home.kevin-mcquate.net/nuclear-plants.html) -->
