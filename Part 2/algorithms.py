def calculate_distribution(salary, family_size, people_colllege_count):
    income_after_tax = 0.229321 * salary
    monthly_net = income_after_tax/12
    necessary_spending = 2160*family_size
    necessary_spending = (people_colllege_count * 500)+necessary_spending
    income_after_tax -= necessary_spending
    if income_after_tax < 0 :
        leisure_spending = 0
        retirement = 0
        high_yields_saving_account = 0
        #stocks and bonds investements
        saving_accnt = 0
        investments = 0
    else:                
        leisure_spending = 0.05 * income_after_tax
        retirement = .15 * salary
        high_yields_saving_account = .05 * income_after_tax
        #stocks and bonds investements
        saving_accnt = income_after_tax * .30
        investments = 0.45 * income_after_tax

    return necessary_spending,leisure_spending,retirement,high_yields_saving_account,saving_accnt,investments


def calculate_retirement_savings(current_age, retirement_age, current_savings, annual_income, income_growth, rate_of_return, monthly_input):
    years_to_retirement = retirement_age - current_age
    total_savings = current_savings

    for year in range(years_to_retirement):
        annual_contribution = monthly_input * 12
        annual_income += annual_income * income_growth
        total_savings = (total_savings + annual_contribution) * (1 + rate_of_return)

    return total_savings

def calculate_annual_withdrawal(total_savings, retirement_years):
    return total_savings / retirement_years

# Example usage:
current_age = 30
retirement_age = 65
current_savings = 20000
annual_income = 50000
income_growth = 0.03
rate_of_return = 0.05
monthly_input = 500
retirement_years = 20

print(calculate_distribution(20000,6,2)[0])
total_savings = calculate_retirement_savings(current_age, retirement_age, current_savings, annual_income, income_growth, rate_of_return, monthly_input)
annual_withdrawal = calculate_annual_withdrawal(total_savings, retirement_years)

print(f"Total Savings at Retirement: ${total_savings:.2f}")
print(f"Annual Withdrawal Amount: ${annual_withdrawal:.2f}")

