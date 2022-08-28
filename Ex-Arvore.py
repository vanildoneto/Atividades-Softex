def insere(raiz, nodo):
    if raiz is None:
        raiz = nodo

    elif raiz.chave < nodo.chave:
        if raiz.direita is None:
            raiz.direita = nodo
        else:
            insere(raiz.direita, nodo)

    else:
        if raiz.esquerda is None:
            raiz.esquerda = nodo
        else:
            insere(raiz.esquerda, nodo)
    
#Remoção do nó '8' com filho '7', inserção do nó '6'
raiz = NodoArvore(45)
for chave in [20,30,60,81,97,100,6,4]:
    nodo = NodoArvore(chave)
    insere(raiz, nodo)

print("Lista 1 em ordem:")
em_ordem(raiz)

#Remoção do nó '15', inserção do nó '10'
raiz = NodoArvore(7)
for chave in [10,6,18,3,16,20,4]:
    nodo = NodoArvore(chave)
    insere(raiz, nodo)

print("\nLista 2 em ordem:")
em_ordem(raiz)

