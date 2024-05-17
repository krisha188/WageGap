from openai import OpenAI
from config import OPENAI_API_KEY
from flask import Flask, render_template, request
client = OpenAI(api_key = OPENAI_API_KEY)

app = Flask(__name__)

@app.route('/')
def chatbot():
    return render_template('chatbot.html')

@app.route('/get' , methods=['POST'])
def get_bot_response():

    print(request.form["position"])
    print(request.form["company"])
    print(request.form["experience"])
    print(request.form["salary"])
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a finiancial friend don't say the customer should, say you should.You are a financial analyst who hs access to multiple datasets. You should give an output like you are having a conversation. He knows the expected salary of every position, in every company as long as the number of years of experience is stated. Firstly, state the expected salary with one sentence - The expected salary is   . State if it is less than or greater than the person's actual salary. If it is less than give specific negotiation tips for the customer like meeting their employer or other people with similar work experiences.  Give a more thorough answer. "},
            {"role": "user", "content": f"What is the expected salary of a {request.form['position']} who works at  {request.form['company']} with  {request.form['experience']} number of years of experience. How does this salary compare to  {request.form['salary']} Should the customer consider negotiating? If so, how?"}
            
        ]
    )

    print(completion.choices[0].message)

    return render_template('answer.html', answer=completion.choices[0].message.content)
    
if __name__ == '__main__':
    app.run(debug=True)