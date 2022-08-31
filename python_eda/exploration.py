import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

import umap

df_mods = pd.read_csv("../data/BioVis-challenge-test-data.csv")
df_pstr = pd.read_csv("../data/BioVis-challenge-alphafold-data.csv")

########################
# Explorative analysis #
########################

from plotly import express

protein = df_pstr.loc[df_pstr.UniAcc == "P01137"]
protein.id = pd.Series(list(range(len(protein))))
fig = express.scatter_3d(protein, "x_coord_ca", "y_coord_ca", "z_coord_ca", "POS")
fig.write_html("/Users/chadepl/Downloads/P01137_scatter.html")
fig.show()


# Post processing and saving (for web)

# df_mods.to_json("../FoldVisWeb/data/modifications.json", orient="records")
# df_pstr.to_json("../FoldVisWeb/data/proteins.json", orient="records")

############
# ANALYSIS #
############

tmp = df_mods.groupby(["MOD", "UniAcc", "PathogenicMutation"]).count().reset_index().loc[:,["MOD", "UniAcc", "PathogenicMutation", "RES"]]
print(tmp.RES[(not tmp.PathogenicMutation)])

# Filter specific dataset
df_mods = df_mods.loc[df_mods.UniAcc == "P09651", :]
df_pstr = df_pstr.loc[df_pstr.UniAcc == "P09651", :]

# Embedding of the 3D data in 2D space

X = np.stack([df_pstr.x_coord_ca, df_pstr.y_coord_ca, df_pstr.z_coord_ca], axis=1)
umapper = umap.UMAP()
y = umapper.fit_transform(X)

plt.scatter(y[:,0], y[:,1],c=df_pstr.POS, s=2)
plt.show()