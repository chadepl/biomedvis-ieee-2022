
import pandas as pd
import matplotlib.pyplot as plt

td = pd.read_csv("../data/BioVis-challenge-test-data.csv")

print(td.columns)
print()
print(td.head())
print()
print(td.iloc[0,:])

td.groupby(["Gene", "Species"]).count()["UniAcc"]
print(td.groupby("UniAcc").count())


modifications_df = td.loc[td.UniAcc == "P09651"]
modifications_df.to_json("/Users/chadepl/Downloads/P09651-modifications.json", orient="records")