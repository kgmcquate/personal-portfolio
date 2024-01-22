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
    font-size: 12pt;
    /* color: #0D1B2A; */

}
h1, h2, h3, h4, h5, h6 {
    margin: 4px;
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
    margin: 2px;
    /* margin-block-start: -15px; */
    margin-block-end: 0px;
    margin-inline-start: 20px !important; 
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

# Kevin G. McQuate, Big Data/Software Engineer
<div class="centered">
kgmcquate@gmail.com &nbsp;<bold>|</bold>&nbsp; 330-573-9965 &nbsp;<bold>|</bold>&nbsp; <a href="https://home.kevin-mcquate.net">home.kevin-mcquate.net</a>
</div>

<hr>

## Work Experience

- #### __Senior Consultant__ &nbsp; __|__ &nbsp; [Improving](https://www.linkedin.com/company/improving-enterprises/), Dallas, TX &nbsp; __|__ &nbsp; November 2023
  
    - _Data Ingestion for [CHS, Inc.](https://www.linkedin.com/company/chs/)_
      - __Projects__:
        - Qualtrics Survey REST API integration
        - NOAA Climate Prediction Center REST API integration
        - Other REST API and HVR integrations to Snowflake
      - __Data Topics__: Agriculture, Weather, Customer Surveys
      - __Platforms__: AWS Lambda and StepFunctions, Snowflake

- #### __Senior Big Data Engineer__ &nbsp; __|__ &nbsp; [Bluestem Brands, Inc.](https://www.linkedin.com/company/bluestem-brands/), Eden Prairie, MN &nbsp; __|__ &nbsp; _April 2021 to November 2023_

    - _Built, tested, supported, and migrated big data pipelines_
      - __Projects__:
          - FedEx Tracking API integration with Spark RDD API
          - Credit Scoring ML models in SparkR/PySpark
          - Custom Spark AWS Credentials Provider
          - Kinesis streaming pipeline for Customer Support phone data
          - On-prem Hadoop to AWS EMR migration
      - __Data topics__: Marketing, Supply Chain, Customer Credit, Customer Support, Merchandise, …
      - __Data sources__: Kafka, Kinesis, SQL Databases, REST APIs, Parquet, Delta tables, CSV, JSON, CDC
      - __Tools__: Spark, Python, Scala, Java, RedShift, Lambda, EC2, IAM, Kinesis, MS SQL, Kafka, ActiveBatch
      - __Platforms__: AWS, EMR, Databricks
  - _Built and maintained CI/CD pipelines for the Big Data team_
    - __Tools__: Git, Docker, CloudFormation, Terraform, PyPI, Maven, Bash, Unit Testing, AWS ECR, Python/Java build tools
    - __Platforms__: GitLab, Azure DevOps
  - _Built developer tooling and set up big data platforms_
    - __Tools__: Terraform, Python, Typer, Java, Scala, boto3/AWS SDK, IAM, dbx, Databricks Asset Bundles
    - __Platforms__: EMR, EMR Serverless, Databricks

- #### __Data Engineer__ &nbsp; __|__ &nbsp; [Naval Nuclear Laboratory](https://www.linkedin.com/company/naval-nuclear-laboratory/), Niskayuna, NY &nbsp; __|__ &nbsp; July 2019 to April 2021

  - _Built big data pipelines for scientific data for the US Navy_
      - __Tools__: Spark, Impala, Hive, SQL, Hadoop, Scala, Python, Apache Airflow
  - _Designed, built, and maintained web UIs for data manipulation and access_
      - __Tools__: Javascript/HTML/CSS, Python, Django, Docker Compose



<!-- - __Electromechanical Engineer/Technician__ &nbsp; __|__ &nbsp; Elkins Earthworks, Medina, OH &nbsp; __|__ &nbsp; August 2018 to June 2019

  - _Bluetooth thermometer design: mechanical design, circuit board layout, testing, repair and assembly_
<br> -->

<hr>

## Education
- __B.S. in Nuclear Engineering__ &nbsp; __|__ &nbsp; 3.34 GPA &nbsp; __|__ &nbsp; The Pennsylvania State University, University Park, PA

<hr>

## Personal Projects
- __dbt-testgen__ - _Open-source DBT package for autogenerating DBT tests_
  - __Link__: [hub.getdbt.com/kgmcquate/testgen](https://hub.getdbt.com/kgmcquate/testgen)
  - __GitHub__: [github.com/kgmcquate/dbt-testgen](https://github.com/kgmcquate/dbt-testgen)
  - __Technologies__: DBT, SQL, Jinja, integration testing, Snowflake, RedShift, Databricks, BigQuery, DuckDB

- __Lake Ice Map React App__ - _Interactive map of lake ice thickness predictions_
  - __Link__: [lake-freeze.kevin-mcquate.net](https://lake-freeze.kevin-mcquate.net)
  - __API__: [lake-freeze-api.kevin-mcquate.net/docs](https://lake-freeze-api.kevin-mcquate.net/docs)
  - __ETL__: [github.com/kgmcquate/weather-etl](https://github.com/kgmcquate/weather-etl), [github.com/kgmcquate/lake-satellite-image-etl](https://github.com/kgmcquate/lake-satellite-image-etl)
  - __Frontend__: [github.com/kgmcquate/lake-freeze-frontend](https://github.com/kgmcquate/lake-freeze-frontend )
  - __Infrastructure__: [github.com/kgmcquate/infra](https://github.com/kgmcquate/infra)
  - __Technologies__: FastAPI, React, PySpark, EMR Serverless, GitHub Actions, AWS SAM/CloudFormation, CloudFront, Terraform, Lambda, Python, Docker, RDS, Postgres

- __Personal Portfolio Site__ - _Portfolio of personal projects written with React_
  -  __Link__: [home.kevin-mcquate.net](https://home.kevin-mcquate.net)
  -  __GitHub__: [github.com/kgmcquate/personal-portfolio](https://github.com/kgmcquate/personal-portfolio)
  - __Technologies__: React, Markdown, Pandoc, GitHub Actions, CloudFront

<!-- - __Data Science Projects__ - _Short data science projects for EdX Data Science course_
    - __Links__: [home.kevin-mcquate.net/solar-panel-data.html](https://home.kevin-mcquate.net/solar-panel-data.html), [home.kevin-mcquate.net/nuclear-plants.html](https://home.kevin-mcquate.net/nuclear-plants.html) -->
