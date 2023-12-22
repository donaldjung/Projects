"""
Price level
When domestic prices increases, the domestic currency appreciates
Real fx = (Nominal ER * P foreign) / P domestic"""

"""
When exports fall, demand for domestic dollar drops, which lowers interest rates
Less demand for dollar = less demand for loans = lower interest rates

Canadian assets become less attractive and the canadian dollar depreciates
thus causing net exports to increase and push GDP back up
"""

def fx_equities(fx):
    if fx == 1:
        return ("FX is up, increased money supply, more demand for dollars, interest rates rise")
    elif fx == 0:
        return ("Fx is down, decreased money supply, less demand for dollars, interest rates drop")
