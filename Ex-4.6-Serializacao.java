/*Crie um exemplo de como funcionam a serialização e a desserialização de um sistema qualquer. 
Utilize as classes, os objetos e métodos padrões da Java e insira um endereço físico fictício.*/

//serialização
FileOutputStream obj_1 = new FileOutputStream(Softex);
ObjectOutputStream obj = new ObjectOutputStream(endereço);
obj.WriteObject(obj_1);
obj.close();

//deserialização
FileInputStream obj_1 = new FileInputStream(Softex);
ObjectInputStream obj = new ObjectInputStream(obj_1);
obj_1 obj.readObject();
obj.close();
return obj_1;
