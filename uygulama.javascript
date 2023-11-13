import java.util.Scanner;
/*
    // klavyeden girilen pozitif sayı n
    //n çift ise 0dan n e kadar olan çift sayıları
    //n tek ise 0dan n e kadar tek sayıları
 */
public class ornek19 {
    public static void main(String[] args) {
        Scanner nsayi = new Scanner(System.in);
        System.out.println("N sayısını gir:");
        int n = nsayi.nextInt();

        int nkalan = n%2;


        if(nkalan == 0){
            for(int i=0; i<=n; i = i+2){
                System.out.println(i);
            }
        }else{
            for(int i=1; i<=n; i = i+2){
                System.out.println(i);
            }
        }



    }
}
