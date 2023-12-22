#Use economic data to calculate financial markets

"""
Real interest rates
Real interest = Nominal interest - Expected inflation

*As inflation rises, real interest rates decrease
this is bad for lenders, and good for borrowers

If inflation decreases, real interest rates increase
this is bad for borrowers and good for lenders.

Borrowers: Consumer loans, student loans, mortgages, car loans
Lenders: Banks, bond holders
"""

def realInterest(CPI):
    fedfunds = 5.25
    return(fedfunds - CPI)