#include <stdio.h>

int main()
{
    float noodle, milk, biscuit, coke, eggs;

    printf("Enter MRP of Noodle :  ");
    scanf("%f", &noodle);

    printf("Enter MRP of Milk   :  ");
    scanf("%f", &milk);

    printf("Enter MRP of Biscuit:  ");
    scanf("%f", &biscuit);

    printf("Enter MRP of Coke   :  ");
    scanf("%f", &coke);

    printf("Enter MRP of Eggs   :  ");
    scanf("%f", &eggs);

    float totalBeforeGst = noodle + milk + biscuit + coke + eggs;
    float gst = totalBeforeGst * 0.18;
    float finalAmount = totalBeforeGst + gst;

    printf("\n-----Final Bill-----\n");
    printf("Noodle price  :%.2f\n", noodle);
    printf("Milk price    :%.2f\n", milk);
    printf("Biscuit price :%.2f\n", biscuit);
    printf("Coke price    :%.2f\n", coke);
    printf("Eggs price    :%.2f\n\n", eggs);

    printf("------------------------\n");
    printf("Total without GST :%.2f\n", totalBeforeGst);
    printf("GST (18%%)        :%.2f\n", gst);
    printf("Final Amount      :%.2f\n\n", finalAmount);
}
// #include <stdio.h>

int main()
{
    float a, b;

    printf("\n\nEnter first number: ");
    scanf("%f", &a);

    printf("Enter second number: ");
    scanf("%f", &b);

    int sum = a + b;
    int diff = a - b;
    int mult = a * b;
    float div = a / b;

    printf("\n--- Results ---\n");
    printf("Addition        :  %d\n", sum);
    printf("Subtraction     :  %d\n", diff);
    printf("Multiplication  :  %d\n", mult);
    printf("Division        :  %.2f\n\n", div);

    return 0;
}
