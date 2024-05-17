from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    def calculate_distribution(salary, family_size, people_colllege_count,household_income):
        if household_income == '':
            household_income = 0
        if float(household_income) > salary:
            salary = float(household_income)
        income_after_tax = 0.229321 * salary
        monthly_net = income_after_tax/12
        necessary_spending = 2160*family_size
        necessary_spending = (people_colllege_count * 500) + necessary_spending
        necessary_spending = float(necessary_spending)
        income_after_tax =  monthly_net - float(necessary_spending)
        if income_after_tax < 0 :
            opinion = "Your income is relatively low for your family size and number in college. You may need to consider cutting expenses or finding additional sources of income."
          
            leisure_spending = 0
            retirement = 0
            high_yields_saving_account = 0
            saving_accnt = 0
            investments = 0
        else:      
            opinion = "Your income is adequate for your family size and number in college, but you may need to be mindful of your spending habits."
             
            leisure_spending = 0.05 * income_after_tax
            retirement =.15 * salary
            high_yields_saving_account =.05 * income_after_tax
            saving_accnt = income_after_tax *.30
            investments = 0.45 * income_after_tax

        return {
            'necessary_spending': necessary_spending,
            'leisure_spending': leisure_spending,
            'retirement': retirement,
            'high_yields_saving_account': high_yields_saving_account,
            'saving_accnt': saving_accnt,
            'investments': investments,
            'opinion' : opinion
        }

    if request.method == 'POST':
        salary = float(request.form['salary'])
        family_size = float(request.form['family_size'])
        num_in_college = float(request.form['num_in_college'])
        household_income = (request.form['household_income'])

        distribution = calculate_distribution(salary, family_size, num_in_college,household_income)
        return render_template('answer.html', **distribution)
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

       

if __name__ == '__main__':
    app.run(debug=True)

