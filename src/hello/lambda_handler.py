import pandas as pd
import json

def lambda_handler(event, context):
    # Sample data as a list of dictionaries
    data = [
        {'Name': 'Alice', 'Age': 30},
        {'Name': 'Bob', 'Age': 25},
        {'Name': 'Charlie', 'Age': 35},
        {'Name': 'David', 'Age': 28},
    ]

    # Create a Pandas DataFrame from the sample data
    df = pd.DataFrame(data)

    # Sort the DataFrame by the 'Age' column in ascending order
    df_sorted = df.sort_values(by='Age')

    # Convert the sorted DataFrame back to a list of dictionaries
    sorted_data = df_sorted.to_dict(orient='records')

    # Return the sorted data as JSON
    response = {
        'statusCode': 200,
        'body': json.dumps(sorted_data)
    }

    return response
