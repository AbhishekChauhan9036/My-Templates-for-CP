import java.util.*;
import java.io.*;
class Main{
public static void main (String[] args)throws IOException{
  	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int t=Integer.parseInt(br.readLine());
    while(t-- > 0){
          int n = Integer.parseInt(br.readLine());
          int arr[] = new int[n];
          String srr[] = br.readLine().trim().split(" ");
          for(int i = 0; i < n; ++i)
               arr[i] = Integer.parseInt(srr[i]);
          
          System.out.println();
     }
   }
}