def idade(ano):
  if(ano>=1922 and ano<=2021):
    ano = 2022-ano
    return ano
  else: return "Ano digitado inválido."    

anocorreto=False
while(anocorreto==False):
  try:
    print("Digite seu nome: ")
    nome=str(input())
    print("Digite seu ano de nascimento: ")
    ano=int(input())
    if(ano>=1922 and ano<=2021):
      anocorreto=True
      print("\nSeu nome é " + str(nome))
      print("\nsua idade em 2022 é " + str(idade(ano)) + " anos.")
    else:
      print(str(idade(ano)))

    
    

  except:
    print("Dados inválidos.")
