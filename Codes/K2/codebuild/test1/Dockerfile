FROM python:3.8
RUN pip install dbt-postgres
WORKDIR /usr/app
COPY . .
CMD ["dbt", "run"]