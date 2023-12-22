from flask import Flask, request, render_template
from openai import OpenAI

app = Flask(__name__)

# Initialize the OpenAI client with your organization and API key
client = OpenAI(
    organization='org-uideTet8ba1eGkRi6fgFaRXU',
    api_key='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'
)

@app.route('/', methods=['GET', 'POST'])
def home():
    answer = ''
    if request.method == 'POST':
        user_prompt = request.form['prompt']
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_prompt},
            ]
        )
        if response.choices:
            answer = response.choices[0].message.content

    return render_template('index.html', answer=answer)

if __name__ == '__main__':
    app.run(debug=True)
