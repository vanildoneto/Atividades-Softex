#include <stdio.h>
#include <stdlib.h>

int main(){
	
	int i, tam=7;
	char *nome;
	
	nome = (char *) malloc(tam * sizeof(char));
	
	nome = "Jadley";
	printf("\n\t%s", nome);
	
	nome = (char *) realloc(NULL,14 * sizeof(char));
	
	nome = "Jadley Felipe";
	printf("\n\t%s", nome);
	
	free(nome);
	
	printf("\n\n");
	return 0;
}
