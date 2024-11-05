import pyodbc
import uuid

CONNECTION_STRING = (
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=tcp:legistai-test.database.windows.net,1433;'
    'Database=legistai-test;'
    'Uid=legistaitest;'
    'Pwd=admin@123;'
    'Encrypt=yes;'
    'TrustServerCertificate=no;'
    'Connection Timeout=30;'
)

def get_db_connection():
    return pyodbc.connect(CONNECTION_STRING)

def register_user(user_data):
    user_id = str(uuid.uuid4())
    query = """
    INSERT INTO users (user_id, name, location, phonenumber, email, description, rating)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(query, (
        user_id,
        user_data['name'],
        user_data['location'],
        user_data['phonenumber'],
        user_data['email'],
        user_data['description'],
        user_data['rating']
    ))
    conn.commit()
    cursor.close()
    conn.close()
    return user_id

def get_user_profile(user_id):
    query = """
    SELECT name, location, phonenumber, email, description, rating
    FROM users WHERE user_id = ?
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(query, (user_id,))
    row = cursor.fetchone()
    cursor.close()
    conn.close()
    
    if row:
        return {
            'name': row[0],
            'location': row[1],
            'phonenumber': row[2],
            'email': row[3],
            'description': row[4],
            'rating': str(row[5])
        }
    return None
