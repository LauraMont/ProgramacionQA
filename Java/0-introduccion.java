//Imprimir un mensaje:
Imprimir un mensaje:
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola, mundo!");
    }
}

//Variables
public class Variables {
    public static void main(String[] args) {
        int edad = 30;
        double estatura = 1.75;
        char genero = 'M';
        boolean casado = false;
        String nombre = "Juan";
        System.out.println("Mi nombre es " + nombre + ".");
        System.out.println("Tengo " + edad + " años.");
        System.out.println("Mi estatura es " + estatura + " metros.");
        System.out.println("Soy del género " + genero + ".");
        System.out.println("Estoy casado: " + casado + ".");
    }
}

//Operaciones matemáticas:
public class Operaciones {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        int suma = a + b;
        int resta = a - b;
        int producto = a * b;
        double cociente = (double) a / b;
        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Producto: " + producto);
        System.out.println("Cociente: " + cociente);
    }
}

//Condicionales:
public class Condicionales {
    public static void main(String[] args) {
        int calificacion = 75;
        if (calificacion >= 70) {
        System.out.println("Aprobado");
        } else {
        System.out.println("Reprobado");
        }
    }
}

//Bucles:
public class Bucles {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
        System.out.println(i);
        }
    }
}
public class Bucles {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
        System.out.println(i);
        i++;
        }
    }
}
