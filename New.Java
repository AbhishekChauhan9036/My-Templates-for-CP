import java.io.BufferedReader;
import java.io.IOException;
import java.io.*;
import java.util.*;

public class Main {

    // Shortcut for input reading
    static class FastReader {
        BufferedReader br;
        StringTokenizer st;

        public FastReader() {
            br = new BufferedReader(new InputStreamReader(System.in));
        }

        String next() {
            while (st == null || !st.hasMoreElements()) {
                try {
                    st = new StringTokenizer(br.readLine());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return st.nextToken();
        }

        int nextInt() {
            return Integer.parseInt(next());
        }

        long nextLong() {
            return Long.parseLong(next());
        }

        double nextDouble() {
            return Double.parseDouble(next());
        }

        String nextLine() {
            String str = "";
            try {
                str = br.readLine();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return str;
        }
    }

    public static void main(String[] args) {
        FastReader reader = new FastReader();

        int t = reader.nextInt(); // Number of test cases

        while (t-- > 0) {
            // Your code for each test case goes here

            // Example:
            int n = reader.nextInt();
            for (int i = 0; i < n; i++) {
                int num = reader.nextInt();
                System.out.println("Processing test case: " + num);
            }
        }
    }
}
