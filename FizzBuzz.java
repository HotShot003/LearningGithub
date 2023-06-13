import java.util.Scanner;

public class FizzBuzz {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a num : ");
        int a = sc.nextInt();
        if (a % 3 == 0 ) {

            if (a % 5 == 0) {
                System.out.println("FizzBuzz");
                
            }
            else{
                System.out.println("Fizz");
            }
            
        }
        else if(a % 5 == 0){
            System.out.println("Buzz");
        }
      sc.close();
    }

}
