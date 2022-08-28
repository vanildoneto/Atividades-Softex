import pandas as pd


df = pd.read_csv("notas_alunos.csv", sep = ",")
media = (df["nota_1"]+df["nota_2"])/2
df["media"] = media


df.loc[df["media"] >= 7.0, "situacao"] = "aprovado"
df.loc[df["faltas"] < 5.0, "situacao"] = "aprovado"
df.loc[df["media"] < 7.0, "situacao"] = "reprovado"
df.loc[df["faltas"] >= 5.0, "situacao"] = "reprovado"

df.to_csv('alunos_situacao.csv')

print(df)

maior_faltas = df["faltas"].max()
print("Maior numero de faltas: " + str(maior_faltas))

media_geral = df["media"].median()
print("Media geral: " + str(media_geral))

maior_media = df["media"].max()
print("Maior media: " + str(maior_media))

