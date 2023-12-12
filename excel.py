import pandas as pd
import mysql.connector

# MySQL database connection parameters
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '123456789',
    'database': 'student',
}

# Connect to MySQL database
connection = mysql.connector.connect(**db_config)

# Query to retrieve data from the student table
query = 'SELECT * FROM data'

# Read data into a Pandas DataFrame
df = pd.read_sql(query, connection)

# Close the MySQL connection
connection.close()

# Export the DataFrame to an Excel file
excel_file_path = 'student_data.xlsx'
df.to_excel(excel_file_path, index=False)

print(f'Data exported to Excel file: {excel_file_path}')
