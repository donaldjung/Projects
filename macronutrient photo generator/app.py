from flask import Flask, request, render_template, jsonify
import openai
import os

app = Flask(__name__)

# This is where you would put your OpenAI API key.
# Remember to keep this key secure and never expose it publicly.
openai.api_key = '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'

@app.route('/', methods=['GET'])
def home():
    # Render a simple upload form on the homepage.
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    # Check if a file is provided.
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']

    # Save the file temporarily to send to OpenAI
    filename = os.path.join('uploads', file.filename)
    file.save(filename)

    # Assuming OpenAI has an endpoint to analyze images and return nutritional info
    # This part of the code is hypothetical as the actual API call will depend on the OpenAI API documentation.
    try:
        response = openai.Image.create(file_path=filename)
        os.remove(filename)  # Remove the file after analysis
        return jsonify(response)
    except Exception as e:
        os.remove(filename)  # Make sure to remove the file even if the API call fails
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
