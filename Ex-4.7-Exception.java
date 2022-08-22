//Crie uma situação em que ocorra uma exceção dentro de um código. Utilize try/catch para realizar a captura e tratamento dessa exceção. 
public class MyClass {
    public static void main(String args[]) {
      int x=10;
      int y=0;
      try{
        System.out.println("divisão errada, teste exceção: " + x/y);
      }catch (Exception excecao) {

       System.out.println("Ocorreu o erro: " + excecao.getMassage());

      }

       System.out.println("Fim");

}
}
