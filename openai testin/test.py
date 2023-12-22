from openai import OpenAI

client = OpenAI(
  organization='org-uideTet8ba1eGkRi6fgFaRXU',
  api_key='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',
)

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Who won the world series in 2020?"},
  ]
)
client.models.list()

print(response)