import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

afd = pd.read_csv("../data/BioVis-challenge-alphafold-data.csv")

print(afd.columns)

print(afd.iloc[0,:])
print(len(afd))
print(afd.groupby("UniAcc").count())

protein_df = afd.loc[afd["UniAcc"] == "P09651"]

sec_meta = {
    "NONE": dict(id=0, color=np.array([0, 0, 0])/255),
    "BEND": dict(id=1, color=np.array([228, 26, 28])/255),
    "HELX": dict(id=2, color=np.array([55, 126, 184])/255),
    "STRN": dict(id=3, color=np.array([77, 175, 74])/255),
    "TURN": dict(id=4, color=np.array([152, 78, 163])/255)
}

atoms_meta = {
    "c": dict(id=0, color=np.array([228, 26, 28])/255),
    "ca": dict(id=1, color=np.array([55, 126, 184])/255),
    "cb": dict(id=2, color=np.array([77, 175, 74])/255),
    "n": dict(id=3, color=np.array([152, 78, 163])/255),
}

amino_meta = {k: dict(color=np.random.random(3)) for k in protein_df.RES.unique()}

# Questions:
# - Best way/library to visualize 3d structure


# Primary structure
# - Sequence of aminoacids
# - Determined by the gene corresponding to the protein
# - Post-translational modifications cannot be read from the gene

sns.histplot(x="RES", data=protein_df)
plt.show()

plt.scatter(protein_df.POS,
            np.ones_like(protein_df.POS),
            c=[amino_meta[r]["color"] for r in protein_df.RES],
            s=10)
plt.show()

protein_df["x_coord_mean"] = (protein_df.x_coord_c +
                              protein_df.x_coord_ca +
                              protein_df.x_coord_cb +
                              protein_df.x_coord_n)/4
protein_df["y_coord_mean"] = (protein_df.y_coord_c +
                              protein_df.y_coord_ca +
                              protein_df.y_coord_cb +
                              protein_df.y_coord_n)/4
protein_df["z_coord_mean"] = (protein_df.z_coord_c +
                              protein_df.z_coord_ca +
                              protein_df.z_coord_cb +
                              protein_df.z_coord_n)/4
protein_df["secondary"] = (protein_df.BEND*sec_meta["BEND"]["id"] +
                                     protein_df.HELX*sec_meta["HELX"]["id"] +
                                     protein_df.STRN*sec_meta["STRN"]["id"] +
                                     protein_df.TURN*sec_meta["TURN"]["id"])
id_sec_dict = {v["id"]: k for k, v in sec_meta.items()}
protein_df["secondary_str"] = [id_sec_dict[i] for i in protein_df.secondary]


import plotly.express as px

fig = px.scatter_3d(protein_df, x="x_coord_ca", y="y_coord_ca", z="z_coord_ca", color="secondary_str")
fig.show()

px.line_3d(protein_df, x="x_coord_ca", y="y_coord_ca", z="z_coord_ca")
fig.show()


sns.heatmap(protein_df.loc[:, ["BEND", "HELX", "STRN", "TURN"]])
plt.show()

# Secondary structure
# - Highly regular local sub-structures on the polypeptide backbone
#   - alpha-helix
#   - beta-strand or beta-sheets


# Tertiary structure
# - Three-dimensional structure created by a single protein
# - Can be composed of different domains (areas that folded independently)
# - alpha-helices and beta-strands fold into globular structure


# Quaternary structure
# - Three-dimensional structure that aggregates two individual "proteins" (polypeptide chains)
#   that operate as a single functional unit. Called multimer.

plt.scatter(protein_df.x_coord_c, protein_df.y_coord_c, color=atoms_meta["c"]["color"], s=5)
plt.scatter(protein_df.x_coord_ca, protein_df.y_coord_ca, color=atoms_meta["ca"]["color"], s=5)
plt.scatter(protein_df.x_coord_cb, protein_df.y_coord_ca, color=atoms_meta["cb"]["color"], s=5)
plt.scatter(protein_df.x_coord_n, protein_df.y_coord_n, color=atoms_meta["n"]["color"], s=5)
plt.show()

plt.scatter(protein_df.x_coord_c, protein_df.y_coord_c, color=atoms_meta["c"]["color"], s=5)
plt.scatter(protein_df.x_coord_ca, protein_df.y_coord_ca, color=atoms_meta["ca"]["color"], s=5)
plt.scatter(protein_df.x_coord_cb, protein_df.y_coord_ca, color=atoms_meta["cb"]["color"], s=5)
plt.scatter(protein_df.x_coord_n, protein_df.y_coord_n, color=atoms_meta["n"]["color"], s=5)
plt.show()



import nglviewer