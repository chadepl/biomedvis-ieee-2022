The data consists of two files. 

##### The first file (BioVis-challenge-test-data.csv) is: #####

* a comma delimited table that lists the modification sites for three human proteins (ALDOA, HNRNPA1 and TGFB1) and their mouse orthologs.
* For each site,  the residue, position, and type of posttranslational modification (PTM): note that each site can carry more than one PTM, so each site can appear on multiple table rows (1 for each different PTM).
* For each PTM, the column "classification" indicates if it is an in vivo PTM, a chemical derivative, an artefact, etc.
* For the 3 human proteins, the column "PathogenicMutation" indicates if the site is mutated in a disease (according to the ClinVar database: https://www.ncbi.nlm.nih.gov/clinvar/)

##### The second file (BioVis-challenge-alphafold-data.csv) is: ####
* a comma delimited table of the structures of the three proteins predicted using AlphaFold
* It contains the coordinates of the C, C-alpha, C-beta, and N atoms for each amino acid, plus a predicton of the secondary structures.
