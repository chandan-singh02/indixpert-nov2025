// #include <stdio.h>

// int main()
// {
//     int English = 85, Math = 75, Computer = 95, Hindi = 90, Chemistry = 88;
//     int total;

//     total = English + Math + Computer + Hindi + Chemistry;

//     printf("\n\n");
//     printf("<---- Marks Sheet --->\n");
//     printf("English     = %d\n", English);
//     printf("Math        = %d\n", Math);
//     printf("Computer    = %d\n", Computer);
//     printf("Hindi       = %d\n", Hindi);
//     printf("Chemistry   = %d\n\n", Chemistry);
//     printf("Total Marks = %d\n\n", total);
// }

// USING USER INPUT.
#include <stdio.h>

int main()
{
    int English, Math, Computer, Hindi, Chemistry;
    int total = 0;
    float percentage = 0.0;
    printf("\n\n <----------STUDENT MARKS ENTRY----------> \n\n");

    printf("Enter marks in English     : ");
    scanf("%d", &English);

    if (English < 0 || English > 100)
    {
        printf("plzz  enterr valid number 0 to 100 Only ");
        scanf("%d", &English);
    }

    printf("Enter marks in Math        : ");
    scanf("%d", &Math);
    if (Math < 0 || Math > 100)
    {
        printf("plzz enterr valid number 0 to 100 Only ");
        scanf("%d", &Math);
    }

    printf("Enter marks in Computer    : ");
    scanf("%d", &Computer);
    if (Computer < 0 || Computer > 100)
    {
        printf("plzz enterr valid number 0 to 100 Only ");
        scanf("%d", &Computer);
    }

    printf("Enter marks in Hindi       : ");
    scanf("%d", &Hindi);
    if (Hindi < 0 || Hindi > 100)
    {
        printf("plzz enterr valid number 0 to 100 Only ");
        scanf("%d", &Hindi);
    }

    printf("Enter marks in Chemistry   : ");
    scanf("%d", &Chemistry);

    total = English + Math + Computer + Hindi + Chemistry;
    percentage = (total / 500.0) * 100;
    printf("\n\n <----------Student Marks Sheet----------> \n\n");

    printf("English     : %d\n", English);
    printf("Math        : %d\n", Math);
    printf("Computer    : %d\n", Computer);
    printf("Hindi       : %d\n", Hindi);
    printf("Chemistry   : %d\n\n", Chemistry);

    printf("Total Marks : %d / 500\n", total);
    printf("Percentage  : %.2f\n", percentage);

    if (percentage >= 60)
    {
        printf("Grade A");
    }
    else if (percentage >= 45)
    {
        printf("Grade B");
    }
    else if (percentage >= 33)
    {
        printf("Grade C");
    }
    else
    {
        printf("You are Failed");
    }

    printf("\n\n\n\n");
    return 0;
}
