# biomedvis-ieee-2022
Code for the IEEE 2022 Bio+MedVis challenge. More information at http://biovis.net/2022/biovisChallenges_vis/


## Data description

"Decoration layers" in protein site modification:
- post-translational modifications (what we want to identify)
- in vivo artifacts: chemicals that attach to proteins, changing their behavior.
- in vitro artifacts: changes induced in processing steps.

Data generation technique is mass spectrometry (MS).

### Test data 

- `n_cols`: 9
- `n_rows`: 6880

Attributes:
- `UniAcc` (str): identifier of modified loci (row identifier).
- `RES` (str): aminoacids. 
- `POS` (int): position in the aminoacid
- `MOD` (str):
- `Entry` (str): `Gene` + `Species`
- `Gene` (str): protein identifier.
- `Species` (str): either human or mouse
- `classification` (): type of change (for example post-translational vs artifact).
- `PathogenicMutation` ():

### AlphaFold data

- `n_cols`: 23
- `n_rows`: 2200

Attributes:
- `UniAcc` (): 
- `RES` (): 
- `POS` (): 
- `quality` (): 
- `x_coord_c` (): 
- `x_coord_ca` (): 
- `x_coord_cb` (): 
- `x_coord_n` (): 
- `y_coord_c` (): 
- `y_coord_ca` (): 
- `y_coord_cb` ():
- `y_coord_n` ():
- `z_coord_c` (): 
- `z_coord_ca` (): 
- `z_coord_cb` (): 
- `z_coord_n` ():
- `secondary_structure` ():
- `structure_group` (): 
- `BEND` ():
- `HELX` ():
- `STRN` ():
- `TURN` ():
- `unstructure` ():

Some useful information:
- C (c): carbon atom
- C-alpha (ca): central carbon atom. Four different groups are attached to this atom: amino group (NH2), carboxylic acid group (COOH), hydrogen (H), side-chain R which varies per aminoacid.
  - "When describing a protein, which is a chain of amino acids, one often approximates the location of each amino acid as the location of its α-carbon." [L1]
- C-beta (cb): secondary carbon atom which might separate functional groups. For instance, could separate amino group (NH2) from the carboxylic acid group (COOH) [L2]
- N (n): nitrogen atom
- Protein structure can be [primary](https://en.wikipedia.org/wiki/Protein_primary_structure), [secondary](https://en.wikipedia.org/wiki/Protein_secondary_structure), [tertiary](https://en.wikipedia.org/wiki/Protein_tertiary_structure) and [quaternary](https://en.wikipedia.org/wiki/Protein_quaternary_structure) [L3]

## References

- [1-3] Machine learning methods that can identify post-translational modifications (PTMs).
PTMs are chemical modifications that regulate protein's behavior.
- [4] 

## Links

- [L1] https://en.wikipedia.org/wiki/Alpha_and_beta_carbon
- [L2] https://www.differencebetween.com/difference-between-alpha-and-beta-amino-acid/#:~:text=The%20key%20difference%20between%20alpha,from%20the%20carboxylic%20acid%20group.
- [L3] https://en.wikipedia.org/wiki/Protein_structure#:~:text=Protein%20structure%20is%20the%20three,repeating%20unit%20of%20a%20polymer.